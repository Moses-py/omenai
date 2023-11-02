import OverviewComponentCard from "../../components/OverviewComponentCard";
import OverviewOrdersCard from "./components/OverviewOrdersCard";
import { overviewOrdersMock } from "./mocks";

export default function Orders() {
  return (
    <>
      <OverviewComponentCard fullWidth={false} title={"Recent orders"}>
        <div className="flex flex-col gap-3 w-full">
          {overviewOrdersMock.map((order, index) => {
            return (
              <OverviewOrdersCard
                key={index}
                url={order.url}
                title={order.title}
                artist={order.artist}
                buyer={order.buyer}
                price={order.price}
                order_date={order.order_date}
              />
            );
          })}
        </div>
      </OverviewComponentCard>
    </>
  );
}
