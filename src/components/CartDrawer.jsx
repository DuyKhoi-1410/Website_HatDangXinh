import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { formatPrice } from '../data/products';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    setIsCheckoutOpen,
  } = useCart();

  const FREE_SHIPPING_THRESHOLD = 150000;
  const progressPercent = Math.min(100, (totalPrice / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - totalPrice);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-[#062A1F] border-l border-[#00C995]/25 shadow-2xl flex flex-col text-[#F4EBD8]"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#00C995]/15 flex items-center justify-between bg-[#041c14]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#00C995]/20 text-[#00C995]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Giỏ hàng</h3>
                    <p className="text-xs text-[#D1C5AE]/70">{totalItems} món snack dinh dưỡng</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-xl text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/20 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="px-5 py-3 bg-[#041610] border-b border-[#00C995]/10">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="flex items-center gap-1.5 text-[#00C995] font-medium">
                    <Truck className="w-3.5 h-3.5" />
                    {remainingForFreeShip === 0 ? (
                      <span className="text-[#00C995] font-bold">Đủ điều kiện Miễn phí vận chuyển! 🎉</span>
                    ) : (
                      <span>
                        Mua thêm <strong className="text-[#FFC52E]">{formatPrice(remainingForFreeShip)}</strong> để Freeship
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] text-[#D1C5AE]/60 font-mono">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#0a231b] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#00C995] to-[#FFC52E] rounded-full"
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                    <div className="w-20 h-20 rounded-3xl bg-[#0d3d2e] border border-[#00C995]/20 flex items-center justify-center text-[#00C995] mb-4">
                      <ShoppingBag className="w-10 h-10 opacity-60" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white mb-1">
                      Giỏ hàng của bạn đang trống
                    </h4>
                    <p className="text-xs text-[#D1C5AE]/70 max-w-xs mb-6">
                      Hãy chọn cho mình các gói snack thơm bùi, combo 3 bữa tiện lợi hoặc set quà sang trọng nhé!
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-bold text-sm transition-all shadow-lg shadow-[#00C995]/20 cursor-pointer"
                    >
                      Khám phá sản phẩm ngay
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id}
                      className="flex gap-3.5 p-3 rounded-2xl bg-[#041a12] border border-[#00C995]/15 hover:border-[#00C995]/30 transition-all"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-18 h-18 rounded-xl object-cover border border-[#00C995]/20 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-medium text-white text-sm truncate">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[#D1C5AE]/40 hover:text-red-400 transition-colors p-1"
                              title="Xóa món"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[11px] text-[#D1C5AE]/60 mt-0.5">
                            {item.weight} · {item.calories}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-[#00C995]/30 rounded-lg bg-[#03140e] px-1 py-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-[#D1C5AE] hover:text-white transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center font-bold text-xs text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-[#D1C5AE] hover:text-white transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-bold text-[#FFC52E]">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            {item.quantity > 1 && (
                              <p className="text-[10px] text-[#D1C5AE]/50">
                                {formatPrice(item.price)}/gói
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Checkout */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-[#00C995]/20 bg-[#041c14] space-y-3">
                  <div className="space-y-1.5 text-xs text-[#D1C5AE]/80">
                    <div className="flex justify-between">
                      <span>Tạm tính</span>
                      <span className="text-white font-medium">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">
                        Phí vận chuyển
                        {totalPrice >= FREE_SHIPPING_THRESHOLD && (
                          <span className="text-[10px] bg-[#00C995]/20 text-[#00C995] px-1.5 py-0.2 rounded font-semibold">
                            Freeship
                          </span>
                        )}
                      </span>
                      <span className="text-white font-medium">
                        {totalPrice >= FREE_SHIPPING_THRESHOLD ? '0đ' : '20.000đ (ước tính)'}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-[#00C995]/15 flex justify-between items-baseline">
                      <span className="text-sm font-bold text-white">Tổng cộng</span>
                      <span className="text-xl font-extrabold text-[#FFC52E]">
                        {formatPrice(totalPrice + (totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 20000))}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleProceedToCheckout}
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-extrabold text-sm transition-all shadow-xl shadow-[#00C995]/25 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Tiến hành đặt hàng</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-center text-[#D1C5AE]/60 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00C995]" />
                    Cam kết chính hãng · Đổi trả trong 7 ngày
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
