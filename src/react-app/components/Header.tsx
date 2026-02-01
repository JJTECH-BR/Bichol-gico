import { ShoppingBag, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  selectedCount: number;
}

export default function Header({ selectedCount }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#D4C5B0]/20 shadow-xl shadow-black/5' 
          : 'bg-gradient-to-r from-white/90 via-[#FAF8F5]/90 to-white/90 backdrop-blur-md border-b border-[#D4C5B0]/10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5B0] to-[#C9B89A] rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <img 
                src="https://019c1685-75e5-780a-92a9-7dbe66fcae26.mochausercontent.com/logo.jpeg"
                alt="Bichológico Boutique"
                className="relative h-16 w-16 rounded-full object-cover ring-2 ring-[#D4C5B0]/40 shadow-lg group-hover:ring-[#D4C5B0] transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D4E37] via-[#8B7355] to-[#5D4E37]">
                Bichológico
              </h1>
              <p className="text-sm text-[#8B7355] font-medium tracking-wider">BOUTIQUE</p>
            </div>
          </div>
          
          <div className="relative group">
            {selectedCount > 0 && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center z-10 shadow-lg animate-pulse">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            )}
            <div className={`flex items-center gap-3 bg-gradient-to-r from-[#5D4E37] to-[#6B5B45] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${
              selectedCount > 0 ? 'ring-2 ring-amber-400/50 shadow-amber-500/20' : ''
            }`}>
              <ShoppingBag className="w-5 h-5" />
              <span className="font-bold text-lg">{selectedCount}</span>
              <span className="text-sm font-medium hidden sm:inline">
                {selectedCount === 1 ? 'item' : 'itens'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
