import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Coffee, Moon, Sparkles, ShoppingBag, Eye, Clock, Check, Info, ArrowRight } from 'lucide-react';
import { PRODUCTS, formatPrice } from '../data/products';
import { useCart } from '../data/CartContext';

export default function ComboSection() {
  const { addToCart, setSelectedProduct } = useCart();
  const comboProduct = PRODUCTS.find((p) => p.id === 'combo-01');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      index: 0,
      title: 'GÓI 01 · NỬA BUỔI SÁNG',
      timeSlot: '09:30 AM',
      name: 'Oat & Fruit Vitality',
      weight: '40g',
      calories: '132 – 136 kcal',
      icon: Sun,
      color: '#FFC52E',
      desc: 'Yến mạch vàng cùng chuối sấy dẻo và granola, đánh thức sự tỉnh táo cho nửa buổi sáng năng suất.',
      image: '/images/oat-fruit-vitality.jpg',
    },
    {
      index: 1,
      title: 'GÓI 02 · XẾ CHIỀU',
      timeSlot: '15:30 PM',
      name: 'Crispy Pop & Veggie',
      weight: '40g',
      calories: '138 kcal',
      icon: Coffee,
      color: '#00C995',
      desc: 'Bắp rang nở xốp hòa cùng khoai lang và chuối sấy giòn rụm, xua tan cơn đói nhẹ và uể oải giờ văn phòng.',
      image: '/images/crispy-pop-veggie.jpg',
    },
    {
      index: 2,
      title: 'GÓI 03 · BUỔI TỐI',
      timeSlot: '20:30 PM',
      name: 'Nutty Energy Box',
      weight: '35g',
      calories: '190 – 194 kcal',
      icon: Moon,
      color: '#00C995',
      desc: 'Đậu phộng, hạt sen sấy và hạt điều bùi thơm, dịu nhẹ dạ dày mà không tích tụ calo rỗng.',
      image: '/images/nutty-energy-box.png',
    },
  ];

  return (
    <section id="combo" className="relative py-24 sm:py-32 bg-[#062A1F]/60 overflow-hidden border-y border-[#00C995]/15">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00C995]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FFC52E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#03140e] border border-[#00C995]/30 text-[#FFC52E] text-xs font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 text-[#FFC52E]" />
            Giải Pháp Theo Nhịp Sinh Học
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            3 KHOẢNH KHẮC – 1 COMBO DINH DƯỠNG.
          </h2>

          <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-white font-display">DAILY 3-MEAL SNACK COMBO</strong> được thiết kế khoa học cho 3 thời điểm vàng cần nạp năng lượng trong ngày: Sáng – Chiều – Tối.
          </p>
        </div>

        {/* Hero Combo Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#083023] to-[#041a12] border border-[#00C995]/30 p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Center Visual Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden border border-[#00C995]/25 group">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a12] via-transparent to-transparent opacity-80" />

                {/* Step pill on image */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#050807]/80 backdrop-blur-md border border-[#00C995]/40 text-xs font-bold text-[#00C995] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC52E]" />
                  {steps[activeStep].title}
                </div>

                {/* Sub details floating tag */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#050807]/85 backdrop-blur-md border border-[#00C995]/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#00C995] font-semibold">{steps[activeStep].timeSlot}</span>
                    <h4 className="text-sm sm:text-base font-bold text-white">{steps[activeStep].name}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#D1C5AE]/70 block">{steps[activeStep].weight}</span>
                    <span className="text-xs font-bold text-[#FFC52E]">{steps[activeStep].calories}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Value Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00C995] font-bold">
                  DAILY 3-MEAL SNACK COMBO
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  Khẩu Phần Cân Bằng Cho Cả Ngày
                </h3>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC52E]">
                    80.000 VNĐ
                  </span>
                  <span className="text-xs text-[#D1C5AE]/70">/ combo (3 gói riêng biệt)</span>
                </div>
              </div>

              {/* Combo Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/20">
                  <span className="text-[11px] text-[#D1C5AE]/60 block">Quy cách</span>
                  <span className="text-sm font-bold text-white">3 gói riêng</span>
                </div>
                <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/20">
                  <span className="text-[11px] text-[#D1C5AE]/60 block">Tổng khối lượng</span>
                  <span className="text-sm font-bold text-white">115g</span>
                </div>
                <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/20 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-[#D1C5AE]/60 block">Tổng năng lượng</span>
                  <span className="text-sm font-bold text-[#FFC52E]">459 – 468 kcal*</span>
                </div>
              </div>

              {/* Verified Note Banner */}
              <div className="p-3.5 rounded-xl bg-[#03140e]/70 border border-[#FFC52E]/30 text-xs text-[#D1C5AE]/85 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#FFC52E] flex-shrink-0 mt-0.5" />
                <span>
                  * Dữ liệu năng lượng theo công bố tài liệu dự án: 459–468 kcal (Được ghi chú kiểm tra đối chiếu trước khi công bố thương mại chính thức).
                </span>
              </div>

              {/* Interactive Timeline Tabs */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C995] block">
                  Chọn thời điểm để xem chi tiết:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {steps.map((s, idx) => {
                    const Icon = s.icon;
                    const isActive = activeStep === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#00C995]/20 border-[#00C995] text-white shadow-lg shadow-[#00C995]/15'
                            : 'bg-[#03140e] border-[#00C995]/15 text-[#D1C5AE]/70 hover:border-[#00C995]/40 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold mb-1">
                          <Icon className="w-3.5 h-3.5 text-[#FFC52E]" />
                          <span>{s.timeSlot}</span>
                        </div>
                        <span className="text-[11px] block truncate font-medium">{s.name}</span>
                        <span className="text-[10px] text-[#FFC52E] block">{s.weight}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedProduct(comboProduct)}
                  className="flex-1 py-3.5 px-4 rounded-xl border border-[#00C995]/50 hover:bg-[#00C995]/15 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#00C995]" />
                  <span>KHÁM PHÁ COMBO</span>
                </button>

                <button
                  onClick={() => addToCart(comboProduct, 1)}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-extrabold text-xs transition-all shadow-xl shadow-[#00C995]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>THÊM COMBO (80.000đ)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
