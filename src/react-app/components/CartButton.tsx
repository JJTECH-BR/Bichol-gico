import { Send, X, ShoppingBag, Package } from 'lucide-react';
import { useState } from 'react';
import { type Product } from '@/data/products';

interface CartButtonProps {
  selectedProducts: Product[];
}

export default function CartButton({ selectedProducts }: CartButtonProps) {
  const [showPreview, setShowPreview] = useState(false);

  if (selectedProducts.length === 0) return null;

  const handleSendToWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Número será configurado depois
    
    let message = '*Olá! Tenho interesse nos seguintes produtos:*\n\n';
    
    const productCounts = selectedProducts.reduce((acc, product) => {
      acc[product.id] = (acc[product.id] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
    
    const uniqueProducts = Array.from(new Set(selectedProducts.map(p => p.id)))
      .map(id => selectedProducts.find(p => p.id === id)!);
    
    uniqueProducts.forEach((product, index) => {
      const count = productCounts[product.id];
      message += `${index + 1}. *${product.name}*\n`;
      message += `   Quantidade: ${count}\n`;
      message += `   Preço unitário: R$ ${product.price.toFixed(2).replace('.', ',')}\n`;
      message += `   Subtotal: R$ ${(product.price * count).toFixed(2).replace('.', ',')}\n\n`;
    });
    
    const total = selectedProducts.reduce((sum, product) => sum + product.price, 0);
    message += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const total = selectedProducts.reduce((sum, product) => sum + product.price, 0);
  const uniqueCount = new Set(selectedProducts.map(p => p.id)).size;

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
        {/* Preview Button */}
        {selectedProducts.length > 0 && (
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="group bg-white/90 backdrop-blur-md hover:bg-white text-[#5D4E37] px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-semibold flex items-center gap-3 border border-[#D4C5B0]/30 hover:border-[#D4C5B0]"
          >
            <Package className="w-5 h-5" />
            <span>{showPreview ? 'Ocultar' : 'Ver'} Pedido</span>
            {!showPreview && (
              <div className="bg-gradient-to-br from-[#5D4E37] to-[#6B5B45] text-white min-w-[1.75rem] h-7 px-2 rounded-full flex items-center justify-center text-sm font-bold">
                {uniqueCount}
              </div>
            )}
          </button>
        )}
        
        {/* WhatsApp Button */}
        <button
          onClick={handleSendToWhatsApp}
          className="group relative bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative flex items-center gap-4">
            <div className="flex flex-col items-start">
              <span className="text-sm opacity-90 font-medium">
                {selectedProducts.length} {selectedProducts.length === 1 ? 'item' : 'itens'}
              </span>
              <span className="font-bold text-2xl">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            
            <div className="w-px h-14 bg-white/30"></div>
            
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                <Send className="relative w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <span className="font-bold text-sm mt-1">Enviar</span>
            </div>
          </div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
          </div>
        </button>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowPreview(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col animate-slide-up overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header - Fixed */}
            <div className="bg-gradient-to-r from-[#5D4E37] via-[#6B5B45] to-[#5D4E37] pt-24 pb-6 px-6 flex-shrink-0">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">Seu Pedido</h3>
                    <p className="text-white/90 font-medium text-sm leading-tight">{uniqueCount} {uniqueCount === 1 ? 'produto' : 'produtos'} selecionado{uniqueCount === 1 ? '' : 's'}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPreview(false)} 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            {/* Products List - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-white to-[#FAF8F5]">
              <div className="space-y-3">
                {Object.entries(
                  selectedProducts.reduce((acc, product) => {
                    if (!acc[product.id]) {
                      acc[product.id] = { product, count: 0 };
                    }
                    acc[product.id].count++;
                    return acc;
                  }, {} as Record<number, { product: Product; count: number }>)
                ).map(([id, { product, count }]) => (
                  <div key={id} className="group bg-white rounded-2xl p-4 border border-[#D4C5B0]/20 hover:border-[#D4C5B0]/50 hover:shadow-lg transition-all">
                    <div className="flex gap-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-20 h-20 rounded-xl object-cover ring-2 ring-[#D4C5B0]/20 group-hover:ring-[#D4C5B0]/40 transition-all" 
                        />
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-[#5D4E37] to-[#6B5B45] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                          {count}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-base text-[#2C2416] mb-1 break-words">{product.name}</h4>
                        <p className="text-sm text-[#5D4E37]/70 mb-2">Quantidade: {count} {count === 1 ? 'unidade' : 'unidades'}</p>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-xs text-[#5D4E37]/60 whitespace-nowrap">R$ {product.price.toFixed(2).replace('.', ',')} cada</span>
                          <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D4E37] to-[#8B7355] whitespace-nowrap">
                            R$ {(product.price * count).toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Total - Fixed */}
            <div className="bg-gradient-to-r from-[#FAF8F5] to-[#F5F0E8] border-t-2 border-[#D4C5B0]/30 p-6 flex-shrink-0 rounded-b-3xl">
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs text-[#5D4E37]/60 font-medium mb-1">Total do Pedido</div>
                  <div className="text-3xl font-bold text-[#5D4E37]">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-[#5D4E37]/60 font-medium">{selectedProducts.length} {selectedProducts.length === 1 ? 'item' : 'itens'}</div>
                  <div className="text-xs text-[#5D4E37]/60 font-medium">{uniqueCount} {uniqueCount === 1 ? 'produto' : 'produtos'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
