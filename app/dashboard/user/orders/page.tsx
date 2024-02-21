import OrdersGroup from "./components/OrdersGroup";
import { getOrdersForUser } from "@/services/orders/getOrdersForUser";

export default async function Orders() {
  const orders = await getOrdersForUser();
  if (!orders?.isOk) throw new Error("Something went wrong, please try again");
  return (
    <>
      <OrdersGroup orders={orders.data} />
    </>
  );
}
