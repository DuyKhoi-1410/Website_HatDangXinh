import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';
import FloatingCashewBackground from './FloatingCashewBackground';
import { useCart } from '../data/CartContext';
import { PRODUCTS } from '../data/products';

export default function HeroSection() {
  const { setSelectedProduct } = useCart();
  const nuttyEnergyProduct = PRODUCTS.find((p) => p.id === 'sp01') || PRODUCTS[0];
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-[#050807]"
    >
      {/* Dynamic Blurred Background with Floating Parallax Cashews */}
      <FloatingCashewBackground />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C995]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#FFC52E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#062A1F] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Nut & Seed Decor Elements with Lively Oscillations */}
      <motion.div
        animate={{
          y: [0, -32, 8, -20, 0],
          x: [0, 12, -10, 8, 0],
          rotate: [0, 8, -6, 4, 0],
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute top-28 left-[8%] z-20 p-2.5 pr-4 rounded-2xl bg-[#062A1F]/85 border border-[#00C995]/40 backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5">
          <img src="/images/hat-dieu.png" alt="Hạt điều" className="w-7 h-7 object-contain drop-shadow" />
          <span className="text-xs font-semibold text-[#F4EBD8]">Hạt Điều Sấy Nguyên Vị</span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, -10, 20, 0],
          x: [0, -14, 10, -8, 0],
          rotate: [0, -8, 6, -4, 0],
        }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="hidden lg:block absolute bottom-36 left-[12%] z-20 p-2.5 pr-4 rounded-2xl bg-[#062A1F]/85 border border-[#FFC52E]/40 backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5">
          <img src="/images/oat-fruit-vitality.jpg" alt="Oat & Fruit" className="w-7 h-7 rounded-lg object-cover border border-[#FFC52E]/40" />
          <span className="text-xs font-semibold text-[#F4EBD8]">Granola & Yến Mạch Giòn Rụm</span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -34, 12, -22, 0],
          x: [0, -12, 14, -6, 0],
          rotate: [0, 9, -7, 5, 0],
        }}
        transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="hidden lg:block absolute top-36 right-[8%] z-20 p-2.5 pr-4 rounded-2xl bg-[#062A1F]/85 border border-[#00C995]/40 backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5">
          <img src="/images/hat-sen-say.png" alt="Hạt Sen Sấy" className="w-7 h-7 object-contain drop-shadow" />
          <span className="text-xs font-semibold text-[#F4EBD8]">Hạt Sen Sấy Mộc Mạc</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Concept badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062A1F] border border-[#00C995]/40 text-[#00C995] text-xs font-extrabold uppercase tracking-widest shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#00C995]" />
              PREMIUM ORGANIC · EAT CLEAN · LIVE BEAUTIFUL
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-sm sm:text-base font-extrabold tracking-[0.3em] uppercase text-[#D1C5AE]/80 mb-2">
                THƯƠNG HIỆU HẠT DINH DƯỠNG
              </h1>
              <span className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight block text-white">
                HẠT DÁNG XINH
              </span>
            </motion.div>

            {/* Big Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-1"
            >
              <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight editorial-gradient-text">
                ĂN LÀNH MỖI NGÀY
              </h2>
              <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight gold-gradient-text">
                SỐNG KHỎE MỖI CHẤT.
              </h2>
            </motion.div>

            {/* Editorial Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-[#D1C5AE]/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Khám phá thế giới snack dinh dưỡng được phối trộn từ các loại hạt và nguyên liệu tự nhiên, mang đến lựa chọn ăn nhẹ thú vị cho mỗi ngày.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#products"
                className="px-8 py-4 rounded-2xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-extrabold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#00C995]/25 flex items-center gap-2 group cursor-pointer"
              >
                <span>KHÁM PHÁ SẢN PHẨM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#combo"
                className="px-7 py-4 rounded-2xl bg-[#062A1F] hover:bg-[#0d3d2e] border border-[#00C995]/40 text-[#F4EBD8] font-bold text-sm sm:text-base transition-all hover:border-[#00C995] flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FFC52E]" />
                <span>TÌM COMBO PHÙ HỢP</span>
              </a>
            </motion.div>

            {/* Quick Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-[#00C995]/15 grid grid-cols-3 gap-4 text-center lg:text-left text-xs text-[#D1C5AE]/80"
            >
              <div>
                <span className="block font-bold text-white text-sm">30.000đ</span>
                <span className="text-[11px] text-[#00C995]">Đồng giá 5 vị snack</span>
              </div>
              <div>
                <span className="block font-bold text-white text-sm">Chuẩn Gam</span>
                <span className="text-[11px] text-[#FFC52E]">Định lượng chính xác</span>
              </div>
              <div>
                <span className="block font-bold text-white text-sm">3 Khẩu Phần</span>
                <span className="text-[11px] text-[#00C995]">Combo Sáng - Chiều - Tối</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High Visual Editorial Product Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00C995]/20 via-[#FFC52E]/10 to-transparent rounded-3xl blur-2xl transform -rotate-3" />

              {/* Main Visual Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#062A1F] to-[#041a12] border border-[#00C995]/30 p-4 sm:p-6 shadow-2xl overflow-hidden group">
                <div
                  onClick={() => setSelectedProduct(nuttyEnergyProduct)}
                  title="Bấm để xem chi tiết Nutty Energy Box"
                  className="relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden mb-4 cursor-pointer group/card"
                >
                  <img
                    src="/images/nutty-energy-box.png"
                    alt="Hạt Dáng Xinh - Nutty Energy Box"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041a12]/90 via-transparent to-transparent opacity-60" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#050807]/85 backdrop-blur-md border border-[#00C995]/40 text-[#00C995] text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC52E]" />
                    Bộ Sưu Tập Snack Healthy
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#050807]/90 backdrop-blur-md border border-[#00C995]/30 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#00C995] font-semibold uppercase tracking-wider block">
                        Dòng Bán Chạy
                      </span>
                      <span className="text-sm font-bold text-white">Nutty Energy Box</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#D1C5AE]/60 block">Định lượng 33,6g</span>
                      <span className="text-sm font-bold text-[#FFC52E]">30.000đ</span>
                    </div>
                  </div>
                </div>

                {/* Sub Features Grid below image */}
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/15">
                    <span className="text-[#00C995] font-bold block mb-0.5">Hương vị tự nhiên</span>
                    <span className="text-[#D1C5AE]/70 text-[11px]">Không đường tinh luyện</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/15">
                    <span className="text-[#FFC52E] font-bold block mb-0.5">Calo rõ ràng</span>
                    <span className="text-[#D1C5AE]/70 text-[11px]">Từ 109 – 187 kcal</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 text-center mt-12 hidden md:block">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-xs text-[#D1C5AE]/50 hover:text-[#00C995] transition-colors"
        >
          <span className="tracking-widest uppercase font-semibold">Khám phá câu chuyện</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#00C995]" />
        </a>
      </div>
    </section>
  );
}
