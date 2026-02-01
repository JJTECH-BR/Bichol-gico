import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#FAF8F5] via-white to-[#F5F0E8] py-24 sm:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#D4C5B0]/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#C9B89A]/20 to-transparent rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4E37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#D4C5B0]/30 rounded-full px-6 py-2 mb-8 shadow-lg animate-slide-up">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-[#5D4E37] tracking-wide">PRODUTOS PREMIUM PARA PETS</span>
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          
          {/* Main Heading */}
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2C2416] mb-6 leading-[1.1] text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Elegância e Conforto<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] via-[#A0826D] to-[#8B7355]">
              Para Seu Pet
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#5D4E37]/80 mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Uma seleção cuidadosa de <span className="font-semibold text-[#5D4E37]">acessórios</span>, <span className="font-semibold text-[#5D4E37]">roupas</span> e <span className="font-semibold text-[#5D4E37]">brinquedos</span> que unem estilo, qualidade e carinho
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#produtos" 
              className="group relative px-10 py-4 bg-gradient-to-r from-[#5D4E37] via-[#6B5B45] to-[#5D4E37] text-white rounded-full font-semibold text-lg shadow-2xl shadow-[#5D4E37]/30 hover:shadow-[#5D4E37]/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Produtos
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B5B45] via-[#7A6A55] to-[#6B5B45] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm border border-[#D4C5B0]/30 rounded-full shadow-lg">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 ring-2 ring-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 ring-2 ring-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 ring-2 ring-white"></div>
              </div>
              <div className="text-left">
                <div className="text-xs text-[#5D4E37]/60 font-medium">Mais de</div>
                <div className="text-sm font-bold text-[#5D4E37]">500+ Clientes Felizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#gradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#D4C5B0"/>
              <stop offset="50%" stopColor="#C9B89A"/>
              <stop offset="100%" stopColor="#D4C5B0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
