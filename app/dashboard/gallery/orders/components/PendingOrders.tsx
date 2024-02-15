import { formatIntlDateTime } from "@/utils/formatIntlDateTime";
import { AnimatePresence, motion } from "framer-motion";
import NotFoundData from "../../../../../components/notFound/NotFoundData";
import OverviewOrdersCard from "../../components/OverviewOrdersCard";
import { ObjectId } from "mongoose";

export default function PendingOrders({
  orders,
}: {
  orders: CreateOrderModelTypes[] & {
    createdAt: string;
    updatedAt: string;
    _id: ObjectId;
  };
}) {
  return (
    <AnimatePresence key={1}>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300 }}
        transition={{ duration: 0.33 }}
        className="w-full"
      >
        {orders.length === 0 ? (
          <NotFoundData />
        ) : (
          <div className="flex flex-col gap-3 w-full">
            {orders.map((order: any, index: number) => {
              return (
                <>
                  <OverviewOrdersCard
                    key={index}
                    url={order.artwork_data.url}
                    title={order.artwork_data.title}
                    artist={order.artwork_data.artist}
                    buyer={order.buyer.name}
                    price={order.artwork_data.pricing.price}
                    order_date={formatIntlDateTime(order.createdAt)}
                    status={order.status}
                    order_id={order.order_id}
                    shipping_address={order.shipping_address}
                    state="pending"
                    payment_information={order.payment_information}
                    tracking_information={order.tracking_information}
                    shipping_quote={order.shipping_quote}
                  />
                  <hr className="h-px my-2 bg-base-theme/10 border-0 dark:bg-gray-700" />
                </>
              );
            })}
          </div>
        )}
      </motion.div>
      ;
    </AnimatePresence>
  );
}
