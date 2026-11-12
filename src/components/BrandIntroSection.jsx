import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, CheckCircle2, CircleDot } from 'lucide-react';
import { INGREDIENT_SPOTLIGHT } from '../data/products';

export default function BrandIntroSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050807] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00C995]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#FFC52E]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Cashew Parallax Accents */}
      <motion.img
        src="/images/hat-dieu.png"
        alt="Hạt điều tự nhiên"
        className="hidden lg:block absolute -top-10 right-[2%] w-36 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] opacity-85 pointer-events-none z-10"
        animate={{ y: [0, 24, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/images/cashew-4.png"
        alt=""
        className="hidden lg:block absolute bottom-12 left-[2%] w-24 filter blur-[0.8px] drop-shadow-xl opacity-65 pointer-events-none"
        animate={{ y: [0, -22, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062A1F] border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest">
            <Leaf className="w-3.5 h-3.5" />
            Giới Thiệu Thương Hiệu
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            HẠT DINH DƯỠNG – LỰA CHỌN CHO LỐI SỐNG TÍCH CỰC.
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00C995] to-transparent mx-auto mt-4" />

          <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed font-normal pt-2">
            Hạt Dáng Xinh mang đến các dòng snack dinh dưỡng được phối trộn từ nhiều loại nguyên liệu như <strong className="text-white">đậu phộng, hạt sen, hạt điều, hạt hướng dương, granola, yến mạch, bắp rang và trái cây sấy</strong>.
          </p>

          <p className="text-sm sm:text-base text-[#D1C5AE]/80 leading-relaxed">
            Mỗi sản phẩm được xây dựng với <strong className="text-[#FFC52E]">định lượng riêng</strong>, tạo nên sự đa dạng về hương vị, khối lượng và năng lượng, giúp bạn dễ dàng theo dõi khẩu phần ăn nhẹ mỗi ngày.
          </p>
        </div>

        {/* Visual Ingredient Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-16">
          {INGREDIENT_SPOTLIGHT.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#062A1F] border border-[#00C995]/20 hover:border-[#00C995] transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-b from-[#092c20] to-[#041710] flex items-center justify-center p-2.5">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-110 drop-shadow-lg ${
                    item.image.endsWith('.png') ? 'object-contain' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A1F] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              <div className="p-4 space-y-1 relative z-10">
                <h4 className="font-display font-bold text-white text-base group-hover:text-[#00C995] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-[#D1C5AE]/80 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Promise Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#062A1F] via-[#083527] to-[#062A1F] border border-[#00C995]/25 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#00C995]/20 flex items-center justify-center text-[#00C995] flex-shrink-0">
              <CircleDot className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Công thức đa tầng vị</h5>
              <p className="text-xs text-[#D1C5AE]/70 mt-0.5">
                Không đơn điệu một loại hạt, kết hợp bùi béo, ngọt dịu và giòn xốp.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#FFC52E]/20 flex items-center justify-center text-[#FFC52E] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Cân đo minh bạch</h5>
              <p className="text-xs text-[#D1C5AE]/70 mt-0.5">
                Cung cấp rõ ràng gam và calo ước tính, an tâm theo dõi khẩu phần.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#00C995]/20 flex items-center justify-center text-[#00C995] flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Tiện dụng mọi lúc</h5>
              <p className="text-xs text-[#D1C5AE]/70 mt-0.5">
                Gói nhỏ bảo quản cao cấp, dễ dàng mang đến trường, công sở hay phòng tập.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
