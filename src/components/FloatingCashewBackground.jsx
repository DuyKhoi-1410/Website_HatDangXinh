import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function FloatingCashewBackground() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth out scroll values with springs for buttery smooth editorial feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms for the main blurred background
  const bgTranslateY = useTransform(smoothProgress, [0, 1], ['0%', '24%']);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.8, 1], [0.65, 0.45, 0.2]);

  // Parallax transforms for individual cashew nuts on scroll
  const nut1Y = useTransform(smoothProgress, [0, 1], [0, -360]);
  const nut1Rotate = useTransform(smoothProgress, [0, 1], [0, 75]);
  const nut1X = useTransform(smoothProgress, [0, 1], [0, -50]);

  const nut2Y = useTransform(smoothProgress, [0, 1], [0, -290]);
  const nut2Rotate = useTransform(smoothProgress, [0, 1], [-15, 55]);
  const nut2X = useTransform(smoothProgress, [0, 1], [0, 60]);

  const nut3Y = useTransform(smoothProgress, [0, 1], [0, -450]);
  const nut3Rotate = useTransform(smoothProgress, [0, 1], [10, -65]);
  const nut3X = useTransform(smoothProgress, [0, 1], [0, -45]);

  const nut4Y = useTransform(smoothProgress, [0, 1], [0, -240]);
  const nut4Rotate = useTransform(smoothProgress, [0, 1], [-20, 40]);

  const nut5Y = useTransform(smoothProgress, [0, 1], [0, -410]);
  const nut5Rotate = useTransform(smoothProgress, [0, 1], [5, -55]);
  const nut5X = useTransform(smoothProgress, [0, 1], [0, -70]);

  const nut6Y = useTransform(smoothProgress, [0, 1], [0, -210]);
  const nut6Rotate = useTransform(smoothProgress, [0, 1], [0, 45]);

  const nutLeafY = useTransform(smoothProgress, [0, 1], [0, -320]);
  const nutLeafRotate = useTransform(smoothProgress, [0, 1], [0, 60]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* 1. Blurred Background Image Layer (Original Attached Image with Soft Blur & Brand Tint) */}
      <motion.div
        style={{
          y: bgTranslateY,
          scale: bgScale,
          opacity: bgOpacity,
        }}
        className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+120px)] bg-cover bg-center filter blur-md sm:blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/images/cashew-nuts-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Atmospheric Overlays for Premium Contrast & Brand Palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050807]/80 via-[#062A1F]/65 to-[#050807]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,201,149,0.18),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,197,46,0.12),transparent_50%)]" />

      {/* 2. Layered Floating Cashew Nuts with Enhanced Idle Oscillations */}

      {/* Cashew 1: Top Left - Large, crisp, floating with strong natural sway */}
      <motion.div
        style={{ y: nut1Y, x: nut1X, rotate: nut1Rotate }}
        className="absolute top-[10%] left-[3%] sm:left-[7%] w-24 sm:w-32 md:w-38 drop-shadow-2xl z-10"
      >
        <motion.img
          animate={{
            y: [0, -42, 10, -28, 0],
            x: [0, 18, -14, 12, 0],
            rotate: [0, 14, -10, 8, 0],
            scale: [1, 1.06, 0.97, 1.03, 1],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          src="/images/cashew-1.png"
          alt="Hạt điều bay"
          className="w-full h-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] hover:brightness-110 transition-all"
        />
      </motion.div>

      {/* Cashew 2: Top Right - Medium-large nut with smooth counter-sway */}
      <motion.div
        style={{ y: nut2Y, x: nut2X, rotate: nut2Rotate }}
        className="absolute top-[14%] right-[4%] sm:right-[9%] w-28 sm:w-36 md:w-46 drop-shadow-2xl z-10"
      >
        <motion.img
          animate={{
            y: [0, 40, -12, 26, 0],
            x: [0, -22, 16, -10, 0],
            rotate: [0, -16, 12, -8, 0],
            scale: [1, 1.05, 0.96, 1.02, 1],
          }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
          src="/images/cashew-2.png"
          alt="Hạt điều bay"
          className="w-full h-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)]"
        />
      </motion.div>

      {/* Cashew 3: Mid Left - Foreground dynamic nut with high vertical amplitude */}
      <motion.div
        style={{ y: nut3Y, x: nut3X, rotate: nut3Rotate }}
        className="hidden sm:block absolute top-[42%] left-[1%] sm:left-[4%] w-22 sm:w-30 md:w-34 drop-shadow-2xl z-20"
      >
        <motion.img
          animate={{
            y: [0, -48, 14, -32, 0],
            x: [0, 16, -18, 10, 0],
            rotate: [0, 18, -12, 10, 0],
            scale: [1, 1.07, 0.95, 1.04, 1],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.7,
          }}
          src="/images/cashew-3.png"
          alt="Hạt điều bay"
          className="w-full h-auto filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      {/* Cashew 4: Mid-Right Background - Depth nut with undulating motion */}
      <motion.div
        style={{ y: nut4Y, rotate: nut4Rotate }}
        className="absolute top-[46%] right-[2%] sm:right-[6%] w-24 sm:w-34 drop-shadow-xl z-5"
      >
        <motion.img
          animate={{
            y: [0, 36, -10, 22, 0],
            x: [0, -16, 14, -8, 0],
            rotate: [0, -14, 10, -6, 0],
            scale: [1, 1.04, 0.98, 1.02, 1],
          }}
          transition={{
            duration: 6.0,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.1,
          }}
          src="/images/cashew-4.png"
          alt="Hạt điều bay"
          className="w-full h-auto filter blur-[1px] opacity-85 drop-shadow-[0_12px_22px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* Cashew 5: Bottom Center-Right - Ascending nut with lively bounce */}
      <motion.div
        style={{ y: nut5Y, x: nut5X, rotate: nut5Rotate }}
        className="absolute top-[68%] right-[16%] sm:right-[24%] w-24 sm:w-32 md:w-38 drop-shadow-2xl z-15"
      >
        <motion.img
          animate={{
            y: [0, -44, 12, -26, 0],
            x: [0, 20, -15, 12, 0],
            rotate: [0, 16, -14, 8, 0],
            scale: [1, 1.06, 0.97, 1.03, 1],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          src="/images/cashew-5.png"
          alt="Hạt điều bay"
          className="w-full h-auto filter drop-shadow-[0_22px_35px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      {/* Cashew 6: Bottom Left - Small depth nut */}
      <motion.div
        style={{ y: nut6Y, rotate: nut6Rotate }}
        className="hidden md:block absolute top-[72%] left-[12%] w-18 sm:w-24 drop-shadow-lg z-5"
      >
        <motion.img
          animate={{
            y: [0, 32, -8, 20, 0],
            x: [0, -14, 12, -6, 0],
            rotate: [0, -12, 8, -5, 0],
            scale: [1, 1.05, 0.97, 1.02, 1],
          }}
          transition={{
            duration: 5.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.4,
          }}
          src="/images/cashew-6.png"
          alt="Hạt điều bay"
          className="w-full h-auto filter blur-[1.2px] opacity-80 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* Cashew 7: Top-Center Right with Green Leaf Accent - Extra organic floating element */}
      <motion.div
        style={{ y: nutLeafY, rotate: nutLeafRotate }}
        className="hidden lg:block absolute top-[28%] right-[24%] w-28 md:w-36 drop-shadow-2xl z-10"
      >
        <motion.img
          animate={{
            y: [0, -36, 12, -22, 0],
            x: [0, -18, 14, -10, 0],
            rotate: [0, -14, 10, -6, 0],
            scale: [1, 1.05, 0.96, 1.03, 1],
          }}
          transition={{
            duration: 5.0,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.9,
          }}
          src="/images/hat-dieu.png"
          alt="Hạt điều tự nhiên"
          className="w-full h-auto filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] opacity-90"
        />
      </motion.div>
    </div>
  );
}
