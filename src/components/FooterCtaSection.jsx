import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function FooterCtaSection() {
  return (
    <footer className="relative bg-[#050807] overflow-hidden pt-20 border-t border-[#00C995]/20">
      {/* Upper CTA Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#062A1F] via-[#093a2b] to-[#041a12] border border-[#00C995]/30 p-8 sm:p-14 text-center shadow-2xl shadow-[#00C995]/10">
          {/* Radial glow within banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00C995]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050807]/70 border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC52E]" />
              Sẵn Sàng Cho Bữa Nhẹ Lành Mạnh
            </span>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                BẮT ĐẦU LỰA CHỌN
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#00C995] tracking-tight leading-tight">
                HƯƠNG VỊ CỦA BẠN.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed font-normal">
              Khám phá các dòng snack và combo dinh dưỡng từ <strong className="text-white">HẠT DÁNG XINH</strong> – Đồng hành cùng phong cách sống cân đối mỗi ngày.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#products"
                className="px-8 py-4 rounded-2xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-[#00C995]/25 flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>MUA SẮM NGAY</span>
              </a>

              <a
                href="#combo"
                className="px-8 py-4 rounded-2xl bg-[#03140e] hover:bg-[#07241a] border border-[#00C995]/40 text-[#F4EBD8] font-bold text-sm sm:text-base transition-all hover:border-[#00C995] flex items-center gap-2 cursor-pointer"
              >
                <span>KHÁM PHÁ SẢN PHẨM</span>
                <ArrowRight className="w-4 h-4 text-[#00C995]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6 border-t border-[#00C995]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#062A1F] to-[#0d3d2e] border border-[#00C995]/40 flex items-center justify-center text-[#00C995]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                  <path d="M12 2C7 5 5 10 5 15a7 7 0 0 0 14 0c0-5-2-10-7-13Z" />
                  <path d="M12 2v20" />
                  <circle cx="12" cy="12" r="2.5" fill="#FFC52E" stroke="none" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-xl text-white">HẠT DÁNG XINH</span>
                <span className="text-[10px] tracking-widest uppercase text-[#00C995] font-semibold block">
                  Premium Organic Snack
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D1C5AE]/80 max-w-sm leading-relaxed">
              Thương hiệu hạt dinh dưỡng, snack healthy, combo ăn nhẹ và set quà tặng sức khỏe. Ăn lành mỗi ngày - Sống khỏe mỗi chất.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#00C995]">
              <ShieldCheck className="w-4 h-4 text-[#FFC52E]" />
              <span>Chính ngạch nông sản tự nhiên 100%</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#00C995]">
              Sản phẩm
            </h4>
            <ul className="space-y-2 text-xs text-[#D1C5AE]/80">
              <li>
                <a href="#products" className="hover:text-[#00C995] transition-colors">
                  Snack Lẻ 30.000đ
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00C995] transition-colors">
                  Nutty Energy Box
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00C995] transition-colors">
                  Oat & Fruit Vitality
                </a>
              </li>
              <li>
                <a href="#combo" className="hover:text-[#00C995] transition-colors">
                  Daily 3-Meal Combo (80k)
                </a>
              </li>
              <li>
                <a href="#giftset" className="hover:text-[#00C995] transition-colors">
                  Healthy Daily Mini (249k)
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#00C995]">
              Về thương hiệu
            </h4>
            <ul className="space-y-2 text-xs text-[#D1C5AE]/80">
              <li>
                <a href="#about" className="hover:text-[#00C995] transition-colors">
                  Giới thiệu câu chuyện
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#00C995] transition-colors">
                  Quy trình 4 bước
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#00C995] transition-colors">
                  Triết lý dinh dưỡng
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00C995] transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#00C995]">
              Liên hệ đặt hàng
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C5AE]/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00C995] flex-shrink-0 mt-0.5" />
                <span>Đà Nẵng & Giao hàng toàn quốc</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00C995] flex-shrink-0" />
                <span className="font-mono text-white">0905 123 456 (Hotline tư vấn)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00C995] flex-shrink-0" />
                <span>contact@hatdangxinh.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFC52E] flex-shrink-0" />
                <span>08:00 - 21:00 (Thứ 2 - Chủ Nhật)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-[#00C995]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1C5AE]/60 gap-3">
          <p>© {new Date().getFullYear()} HẠT DÁNG XINH. Bản quyền thương mại điện tử.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Định lượng rõ ràng</span>
            <span>•</span>
            <span>Hương vị tự nhiên</span>
            <span>•</span>
            <span>Chất lượng cao cấp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
