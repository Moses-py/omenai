import { formatIntlDateTime } from "@/utils/formatIntlDateTime";
import { sortOrdersDataByDate } from "@/utils/sortOrdersDataByDate";
import { AnimatePresence, motion } from "framer-motion";
import NotFoundData from "../../../../../components/notFound/NotFoundData";
import OrdersCard from "./OrdersCard";

export default function OrderHistory({ orders }: { orders: any }) {
  const history = sortOrdersDataByDate(orders);
  return (
    <AnimatePresence key={2}>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300 }}
        transition={{ duration: 0.33 }}
        className="w-full"
      >
        {history.length === 0 ? (
          <NotFoundData />
        ) : (
          <div className="flex flex-col gap-3 w-full">
            {history.map((orderlist, index) => {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <h5 className="text-sm font-medium">{orderlist.date}</h5>
                  <div className="flex flex-col gap-3 w-full">
                    {orderlist.data.map((order, index) => {
                      if (order.status !== "completed") return null;
                      return (
                        <>
                          <OrdersCard
                            key={index}
                            url={order.artwork_data.url}
                            title={order.artwork_data.title}
                            artist={order.artwork_data.artist}
                            price={order.artwork_data.pricing.price}
                            order_date={formatIntlDateTime(order.updatedAt)}
                            status={order.status}
                            order_id={order.order_id}
                            state="history"
                          />
                          <hr className="h-px my-2 bg-dark/10 border-0 dark:bg-gray-700" />
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
