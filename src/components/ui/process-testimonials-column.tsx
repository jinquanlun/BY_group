import React from "react";
import { motion } from "framer-motion";

export interface ProcessStep {
  step: string;
  description: string;
}

export const ProcessTestimonialsColumn = (props: {
  className?: string;
  processSteps: ProcessStep[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.processSteps.map(({ step, description }, i) => (
                <div className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full bg-white dark:bg-zinc-950 dark:border-zinc-700" key={i}>
                  <div className="space-y-4">
                    <div className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                      {step}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};