import PricingCardItem from "./PricingCardItem";
import { annualPricingDetails } from "../mocks";
import { AnimatePresence, motion } from "framer-motion";

export default function AnnualPricingPlan() {
  return (
    <AnimatePresence key={2}>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300 }}
        transition={{ duration: 0.33 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-6 p-5"
      >
        {annualPricingDetails.map((pricing, index) => {
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
