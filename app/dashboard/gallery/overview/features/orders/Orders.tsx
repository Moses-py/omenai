import { getOverviewOrders } from "@/services/orders/getOverviewOrders";
import OverviewComponentCard from "../../components/OverviewComponentCard";
import OverviewOrdersCard from "./components/OverviewOrdersCard";
import NotFoundData from "../../../components/NotFoundData";
import { formatIntlDateTime } from "@/utils/formatIntlDateTime";

export default async function Orders() {
  const orders = await getOverviewOrders();
  console.log(orders);
  return (
    <OverviewComponentCard
      fullWidth={false}
      title={"Recent orders"}
      id="tour-footer"
    >
      {orders.data.length === 0 ? (
        <NotFoundData />
      ) : (
        <div className="flex flex-col gap-3 w-full">
          {orders.data.map((order: any, index: number) => {
            return (
              <OverviewOrdersCard
                key={index}
                url={order.artwork_data.url}
                title={order.artwork_data.title}
                artist={order.artwork_data.artist}
                buyer={order.buyer.name}
                price={order.artwork_data.pricing.price}
                order_date={formatIntlDateTime(order.createdAt)}
              />
            );
          })}
        </div>
      )}
    </OverviewComponentCard>
  );
}
