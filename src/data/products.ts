export interface Product {
  id: number;
  name: string;
  category: 'acessorios' | 'roupinhas' | 'brinquedos';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Acessórios
  {
    id: 1,
    name: 'Coleira Premium',
    category: 'acessorios',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500',
    description: 'Coleira ajustável em couro sintético de alta qualidade'
  },
  {
    id: 2,
    name: 'Guia Retrátil',
    category: 'acessorios',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=500',
    description: 'Guia retrátil com 5 metros, ideal para passeios'
  },
  {
    id: 3,
    name: 'Comedouro Elegante',
    category: 'acessorios',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1591768575450-c05d96aaff0e?w=500',
    description: 'Comedouro duplo em cerâmica com suporte elevado'
  },
  {
    id: 4,
    name: 'Cama Confort Plus',
    category: 'acessorios',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=500',
    description: 'Cama acolchoada com tecido impermeável e lavável'
  },
  
  // Roupinhas
  {
    id: 5,
    name: 'Moletom Fashion',
    category: 'roupinhas',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1612536980005-c9dbe47ddf39?w=500',
    description: 'Moletom confortável para dias frios, disponível em vários tamanhos'
  },
  {
    id: 6,
    name: 'Capa de Chuva',
    category: 'roupinhas',
    price: 54.90,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500',
    description: 'Capa impermeável com capuz, perfeita para dias chuvosos'
  },
  {
    id: 7,
    name: 'Vestido Floral',
    category: 'roupinhas',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500',
    description: 'Vestido delicado com estampa floral para ocasiões especiais'
  },
  {
    id: 8,
    name: 'Bandana Estilosa',
    category: 'roupinhas',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500',
    description: 'Bandana reversível em tecido macio'
  },
  
  // Brinquedos
  {
    id: 9,
    name: 'Bola Interativa',
    category: 'brinquedos',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=500',
    description: 'Bola com som e textura para estimular o pet'
  },
  {
    id: 10,
    name: 'Mordedor Dental',
    category: 'brinquedos',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500',
    description: 'Mordedor que ajuda na limpeza dos dentes'
  },
  {
    id: 11,
    name: 'Corda Resistente',
    category: 'brinquedos',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1591856419595-290a67e41e0f?w=500',
    description: 'Corda trançada super resistente para brincadeiras'
  },
  {
    id: 12,
    name: 'Pelúcia Sonora',
    category: 'brinquedos',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500',
    description: 'Pelúcia macia com apito interno'
  }
];
