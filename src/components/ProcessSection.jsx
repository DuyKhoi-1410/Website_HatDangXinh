import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Scale, PackageCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/products';

export default function ProcessSection() {
  const stepIcons = [Sparkles, Layers, Scale, PackageCheck];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#050807] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#00C995]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062A1F] border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Kể Chuyện Sản Phẩm
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            QUY TRÌNH TẠO NÊN TỪNG GÓI SNACK.
          </h2>

          <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed max-w-2xl mx-auto">
            Hành trình từ nguyên liệu tự nhiên chọn lọc đến từng gói snack dinh dưỡng chuẩn định lượng trên tay bạn.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00C995]/30 to-transparent -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group relative rounded-3xl bg-gradient-to-b from-[#07241b] to-[#041610] border border-[#00C995]/20 hover:border-[#00C995] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#00C995]/15"
                >
                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display font-black text-3xl sm:text-4xl text-[#00C995]/40 group-hover:text-[#00C995] transition-colors">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#00C995]/15 border border-[#00C995]/30 flex items-center justify-center text-[#00C995] group-hover:bg-[#00C995] group-hover:text-[#050807] transition-all shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFC52E] block mb-1">
                      {step.badge}
                    </span>

                    <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#00C995] transition-colors mb-2.5">
                      {step.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#D1C5AE]/80 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#00C995]/15 flex items-center gap-1.5 text-xs text-[#00C995] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Quy trình dự kiến tỉ mỉ</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Note on transparency */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#D1C5AE]/60 max-w-xl mx-auto">
            * Hạt Dáng Xinh cam kết minh bạch về quy trình phát triển sản phẩm; mọi thông tin năng lượng và định lượng đều dựa trên dữ liệu công thức tính toán dự kiến.
          </p>
        </div>
      </div>
    </section>
  );
}
