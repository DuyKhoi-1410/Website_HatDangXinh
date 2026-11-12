import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, ArrowUpRight, Scale, Sparkles, ChevronRight } from 'lucide-react';
import { useCart } from '../data/CartContext';

export default function Navbar({ onOpenComparison }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, setIsSearchOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Sản phẩm (30k)', href: '#products' },
    { label: 'Combo 3 Bữa', href: '#combo' },
    { label: 'Set Quà Tặng', href: '#giftset' },
    { label: 'Quy trình', href: '#process' },
    { label: 'Câu chuyện', href: '#story' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050807]/90 backdrop-blur-xl border-b border-[#00C995]/20 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#062A1F] to-[#0d3d2e] border border-[#00C995]/40 flex items-center justify-center text-[#00C995] group-hover:border-[#00C995] group-hover:scale-105 transition-all shadow-lg shadow-[#00C995]/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2C7 5 5 10 5 15a7 7 0 0 0 14 0c0-5-2-10-7-13Z" />
                <path d="M12 2v20" />
                <circle cx="12" cy="12" r="2.5" fill="#FFC52E" stroke="none" />
              </svg>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white block group-hover:text-[#00C995] transition-colors">
                HẠT DÁNG XINH
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#00C995] font-semibold block -mt-0.5">
                Premium Organic Snack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#062A1F]/70 border border-[#00C995]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-[#D1C5AE] hover:text-[#00C995] hover:bg-[#00C995]/10 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Compare Tool button */}
            <button
              onClick={onOpenComparison}
              title="So sánh calo & thành phần"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#062A1F]/80 border border-[#00C995]/20 hover:border-[#00C995] text-[#D1C5AE] hover:text-white text-xs font-medium transition-all cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5 text-[#00C995]" />
              <span>Đối chiếu</span>
            </button>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl bg-[#062A1F]/80 border border-[#00C995]/20 hover:border-[#00C995] text-[#D1C5AE] hover:text-white transition-all cursor-pointer"
              title="Tìm kiếm sản phẩm"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#062A1F]/80 border border-[#00C995]/20 hover:border-[#00C995] text-[#D1C5AE] hover:text-white transition-all cursor-pointer group"
              title="Xem giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4 group-hover:text-[#00C995] transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#00C995] text-[#050807] font-extrabold text-[11px] flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick Buy CTA */}
            <a
              href="#products"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-bold text-xs transition-all shadow-md shadow-[#00C995]/20 cursor-pointer"
            >
              <span>MUA NGAY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-[#062A1F]/80 border border-[#00C995]/20 text-[#D1C5AE] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-18 z-30 bg-[#050807]/95 border-b border-[#00C995]/20 backdrop-blur-2xl p-6 xl:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-[#F4EBD8] hover:text-[#00C995] py-2 border-b border-[#00C995]/10"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#00C995]" />
                </a>
              ))}

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenComparison();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#062A1F] border border-[#00C995]/30 text-[#00C995] text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Scale className="w-3.5 h-3.5" /> So sánh dinh dưỡng
                </button>
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[#00C995] text-[#050807] text-xs font-extrabold flex items-center justify-center gap-1.5"
                >
                  Mua ngay 30k
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
