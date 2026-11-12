import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scale, Layers, PackageCheck, Check } from 'lucide-react';
import { BRAND_VALUES } from '../data/products';

export default function BrandValuesSection() {
  const iconsMap = {
    Sparkles,
    Scale,
    Layers,
    PackageCheck,
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#062A1F]/40 border-y border-[#00C995]/15 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00C995]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#FFC52E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050807] border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Giá Trị Cốt Lõi
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            VÌ SAO CHỌN HẠT DÁNG XINH?
          </h2>

          <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed max-w-xl mx-auto">
            4 trụ cột giá trị định hình trải nghiệm ăn nhẹ dinh dưỡng hiện đại, tinh sạch và tôn trọng cơ thể.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BRAND_VALUES.map((item, idx) => {
            const Icon = iconsMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group p-6 sm:p-7 rounded-3xl bg-[#051811] border border-[#00C995]/20 hover:border-[#00C995] hover:bg-[#07241a] transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#00C995]/20 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Number & Emerald line art icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#FFC52E] px-2.5 py-1 rounded-lg bg-[#03140e] border border-[#FFC52E]/30">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#00C995]/10 border border-[#00C995]/30 flex items-center justify-center text-[#00C995] group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00C995] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D1C5AE]/80 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#00C995]/10 flex items-center gap-1 text-[11px] text-[#00C995] font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Tiêu chuẩn Hạt Dáng Xinh</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
