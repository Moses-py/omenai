import PricingCardItem from "./PricingCardItem";
import { monthlyPricingDetails } from "../mocks";
import { AnimatePresence, motion } from "framer-motion";

export default function MonthlyPricingPlan() {
  return (
    <AnimatePresence key={1}>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300 }}
        transition={{ duration: 0.33 }}
        className="flex justify-center w-full gap-6 p-5"
      >
        {monthlyPricingDetails.map((pricing, index) => {
          return (
            <PricingCardItem
              key={index}
              plan={pricing.plan}
              price={pricing.price}
              features={pricing.features}
              duration={pricing.duration}
              description={pricing.description}
            />
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
