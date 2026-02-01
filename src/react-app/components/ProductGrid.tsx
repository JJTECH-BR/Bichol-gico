import { type Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  selectedProducts: Product[];
  onAddToSelection: (product: Product) => void;
  onRemoveFromSelection: (productId: number) => void;
}

export default function ProductGrid({ 
  products, 
  selectedProducts, 
  onAddToSelection, 
  onRemoveFromSelection 
}: ProductGridProps) {
  const categories = [
    { 
      id: 'acessorios', 
      name: 'Acessórios', 
      icon: '🎀',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    { 
      id: 'roupinhas', 
      name: 'Roupinhas', 
      icon: '👕',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    { 
      id: 'brinquedos', 
      name: 'Brinquedos', 
      icon: '🧸',
      gradient: 'from-amber-500/10 to-orange-500/10'
    }
  ];

  return (
    <section id="produtos" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      {categories.map((category, categoryIndex) => {
        const categoryProducts = products.filter(p => p.category === category.id);
        
        return (
          <div 
            key={category.id} 
            className="mb-24 last:mb-0 animate-slide-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            {/* Category Header */}
            <div className="relative mb-12">
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl blur-3xl opacity-30`}></div>
              <div className="relative bg-white/60 backdrop-blur-sm border border-[#D4C5B0]/30 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4C5B0] to-[#C9B89A] rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-4xl font-bold text-[#2C2416] mb-1">
                      {category.name}
                    </h3>
                    <p className="text-[#5D4E37]/60 font-medium">
                      {categoryProducts.length} produtos disponíveis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categoryProducts.map((product, index) => {
                const selectedCount = selectedProducts.filter(p => p.id === product.id).length;
                
                return (
                  <div 
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard
                      product={product}
                      selectedCount={selectedCount}
                      onAdd={() => onAddToSelection(product)}
                      onRemove={() => onRemoveFromSelection(product.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
