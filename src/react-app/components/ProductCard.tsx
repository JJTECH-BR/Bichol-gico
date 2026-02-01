import { Plus, Minus, Heart } from 'lucide-react';
import { useState } from 'react';
import { type Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  selectedCount: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function ProductCard({ product, selectedCount, onAdd, onRemove }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D4C5B0]/20 hover:border-[#D4C5B0]/50 hover:-translate-y-2 relative">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 left-4 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-10"
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-300 ${
              liked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600'
            }`} 
          />
        </button>
        
        {/* Selected Count Badge */}
        {selectedCount > 0 && (
          <div className="absolute top-4 right-4 bg-gradient-to-br from-[#5D4E37] to-[#6B5B45] text-white min-w-[2.75rem] h-11 px-3 rounded-full flex items-center justify-center font-bold text-lg shadow-xl ring-4 ring-white/50 animate-bounce z-10">
            {selectedCount}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h4 className="font-display font-bold text-xl text-[#2C2416] mb-2 group-hover:text-[#5D4E37] transition-colors">
          {product.name}
        </h4>
        <p className="text-sm text-[#5D4E37]/70 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-[#D4C5B0]/20">
          <div>
            <div className="text-xs text-[#5D4E37]/50 font-medium mb-1">Preço</div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D4E37] to-[#8B7355]">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {selectedCount > 0 && (
              <button
                onClick={onRemove}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 flex items-center justify-center transition-all transform hover:scale-110 shadow-md border border-red-200/50 hover:border-red-300"
                aria-label="Remover um"
                title="Remover item"
              >
                <Minus className="w-5 h-5 text-red-600" />
              </button>
            )}
            <button
              onClick={onAdd}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5D4E37] to-[#6B5B45] hover:from-[#6B5B45] hover:to-[#7A6A55] flex items-center justify-center transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl group/btn"
              aria-label="Adicionar"
              title="Adicionar item"
            >
              <Plus className="w-6 h-6 text-white group-hover/btn:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
      </div>
    </div>
  );
}
