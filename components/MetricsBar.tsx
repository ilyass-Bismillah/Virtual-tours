"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 25,
    suffix: "+",
    label: "Design Awards",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; 

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutExpo) 
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function MetricsBar() {
  return (
    <section className="relative py-24 bg-linear-to-r from-dark-bg via-terracotta/5 tp-dark-bg overflow-hidden">
      {/* Subtle Top & Bottom Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Metric Number + Colored Suffix */}
              <div className="flex items-baseline justify-center font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-none mb-3.5 select-none">
                <Counter target={stat.value} />
                <span className="text-terracotta ml-1 font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm text-[#A19E9B] font-light tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}