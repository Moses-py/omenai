import mongoose, { Schema } from "mongoose";

const subscriptions = new Schema<SubscriptionModelSchemaTypes>(
  {
    sub_start_date: { type: Date, required: true },
    sub_expiry_date: { type: Date, required: true },
    sub_value: { type: String, required: true },
    sub_currency: { type: String, required: true },
    sub_status: { type: String, required: true },
    sub_payment_type: { type: String, required: true },
    sub_tx_ref: { type: String, required: true },
    sub_flw_ref: { type: String, required: true },
    sub_payment_status: { type: String, required: true },
    sub_card_info: { type: Schema.Types.Mixed, required: true },
    customer: { type: Schema.Types.Mixed, required: true },
  },

  { timestamps: true }
);

export const Subscriptions =
  mongoose.models.Subscriptions ||
  mongoose.model("Subscriptions", subscriptions);
