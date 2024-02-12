import { getOverviewOrders } from "@/services/orders/getOverviewOrders";
import OrdersGroup from "./components/OrdersGroup";

export default async function Orders() {
  const orders = await getOverviewOrders();
  return (
    <>
      <OrdersGroup orders={orders.data} />
    </>
  );
}
