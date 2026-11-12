import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, ShoppingBag, Eye, Heart, ShieldCheck, ChevronRight, PackageCheck } from 'lucide-react';
import { PRODUCTS, formatPrice } from '../data/products';
import { useCart } from '../data/CartContext';

export default function GiftSetSection() {
  const { addToCart, setSelectedProduct } = useCart();
  const giftProduct = PRODUCTS.find((p) => p.id === 'gift-01');
  const [selectedJarIndex, setSelectedJarIndex] = useState(0);

  const jars = giftProduct?.jars || [];

  return (
    <section id="giftset" className="relative py-24 sm:py-32 bg-[#050807] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#FFC52E]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#00C995]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062A1F] border border-[#FFC52E]/40 text-[#FFC52E] text-xs font-bold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5 text-[#FFC52E]" />
            Bộ Quà Tặng Sức Khỏe Cao Cấp
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            GỬI TRAO DINH DƯỠNG – GỬI TRỌN YÊU THƯƠNG.
          </h2>

          <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-white font-display">HEALTHY DAILY MINI – SET 3 HŨ</strong> là món quà sức khỏe tinh tế, sang trọng dành tặng đối tác, bạn bè và người thân yêu.
          </p>
        </div>

        {/* Gift Set Master Showcase */}
        <div className="rounded-3xl bg-gradient-to-b from-[#082a20] via-[#041a12] to-[#03140e] border border-[#00C995]/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Luxury Gift Box Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#00C995]/30 group shadow-2xl">
                <img
                  src="/images/healthy-daily-mini-giftset.jpg"
                  alt="Hạt Dáng Xinh - Quà Tặng Thượng Hạng 3 Hũ 249k"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a12]/90 via-transparent to-transparent opacity-60" />

                {/* Floating Top Ribbon */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#050807]/85 backdrop-blur-md border border-[#FFC52E]/50 text-[#FFC52E] text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hộp Quà Cứng Mỹ Thuật Kèm Nơ
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#050807]/90 backdrop-blur-md border border-[#00C995]/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#00C995] font-semibold uppercase tracking-wider block">
                      3 Hũ PET nắp nhôm riêng biệt
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">450g Dinh Dưỡng Tuyển Chọn</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#D1C5AE]/70 block">Giá niêm yết</span>
                    <span className="text-lg font-black text-[#FFC52E]">249.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Specification & 3 Jars Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00C995] bg-[#00C995]/15 px-3 py-1 rounded-full">
                  HEALTHY DAILY MINI
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3">
                  Bộ Quà Tặng 3 Hũ Sang Trọng
                </h3>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC52E]">
                    249.000 VNĐ
                  </span>
                  <span className="text-xs text-[#D1C5AE]/70">/ set (3 hũ x 150g)</span>
                </div>
              </div>

              {/* Set specs summary */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/20">
                  <span className="text-[11px] text-[#D1C5AE]/60 block">Quy cách</span>
                  <span className="text-sm font-bold text-white">3 Hũ PET</span>
                </div>
                <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/20">
                  <span className="text-[11px] text-[#D1C5AE]/60 block">Tổng khối lượng</span>
                  <span className="text-sm font-bold text-white">450g</span>
                </div>
                <div className="p-3 rounded-xl bg-[#03140e] border border-[#00C995]/20">
                  <span className="text-[11px] text-[#D1C5AE]/60 block">Tổng năng lượng</span>
                  <span className="text-sm font-bold text-[#FFC52E]">1.825–1.858 kcal</span>
                </div>
              </div>

              {/* 3 Jars Selector */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C995] block">
                  Khám phá thành phần từng hũ:
                </span>

                <div className="space-y-2.5">
                  {jars.map((jar, idx) => {
                    const isSelected = selectedJarIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedJarIndex(idx)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#00C995]/15 border-[#00C995] shadow-lg shadow-[#00C995]/10'
                            : 'bg-[#03140e] border-[#00C995]/15 hover:border-[#00C995]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#00C995]/20 text-[#00C995] font-mono text-xs font-bold">
                              {jar.number}
                            </span>
                            <h5 className="font-bold text-white text-sm">{jar.title}</h5>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-xs text-[#FFC52E] font-bold">{jar.weight}</span>
                            <span className="text-[11px] text-[#D1C5AE]/60 ml-2">({jar.calories})</span>
                          </div>
                        </div>

                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 pt-3 border-t border-[#00C995]/20 text-xs space-y-1.5"
                          >
                            <p className="text-[#D1C5AE]/80 italic text-[11px]">{jar.desc}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                              {jar.ingredientsList?.map((ing, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-[#D1C5AE]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C995]" />
                                  <span>{ing}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedProduct(giftProduct)}
                  className="flex-1 py-3.5 px-4 rounded-xl border border-[#00C995]/40 hover:bg-[#00C995]/15 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#00C995]" />
                  <span>XEM CHI TIẾT</span>
                </button>

                <button
                  onClick={() => addToCart(giftProduct, 1)}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-extrabold text-xs transition-all shadow-xl shadow-[#00C995]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>MUA SET QUÀ (249.000đ)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
