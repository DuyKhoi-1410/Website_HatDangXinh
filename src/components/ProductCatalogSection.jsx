import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Filter, Search, ArrowUpDown, Scale, Package } from 'lucide-react';
import { PRODUCTS, CATEGORIES, formatPrice } from '../data/products';
import ProductCard from './ProductCard';
import { useCart } from '../data/CartContext';

export default function ProductCatalogSection({ onOpenComparison }) {
  const { setSelectedProduct } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('snack');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      const matchCategory =
        selectedCategory === 'all' ? true : item.category === selectedCategory;

      // Search match
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients?.some((ing) => ing.name.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'calories') return (b.caloriesVal || 0) - (a.caloriesVal || 0);
      return 0;
    });
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#050807] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#00C995]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#FFC52E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062A1F] border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest">
            <Package className="w-3.5 h-3.5" />
            Bộ Sưu Tập Chính Hãng
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            KHÁM PHÁ BỘ SƯU TẬP SNACK DINH DƯỠNG.
          </h2>

          <p className="text-base sm:text-lg text-[#D1C5AE]/90 leading-relaxed max-w-2xl mx-auto">
            Tất cả 5 sản phẩm snack lẻ dinh dưỡng có giá đồng nhất{' '}
            <strong className="text-[#FFC52E] font-extrabold">30.000 VNĐ/gói</strong>, được phối trộn theo công thức riêng cho từng nhu cầu năng lượng.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenComparison}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#062A1F] border border-[#00C995]/30 hover:border-[#00C995] text-[#00C995] text-xs font-bold transition-all cursor-pointer shadow-md"
            >
              <Scale className="w-4 h-4 text-[#FFC52E]" />
              <span>Mở bảng đối chiếu 5 dòng snack (Calo & Thành phần)</span>
            </button>
          </div>
        </div>

        {/* Filter & Controls Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 rounded-2xl bg-[#062A1F]/70 border border-[#00C995]/20 backdrop-blur-md">
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#00C995] text-[#050807] shadow-lg shadow-[#00C995]/20'
                      : 'text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/10'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Search and Sort controls */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex-1 sm:w-60">
                <Search className="w-4 h-4 text-[#D1C5AE]/50 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Lọc nguyên liệu..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#041a12] border border-[#00C995]/20 text-xs text-white placeholder:text-[#D1C5AE]/40 focus:outline-none focus:border-[#00C995]"
                />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#041a12] border border-[#00C995]/20 text-xs text-[#D1C5AE] focus:outline-none focus:border-[#00C995] cursor-pointer"
                >
                  <option value="default">Sắp xếp mặc định</option>
                  <option value="price-asc">Giá: Thấp đến cao</option>
                  <option value="price-desc">Giá: Cao đến thấp</option>
                  <option value="calories">Nhiều calo nhất</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={setSelectedProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center text-[#D1C5AE]/70">
            <p>Không tìm thấy sản phẩm nào phù hợp.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-3 text-xs text-[#00C995] underline cursor-pointer"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
