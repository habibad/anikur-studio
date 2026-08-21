"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import PillButton from "./PillButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Recognition",
      description: "We build visual systems that make brands clear and memorable.",
      progress: "65%",
    },
    {
      title: "Clarity",
      description: "Structured design languages that communicate without friction.",
      progress: "100%",
    },
  ];

  const currentSlide = slides[activeSlide % slides.length];

  return (
    <section className="relative h-screen min-h-[720px] max-h-[1080px] w-full overflow-hidden bg-[#0d0101] flex flex-col justify-between select-none">
      {/* Top-Left Ambient Liquid Glow matching reference image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-[750px] w-[750px] md:h-[900px] md:w-[900px] rounded-full opacity-95 blur-[110px] z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #FF5100 0%, #EE0000 38%, rgba(238, 0, 0, 0.15) 65%, transparent 85%)",
        }}
      />

      {/* Center Spotlight Glow Focus behind Model & ANIKUR text (Vibrant Studio Spotlight) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 bottom-[8%] -translate-x-1/2 h-[700px] w-[800px] md:h-[850px] md:w-[950px] rounded-full blur-[100px] z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #FF5100 0%, #EE0000 38%, rgba(238, 0, 0, 0.25) 62%, transparent 82%)",
        }}
      />

      {/* Layer 1: Massive Solid Bold Watermark: ANIKUR (Rises from below as the final reveal under the image) */}
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 0.95, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 flex justify-center text-center pointer-events-none select-none overflow-hidden w-full"
      >
        <span className="block font-black uppercase text-[22vw] sm:text-[20.5vw] md:text-[19.5vw] lg:text-[18.8vw] leading-[0.76] tracking-tighter text-[#FFF7F7]">
          ANIKUR
        </span>
      </motion.div>

      {/* Layer 2: Center Model Cutout (Scaled up to 86vh for full cinematic presence) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-20 mx-auto flex h-[82vh] sm:h-[85vh] md:h-[88vh] max-h-[940px] min-h-[580px] w-full max-w-[780px] md:max-w-[880px] lg:max-w-[960px] xl:max-w-[1040px] items-end justify-center pointer-events-none"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/anikur photo.png"
            alt="Editorial portrait of Anikur"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 1040px"
            className="object-contain object-bottom"
          />
        </div>
      </motion.div>

      {/* Layer 3: Main Foreground Grid Content (Exact 1:1 Pixel-Perfect Alignment matching reference) */}
      <div className="relative z-30 mx-auto w-full max-w-[1800px] h-full px-6 md:px-12 lg:px-16 pt-28 md:pt-30 lg:pt-40 pb-6 flex flex-col justify-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start w-full"
        >
          {/* LEFT COLUMN: Eyebrow, Large Bold Headline, Subtitle, and Prominent CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start text-left justify-start">
            <motion.p
              variants={itemVariants}
              className="text-[13px] sm:text-[14px] font-normal tracking-[0.08em] text-[#BABABA] mb-3.5"
            >
              Marketing agency
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-[48px] sm:text-[60px] md:text-[72px] lg:text-[78px] xl:text-[88px] font-semibold leading-[0.91] tracking-[-0.038em] text-[#FFF7F7]"
            >
              Clarity first.
              <br />
              Then the
              <br />
              system.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-[380px] text-[16px] font-normal leading-[1.5] text-white"
            >
              Strategy, identity and communication shaped into one clear brand
              system.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4"
            >
              <PillButton label="Start a Project" href="/contact" variant="primary" size="lg" />
              <PillButton label="View Our Work" href="/projects" variant="secondary" size="lg" />
            </motion.div>
          </div>

          {/* Center Spacer Column (Clear window for center portrait model's head & torso) */}
          <div className="hidden lg:col-span-2 lg:block pointer-events-none" />

          {/* RIGHT COLUMN: Floating Recognition Widget & 100% / 360° Metrics */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-start w-full">
            <div className="w-full max-w-[460px] flex flex-col items-start">
              {/* Floating Recognition Widget */}
              <motion.div
                variants={itemVariants}
                className="w-full flex items-start gap-4 sm:gap-5"
              >
                {/* Thumbnail image: man in black hoodie against vibrant red studio background */}
                <div className="relative h-[150px] w-[150px] sm:h-[150px] sm:w-[150px] shrink-0 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/hero-thumb-man.png"
                    alt="Recognition thumbnail"
                    fill
                    sizes="200px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex-1 pt-0.5 pr-8 relative">
                  {/* Top-right corner circular arrow badge */}
                  <div className="absolute right-0 top-0">
                    <span className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-[#FFF7F7] text-[#100101] shadow-md transition-transform hover:scale-110">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </div>

                  <h3 className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#FFF7F7]">
                    {currentSlide.title}
                  </h3>
                  <p className="mt-1 text-[14px] sm:text-[16px] leading-[1.4] text-white font-normal max-w-[250px]">
                    {currentSlide.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    {/* Active progress bar indicator */}
                    <div className="h-[2.5px] w-22 overflow-hidden rounded-full bg-white/20">
                      <motion.div
                        animate={{ width: currentSlide.progress }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-[#EE0000]"
                      />
                    </div>

                    {/* Navigation buttons: Left (White) & Right (Orange) */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setActiveSlide((s) => (s > 0 ? s - 1 : slides.length - 1))
                        }
                        aria-label="Previous slide"
                        className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-[#FFF7F7] text-[#100101] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-sm"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </button>
                      <button
                        onClick={() => setActiveSlide((s) => s + 1)}
                        aria-label="Next slide"
                        className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-[#FF5100] text-[#FFF7F7] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-sm shadow-[#FF5100]/40"
                      >
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Large Metric Columns (100% & 360°) */}
              <div className="grid grid-cols-2 gap-8 sm:gap-12 pt-8 sm:pt-10 w-full">
                <motion.div variants={itemVariants}>
                  <p className="text-[52px] sm:text-[62px] md:text-[72px] font-light leading-none tracking-tight text-[#FFF7F7]">
                    100%
                  </p>
                  <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.45] text-white max-w-[185px] font-normal">
                    No random visuals. Only clear systems built for recognition.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-[52px] sm:text-[62px] md:text-[72px] font-light leading-none tracking-tight text-[#FFF7F7]">
                    360°
                  </p>
                  <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.45] text-white max-w-[185px] font-normal">
                    Full brand presence. From strategy and identity to launch.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
