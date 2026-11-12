import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Sparkles, Check, Flame, Weight, Clock, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { formatPrice } from '../data/products';

export default function ProductDetailModal() {
  const { selectedProduct, setSelectedProduct, addToCart, setIsCheckoutOpen } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#062A1F] border border-[#00C995]/30 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-[#F4EBD8]"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#050807]/70 border border-[#00C995]/20 text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/20 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
            {/* Left: Product Images */}
            <div className="p-6 sm:p-8 bg-[#041c14] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#00C995]/15">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#00C995]/20 group">
                <img
                  src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {selectedProduct.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#050807]/80 backdrop-blur-md border border-[#00C995]/40 text-[#00C995] text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC52E]" />
                    {selectedProduct.tag}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProduct.images && selectedProduct.images.length > 1 && (
                <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#00C995] scale-105 shadow-md shadow-[#00C995]/30'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-[#00C995]/15 grid grid-cols-2 gap-3 text-xs text-[#D1C5AE]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00C995] flex-shrink-0" />
                  <span>100% Nguyên liệu tuyển chọn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#FFC52E] flex-shrink-0" />
                  <span>Không chất bảo quản nhân tạo</span>
                </div>
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#00C995]/20 text-[#00C995] border border-[#00C995]/30">
                    {selectedProduct.categoryName}
                  </span>
                  <span className="text-xs text-[#D1C5AE]/60 font-mono">
                    ID: {selectedProduct.slug}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {selectedProduct.name}
                </h2>

                {/* Price & Specs */}
                <div className="mt-3 flex items-baseline gap-4">
                  <span className="text-3xl font-extrabold text-[#FFC52E]">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  <span className="text-xs text-[#D1C5AE]/70 px-2 py-0.5 rounded bg-[#0d3d2e] border border-[#00C995]/20">
                    Giá niêm yết chính hãng
                  </span>
                </div>

                {/* Metric Quick Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-5">
                  <div className="p-2.5 rounded-xl bg-[#041a12] border border-[#00C995]/15">
                    <div className="text-[11px] text-[#D1C5AE]/60 flex items-center gap-1">
                      <Weight className="w-3.5 h-3.5 text-[#00C995]" /> Khối lượng
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {selectedProduct.weight}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#041a12] border border-[#00C995]/15">
                    <div className="text-[11px] text-[#D1C5AE]/60 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#FFC52E]" /> Năng lượng
                    </div>
                    <div className="text-sm font-bold text-[#FFC52E] mt-0.5">
                      {selectedProduct.calories}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#041a12] border border-[#00C995]/15 col-span-2 sm:col-span-1">
                    <div className="text-[11px] text-[#D1C5AE]/60 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#00C995]" /> Thời điểm
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5 truncate">
                      {selectedProduct.idealTiming || 'Mọi lúc'}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#D1C5AE]/90 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Ingredients Breakdown */}
                {selectedProduct.ingredients && (
                  <div className="mt-5 pt-4 border-t border-[#00C995]/15">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#00C995] mb-2.5">
                      Thành phần định lượng chuẩn
                    </h4>
                    <div className="space-y-2">
                      {selectedProduct.ingredients.map((item, i) => (
                        <div key={i} className="text-xs">
                          <div className="flex justify-between text-[#D1C5AE] mb-1">
                            <span className="font-medium text-white">{item.name}</span>
                            <span className="font-mono text-[#FFC52E]">{item.weight}</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#03140e] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#00C995] to-[#FFC52E] rounded-full"
                              style={{ width: `${item.percentage || 30}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Jars Breakdown for Gift Set */}
                {selectedProduct.jars && (
                  <div className="mt-4 pt-3 border-t border-[#00C995]/15 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#00C995]">
                      Quy cách 3 hũ cao cấp (450g)
                    </h4>
                    {selectedProduct.jars.map((jar, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#041a12] border border-[#00C995]/15 text-xs">
                        <div className="flex justify-between font-bold text-white">
                          <span>{jar.number}: {jar.title}</span>
                          <span className="text-[#FFC52E]">{jar.weight} · {jar.calories}</span>
                        </div>
                        <p className="text-[#D1C5AE]/70 text-[11px] mt-1">{jar.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Combo Timeline for Combo */}
                {selectedProduct.comboTimeline && (
                  <div className="mt-4 pt-3 border-t border-[#00C995]/15 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#00C995]">
                      3 Khẩu phần theo nhịp sinh học
                    </h4>
                    {selectedProduct.comboTimeline.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#041a12] border border-[#00C995]/15 text-xs flex justify-between items-center">
                        <div>
                          <span className="font-bold text-white">{item.step} ({item.time})</span>
                          <p className="text-[#D1C5AE]/70 text-[11px]">{item.productName}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[#FFC52E]">{item.weight}</span>
                          <p className="text-[10px] text-[#D1C5AE]/60">{item.calories}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity & CTA Buttons */}
              <div className="mt-6 pt-4 border-t border-[#00C995]/15 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#00C995]/30 rounded-xl bg-[#041a12] p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/20 rounded-lg transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-white text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/20 rounded-lg transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-4 rounded-xl border border-[#00C995] text-[#00C995] hover:bg-[#00C995]/10 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Thêm vào giỏ
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-bold text-sm transition-all shadow-lg shadow-[#00C995]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
