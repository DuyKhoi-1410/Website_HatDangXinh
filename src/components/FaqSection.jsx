import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#062A1F]/30 border-t border-[#00C995]/15 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C995]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050807] border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            Giải Đáp Thắc Mắc
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            CÂU HỎI THƯỜNG GẶP (FAQ).
          </h2>

          <p className="text-base sm:text-lg text-[#D1C5AE]/85 leading-relaxed">
            Những thông tin chi tiết về sản phẩm, định lượng, giá bán và phương thức đặt mua tại Hạt Dáng Xinh.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#07251c] border-[#00C995]/50 shadow-lg shadow-[#00C995]/10'
                    : 'bg-[#051710] border-[#00C995]/15 hover:border-[#00C995]/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#00C995] flex items-center gap-3">
                    <span className="font-mono text-xs text-[#00C995] bg-[#03140e] px-2 py-0.5 rounded border border-[#00C995]/30">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#00C995] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FFC52E]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-[#D1C5AE]/90 leading-relaxed border-t border-[#00C995]/15">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Policy status notice according to prompt */}
        <div className="mt-8 p-4 rounded-2xl bg-[#05130d] border border-[#00C995]/20 text-center text-xs text-[#D1C5AE]/60">
          <p>
            * Các chính sách chuyên sâu về thời hạn bảo quản chi tiết theo từng lô sản xuất và quy chuẩn đổi trả riêng biệt đang trong giai đoạn cấu hình chính thức trước khi ra mắt thị trường.
          </p>
        </div>
      </div>
    </section>
  );
}
