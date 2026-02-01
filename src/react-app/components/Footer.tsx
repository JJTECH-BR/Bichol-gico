import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2C2416] via-[#3D3222] to-[#2C2416] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4C5B0]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#C9B89A]/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5B0] to-[#C9B89A] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <img 
                  src="https://019c1685-75e5-780a-92a9-7dbe66fcae26.mochausercontent.com/logo.jpeg"
                  alt="Bichológico Boutique"
                  className="relative h-24 w-24 rounded-full object-cover ring-4 ring-[#D4C5B0]/30 shadow-2xl"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4C5B0]">
                  Bichológico
                </h3>
                <p className="text-[#D4C5B0] font-semibold text-lg tracking-wider">BOUTIQUE</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-lg font-light">
              Dedicados a proporcionar o melhor em <span className="text-[#D4C5B0] font-semibold">estilo</span>, <span className="text-[#D4C5B0] font-semibold">conforto</span> e <span className="text-[#D4C5B0] font-semibold">diversão</span> para seu pet. 
              Uma seleção cuidadosa de produtos premium para o bem-estar do seu melhor amigo.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-2xl font-bold mb-8 text-[#D4C5B0] flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#D4C5B0] to-transparent"></div>
              Contato
            </h4>
            <div className="space-y-4">
              <a href="tel:+5511999999999" className="flex items-center gap-4 text-gray-300 hover:text-[#D4C5B0] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#D4C5B0]/20 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@bichologico.com" className="flex items-center gap-4 text-gray-300 hover:text-[#D4C5B0] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#D4C5B0]/20 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">contato@bichologico.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-display text-2xl font-bold mb-8 text-[#D4C5B0] flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#D4C5B0] to-transparent"></div>
              Social
            </h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-[#D4C5B0] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#D4C5B0]/20 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Instagram</div>
                  <div className="text-sm text-gray-400">@bichologico</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-[#D4C5B0] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#D4C5B0]/20 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Facebook</div>
                  <div className="text-sm text-gray-400">Bichológico</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-medium flex items-center gap-2">
              © {new Date().getFullYear()} Bichológico Boutique. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 font-medium flex items-center gap-2">
              Desenvolvido com <Heart className="w-4 h-4 text-[#D4C5B0] fill-[#D4C5B0] animate-pulse" /> para pets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
