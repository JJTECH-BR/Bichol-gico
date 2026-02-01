import { useState } from 'react';
import { products, type Product } from '@/data/products';
import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import ProductGrid from '@/react-app/components/ProductGrid';
import CartButton from '@/react-app/components/CartButton';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleAddToSelection = (product: Product) => {
    setSelectedProducts(prev => [...prev, product]);
  };

  const handleRemoveFromSelection = (productId: number) => {
    setSelectedProducts(prev => {
      const index = prev.findIndex(p => p.id === productId);
      if (index > -1) {
        const newSelection = [...prev];
        newSelection.splice(index, 1);
        return newSelection;
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-white to-[#F5F0E8]">
      <Header selectedCount={selectedProducts.length} />
      <Hero />
      <ProductGrid 
        products={products}
        selectedProducts={selectedProducts}
        onAddToSelection={handleAddToSelection}
        onRemoveFromSelection={handleRemoveFromSelection}
      />
      <CartButton selectedProducts={selectedProducts} />
      <Footer />
    </div>
  );
}
