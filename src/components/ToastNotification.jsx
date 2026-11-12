import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { formatPrice } from '../data/products';

export default function ToastNotification() {
  const { toastMessage, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#062A1F] border border-[#00C995]/40 text-[#F4EBD8] rounded-2xl shadow-2xl shadow-[#00C995]/15 p-4 backdrop-blur-xl flex items-center gap-3.5"
        >
          {toastMessage.product && (
            <img
              src={toastMessage.product.images[0]}
              alt={toastMessage.product.name}
              className="w-12 h-12 rounded-xl object-cover border border-[#00C995]/30 flex-shrink-0"
            />
          )}
          {!toastMessage.product && (
            <div className="w-10 h-10 rounded-xl bg-[#00C995]/20 flex items-center justify-center text-[#00C995] flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00C995] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Thành công
            </p>
            <p className="text-sm font-medium text-white truncate mt-0.5">
              {toastMessage.message}
            </p>
            {toastMessage.product && (
              <p className="text-xs text-[#FFC52E] font-medium">
                {formatPrice(toastMessage.product.price)}
              </p>
            )}
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-2.5 py-1.5 bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] text-xs font-bold rounded-lg transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3 h-3" />
            Xem giỏ
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
