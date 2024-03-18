import { sendSubscriptionPaymentFailedMail } from "@/emails/models/subscription/sendSubscriptionPaymentFailedMail";
import { sendSubscriptionPaymentSuccessfulMail } from "@/emails/models/subscription/sendSubscriptionPaymentSuccessMail";
import { Subscriptions } from "@/models/subscriptions/SubscriptionSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  const secretHash = process.env.FLW_SECRET_HASH;
  const signature = request.headers.get("verif-hash");

  if (!signature || signature !== secretHash) {
    // This request isn't from Flutterwave, discard
    return NextResponse.json({ status: 401 });
  }
  // Send failure mail if status is failure

  if (req.data.status === "failed") {
    await sendSubscriptionPaymentFailedMail({
      name: req.data.customer.name,
      email: req.data.customer.email,
    });

    return NextResponse.json({ status: 200 });
  }
  if (req.data.status === "pending") {
    // await sendSubscriptionPaymentFailedMail({
    //   name: req.data.customer.name,
    //   email: req.data.customer.email,
    // });

    return NextResponse.json({ status: 200 });
  }
  // Verify transaction again

  const verify_transaction = await fetch(
    `https://api.flutterwave.com/v3/transactions/${req.data.id}/verify`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
      },
    }
  );

  const convert_verify_transaction_json_response =
    await verify_transaction.json();

  if (
    convert_verify_transaction_json_response.data.status === "successful" &&
    convert_verify_transaction_json_response.data.tx_ref === req.data.tx_ref &&
    convert_verify_transaction_json_response.data.amount === req.data.amount &&
    convert_verify_transaction_json_response.data.currency === req.data.currency
  ) {
    // Success! Confirm the customer's payment

    // Check DB to see if a subscription with this customer reference is present
    const found_customer = await Subscriptions.findOne({
      "customer.email": req.data.customer.email,
    });
    // Create new customer subscription
    if (!found_customer) {
      const currentDate = new Date();
      const expiryDate = new Date(
        currentDate.getTime() + 30 * 24 * 60 * 60 * 1000 - 2 * 60 * 1000
      ); // Subtracting 2 minutes
      const subscription_data = {
        sub_card_info: req.data.card,
        sub_start_date: currentDate,
        sub_expiry_date: expiryDate,
        sub_status: "active",
        sub_value: req.data.amount,
        sub_currency: req.data.currency,
        sub_tx_ref: req.data.tx_ref,
        sub_flw_ref: req.data.flw_ref,
        sub_payment_type: req.data.payment_type,
        sub_payment_status: req.data.status,
        customer: {
          email: req.data.customer.email,
          name: req.data.customer.name,
          flw_customer_id: req.data.customer.id,
        },
      };

      const create_customer_subscription_document = await Subscriptions.create({
        ...subscription_data,
      });

      if (!create_customer_subscription_document)
        return NextResponse.json({ status: 401 });
      else {
        // Send subscription started email
        await sendSubscriptionPaymentSuccessfulMail({
          name: req.data.customer.name,
          email: req.data.customer.email,
        });
        return NextResponse.json({ status: 200 });
      }
    }

    // If found customer, check if status is same as request, if yes, discard, if no, update status
    if (found_customer.sub_payment_status === req.data.status) {
      return NextResponse.json({ status: 200 });
    } else {
      const currentDate = new Date();
      const expiryDate = new Date(
        currentDate.getTime() + 30 * 24 * 60 * 60 * 1000 - 2 * 60 * 1000
      ); // Subtracting 2 minutes

      const update_subscription_data = await Subscriptions.updateOne(
        { "customer.email": req.data.customer.email },
        {
          $set: {
            sub_card_info: req.data.card,
            sub_start_date: currentDate,
            sub_expiry_date: expiryDate,
            sub_status: "active",
            sub_value: req.data.amount,
            sub_currency: req.data.currency,
            sub_tx_ref: req.data.tx_ref,
            sub_flw_ref: req.data.flw_ref,
          },
        }
      );

      if (!update_subscription_data) return NextResponse.json({ status: 401 });
      else {
        // Send subscription active email
        await sendSubscriptionPaymentSuccessfulMail({
          name: req.data.customer.name,
          email: req.data.customer.email,
        });
        return NextResponse.json({ status: 200 });
      }
    }
  } else {
    return NextResponse.json({ status: 200 });
  }
}
