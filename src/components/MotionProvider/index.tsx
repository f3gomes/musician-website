import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface MotionProviderProps {
  children: ReactNode;
  delay: number;
  amount: number;
  className?: string;
}

export function MotionProvider({
  children,
  delay,
  amount,
  className,
}: MotionProviderProps) {
  return (
    <motion.div
      className={className}
      variants={fadeIn("up", delay)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount }}
    >
      {children}
    </motion.div>
  );
}
