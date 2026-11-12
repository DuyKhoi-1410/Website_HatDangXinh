import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Weight, Check, Plus, Sparkles } from 'lucide-react';
import { PRODUCTS, formatPrice } from '../data/products';
import { useCart } from '../data/CartContext';

export default function NutritionComparisonModal({ isOpen, onClose }) {
  const { addToCart, setSelectedProduct } = useCart();
  const snacks = PRODUCTS.filter((p) => p.category === 'snack');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#062A1F] border border-[#00C995]/30 rounded-3xl shadow-2xl overflow-hidden z-10 text-[#F4EBD8] max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#00C995]/15 flex items-center justify-between bg-[#041c14] flex-shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00C995] bg-[#00C995]/15 px-2.5 py-0.5 rounded-full">
                  Bảng Đối Chiếu Dinh Dưỡng
                </span>
                <span className="text-xs text-[#FFC52E] font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Đồng giá 30.000đ/gói
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                So Sánh 5 Dòng Snack Hạt Dáng Xinh
              </h3>
              <p className="text-xs text-[#D1C5AE]/70 mt-0.5">
                Xem nhanh khối lượng, năng lượng ước tính và tỷ lệ thành phần để chọn gói snack phù hợp nhất với khẩu vị của bạn.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Table Container */}
          <div className="p-4 sm:p-6 overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#00C995]/20">
                  <th className="p-3 text-xs font-bold text-[#D1C5AE]/70 uppercase tracking-wider w-40">
                    Chỉ số / Tiêu chí
                  </th>
                  {snacks.map((snack) => (
                    <th key={snack.id} className="p-3 text-center align-top w-48">
                      <div className="flex flex-col items-center">
                        <img
                          src={snack.images[0]}
                          alt={snack.name}
                          className="w-16 h-16 rounded-xl object-cover border border-[#00C995]/25 mb-2 cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => {
                            setSelectedProduct(snack);
                            onClose();
                          }}
                        />
                        <span className="font-display font-bold text-sm text-white line-clamp-1">
                          {snack.name}
                        </span>
                        <span className="text-[#FFC52E] font-bold text-xs mt-0.5">
                          {formatPrice(snack.price)}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00C995]/10 text-xs">
                {/* Weight row */}
                <tr>
                  <td className="p-3 font-semibold text-white flex items-center gap-1.5">
                    <Weight className="w-4 h-4 text-[#00C995]" /> Khối lượng
                  </td>
                  {snacks.map((s) => (
                    <td key={s.id} className="p-3 text-center font-bold text-white">
                      {s.weight}
                    </td>
                  ))}
                </tr>

                {/* Calories row */}
                <tr>
                  <td className="p-3 font-semibold text-white flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FFC52E]" /> Calo ước tính
                  </td>
                  {snacks.map((s) => (
                    <td key={s.id} className="p-3 text-center font-bold text-[#FFC52E] bg-[#03140e]/40">
                      {s.calories}
                    </td>
                  ))}
                </tr>

                {/* Taste profile */}
                <tr>
                  <td className="p-3 font-semibold text-white">Hương vị nổi bật</td>
                  {snacks.map((s) => (
                    <td key={s.id} className="p-3 text-center text-[#D1C5AE]/80 text-[11px] leading-snug">
                      {s.tasteProfile}
                    </td>
                  ))}
                </tr>

                {/* Key ingredients breakdown */}
                <tr>
                  <td className="p-3 font-semibold text-white align-top">Thành phần chi tiết</td>
                  {snacks.map((s) => (
                    <td key={s.id} className="p-3 align-top">
                      <div className="space-y-1 text-[11px]">
                        {s.ingredients.map((ing, i) => (
                          <div key={i} className="flex justify-between text-[#D1C5AE]/90">
                            <span>{ing.name}</span>
                            <span className="text-[#00C995] font-mono">{ing.weight}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Ideal Timing */}
                <tr>
                  <td className="p-3 font-semibold text-white">Thời điểm thích hợp</td>
                  {snacks.map((s) => (
                    <td key={s.id} className="p-3 text-center text-[11px] text-[#D1C5AE]/70">
                      {s.idealTiming}
                    </td>
                  ))}
                </tr>

                {/* Actions row */}
                <tr>
                  <td className="p-3 font-semibold text-white">Đặt mua</td>
                  {snacks.map((s) => (
                    <td key={s.id} className="p-3 text-center">
                      <button
                        onClick={() => addToCart(s, 1)}
                        className="w-full py-2 px-2 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" /> Thêm giỏ
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
