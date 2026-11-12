import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Sparkles, Flame, Weight, ArrowRight } from 'lucide-react';
import { formatPrice } from '../data/products';
import { useCart } from '../data/CartContext';

export default function ProductCard({ product, onOpenDetail }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl bg-gradient-to-b from-[#091b14] to-[#041610] border border-[#00C995]/20 hover:border-[#00C995]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00C995]/20 flex flex-col justify-between overflow-hidden"
    >
      {/* Glow overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00C995]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Top Media Container */}
      <div className="relative aspect-square overflow-hidden bg-[#03130d] p-3">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041610] via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            {product.tag && (
              <span className="px-2.5 py-1 rounded-full bg-[#050807]/85 backdrop-blur-md border border-[#00C995]/40 text-[#00C995] text-[11px] font-bold flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3 text-[#FFC52E]" />
                {product.tag}
              </span>
            )}
          </div>

          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="px-2.5 py-1 rounded-full bg-[#00C995] text-[#050807] text-xs font-black shadow-lg">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between relative z-10 space-y-4">
        <div>
          {/* Quick metric row */}
          <div className="flex items-center gap-2 text-xs mb-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#00C995]/15 text-[#00C995] font-semibold text-[11px]">
              <Weight className="w-3 h-3" />
              {product.weight}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFC52E]/15 text-[#FFC52E] font-semibold text-[11px]">
              <Flame className="w-3 h-3" />
              {product.calories}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#00C995] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#D1C5AE]/80 mt-1 line-clamp-2 leading-relaxed">
            {product.description || product.shortDescription}
          </p>

          {/* Ingredients Pills */}
          {product.ingredients && (
            <div className="flex flex-wrap gap-1 mt-3">
              {product.ingredients.slice(0, 3).map((ing, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-[#0d2a1f] text-[#D1C5AE]/90 border border-[#00C995]/15"
                >
                  {ing.name}: {ing.weight}
                </span>
              ))}
              {product.ingredients.length > 3 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#0d2a1f] text-[#D1C5AE]/60">
                  +{product.ingredients.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#00C995]/15 flex items-center gap-2">
          <button
            onClick={() => onOpenDetail(product)}
            className="flex-1 py-2.5 px-3 rounded-xl border border-[#00C995]/30 hover:border-[#00C995] hover:bg-[#00C995]/10 text-xs font-bold text-[#F4EBD8] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#00C995]" />
            <span>XEM CHI TIẾT</span>
          </button>

          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] text-xs font-extrabold transition-all shadow-md shadow-[#00C995]/20 flex items-center justify-center gap-1.5 group-hover:scale-102 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>THÊM GIỎ</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
