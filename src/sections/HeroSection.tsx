"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      dir="rtl"
      aria-label="الرئيسية - منصة حماية المستهلك"
      className="relative pt-24 pb-10 md:pt-32 md:pb-16 border-b border-[#e8ded1] bg-[#faf6f0] overflow-hidden"
    >
      <div className="container-page relative z-10 flex flex-col items-center">
        
        {/* الحاوية العلوية */}
        <div className="w-full rounded-3xl border border-[#e2d5c5] bg-white/80 backdrop-blur-sm p-5 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <motion.h1
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#1a0f07] leading-[1.3]"
              >
                منصة   حماية   المستهلك
              </motion.h1>

              <motion.div
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
              >
                <span className="text-3xl sm:text-4xl lg:text-[2.75rem] text-[#8c4d1c] font-bold inline-block mt-1 leading-[1.3]">
                  لرفع وتقديم شكاوى المستهلك
                </span>
              </motion.div>

              <motion.p
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                className="mt-4 text-base sm:text-lg text-[#524336] leading-relaxed max-w-xl font-normal"
              >
                منصة رقمية موحدة تتيح لك تقديم شكواك وملاحظاتك بسهولة، مع متابعة فورية ودقيقة لجميع المراحل من مكان واحد.
              </motion.p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <motion.div 
                custom={0.45}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#e8ded1] bg-[#fdfbf7] shadow-md p-2"
              >
                <img
                  src="/loader.gif"
                  alt="توضيح تقديم الشكوى"
                  className="w-full h-auto max-h-[270px] sm:max-h-[320px] object-cover rounded-xl"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* زر تقديم الشكوى - زيادة الارتفاع بلمسة بسيطة */}
        <motion.div
          custom={0.55}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="mt-10 w-full"
        >
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="
              group relative flex w-full items-center justify-center gap-4
              overflow-hidden rounded-2xl
              bg-gradient-to-l from-[#1a0f07] via-[#2c1a0f] to-[#8c4d1c]
              px-8 py-[1.375rem] text-lg font-bold text-[#fdfbf7]
              shadow-[0_10px_30px_-5px_rgba(26,15,7,0.35)]
              border border-[#8c4d1c]/30
              transition-all duration-300 ease-out
              hover:shadow-[0_14px_40px_-5px_rgba(140,77,28,0.5)]
              hover:scale-[1.01]
              active:scale-[0.99]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c4d1c] focus-visible:ring-offset-2
            "
          >
            {/* إضاءة خلفية وتوهج عند التمرير */}
            <span
              className="
                absolute inset-0 
                bg-gradient-to-r from-[#8c4d1c]/0 via-white/10 to-[#8c4d1c]/0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
            />

            {/* خط ضوئي متحرك Shimmer Effect */}
            <span
              className="
                absolute inset-0 -translate-x-full
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                group-hover:translate-x-full
                transition-transform duration-1000 ease-out
              "
            />

            {/* أيقونة الشكوى */}
            <motion.div
              className="relative flex items-center justify-center"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#e8d5c0] transition-colors duration-300 group-hover:text-white"
              >
                <path
                  d="M7 3.5h7.5L18.5 7.5v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19.5v-14A1.5 1.5 0 0 1 7 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 3.5V7h3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11h7M8.5 14.5h5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="17.5"
                  cy="16.5"
                  r="3.2"
                  fill="currentColor"
                  className="opacity-90"
                />
                <path
                  d="M17.5 15v3M16 16.5h3"
                  stroke="#1a0f07"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            
            <span className="relative tracking-wide font-extrabold text-lg">تقديم شكوى جديدة</span>
            
            <ArrowLeft className="relative h-5 w-5 text-[#e8d5c0] transition-all duration-300 group-hover:text-white group-hover:-translate-x-2" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}