import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, Plus } from 'lucide-react';
import { useCart } from '../data/CartContext';
import { PRODUCTS, formatPrice } from '../data/products';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart, setSelectedProduct } = useCart();
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return PRODUCTS;
    const lower = query.toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(lower);
      const matchDesc = p.description.toLowerCase().includes(lower);
      const matchIngr = p.ingredients?.some((ing) => ing.name.toLowerCase().includes(lower));
      const matchTaste = p.tasteProfile?.toLowerCase().includes(lower);
      return matchName || matchDesc || matchIngr || matchTaste;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-[#062A1F] border border-[#00C995]/30 rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-[#00C995]/15 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#00C995] flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm hạt sen, điều, yến mạch, combo, set quà..."
              className="w-full bg-transparent text-white text-base sm:text-lg placeholder:text-[#D1C5AE]/40 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 hover:bg-[#00C995]/20 rounded-full text-[#D1C5AE] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-lg border border-[#00C995]/30 text-[#D1C5AE] hover:text-white hover:border-[#00C995]"
            >
              ESC
            </button>
          </div>

          {/* Quick tags */}
          <div className="px-6 py-2.5 bg-[#050807]/50 border-b border-[#00C995]/10 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-[#D1C5AE]/60 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FFC52E]" /> Gợi ý:
            </span>
            {['Hạt điều', 'Hạt sen', 'Granola', 'Combo 3 bữa', 'Set quà', 'Ít calo'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-[#0d3d2e] hover:bg-[#00C995]/30 text-[#F4EBD8] text-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#00C995] mb-2">
              Kết quả tìm kiếm ({filteredProducts.length})
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-[#D1C5AE]/60">
                <p>Không tìm thấy sản phẩm nào khớp với "{query}"</p>
                <p className="text-xs text-[#D1C5AE]/40 mt-1">Hãy thử tìm theo tên nguyên liệu như "hạt điều", "yến mạch"...</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex items-center gap-4 p-3 rounded-2xl bg-[#091e16] hover:bg-[#0f2d22] border border-[#00C995]/10 hover:border-[#00C995]/40 transition-all cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsSearchOpen(false);
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover border border-[#00C995]/20 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#00C995]/15 text-[#00C995] font-medium">
                        {product.categoryName}
                      </span>
                      <span className="text-xs text-[#D1C5AE]/60">
                        {product.weight}
                      </span>
                    </div>
                    <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-[#00C995] transition-colors truncate mt-0.5">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#D1C5AE]/70 line-clamp-1">
                      {product.calories} · {product.ingredients?.map((i) => i.name).join(', ')}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 flex items-center gap-3">
                    <span className="text-[#FFC52E] font-bold text-sm sm:text-base">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      title="Thêm vào giỏ"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="p-2 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] transition-all transform hover:scale-105 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
