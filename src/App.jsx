import React, { useState } from 'react';
import { CartProvider } from './data/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandIntroSection from './components/BrandIntroSection';
import ProductCatalogSection from './components/ProductCatalogSection';
import ComboSection from './components/ComboSection';
import GiftSetSection from './components/GiftSetSection';
import ProcessSection from './components/ProcessSection';
import BrandValuesSection from './components/BrandValuesSection';
import BrandStorySection from './components/BrandStorySection';
import FaqSection from './components/FaqSection';
import FooterCtaSection from './components/FooterCtaSection';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import CheckoutModal from './components/CheckoutModal';
import SearchModal from './components/SearchModal';
import ToastNotification from './components/ToastNotification';
import NutritionComparisonModal from './components/NutritionComparisonModal';

function AppContent() {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050807] text-[#F4EBD8] font-sans antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenComparison={() => setIsComparisonOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Brand Introduction & Ingredient Spotlight */}
        <BrandIntroSection />

        {/* 3. Retail Products Catalog (30.000 VNĐ / pack) */}
        <ProductCatalogSection onOpenComparison={() => setIsComparisonOpen(true)} />

        {/* 4. Daily 3-Meal Snack Combo (80.000 VNĐ) */}
        <ComboSection />

        {/* 5. Luxury Gift Set (249.000 VNĐ) */}
        <GiftSetSection />

        {/* 6. Product Process (4 Steps Storytelling) */}
        <ProcessSection />

        {/* 7. Brand Values (4 Pillars) */}
        <BrandValuesSection />

        {/* 8. Brand Story Editorial */}
        <BrandStorySection />

        {/* 9. FAQs Accordion */}
        <FaqSection />
      </main>

      {/* Footer & Final Call to Action */}
      <FooterCtaSection />

      {/* Modals & Slide-outs */}
      <CartDrawer />
      <ProductDetailModal />
      <CheckoutModal />
      <SearchModal />
      <NutritionComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />
      <ToastNotification />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
