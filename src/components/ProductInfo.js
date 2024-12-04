// src/components/ProductInfo.js
'use client'

import { useEffect, useState } from 'react'
import { startCountdown } from '@/lib/utils'

export default function ProductInfo({ product }) {
  const [showIframe, setShowIframe] = useState(false)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [selectedVariants, setSelectedVariants] = useState({
    version: product.variants.version.show ? product.variants.version.options[0] : null,
    capacity: product.variants.capacity.show ? product.variants.capacity.options[0] : null
  })

  useEffect(() => {
    startCountdown()
  }, [])

  useEffect(() => {
    if (showIframe) {
      document.body.style.overflow = 'hidden'
      setIsIframeLoading(true)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showIframe])

  const handleIframeLoad = () => {
    setIsIframeLoading(false)
  }

  const handleVariantSelect = (variantType, value) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantType]: value
    }))
  }

  const renderVariantSection = (variantType, variantConfig) => {
    if (!variantConfig.show) return null

    return (
      <div className="variants-group">
        <div className="variants-title">{variantConfig.title}</div>
        <div className="variants-options">
          {variantConfig.options.map((option, index) => (
            <div 
              key={index} 
              className={`variant-option ${option === selectedVariants[variantType] ? 'selected' : ''}`}
              onClick={() => handleVariantSelect(variantType, option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="product-section">
        <div className="sold-count">{product.soldCount} VENDIDOS</div>
        <div className="flash-tag">
          <div className="flash-icon">
            <i className="fa-solid fa-bolt"></i>
          </div>
          <div className="flash-text">Oferta Relâmpago</div>
        </div>
        <div className="price-container">
          <div className="price-info">à vista</div>
          <div className="price-row">
            <span className="old-price">R${product.oldPrice.toFixed(2)}</span>
            <span className="current-price">R${product.price.toFixed(2)}</span>
          </div>
        </div>
        <div className="countdown">
          <span className="countdown-text">TERMINA EM:</span>
          <span className="countdown-number countdown-hours">00</span>
          <span className="countdown-number countdown-minutes">00</span>
          <span className="countdown-number countdown-seconds">00</span>
        </div>
      </div>

      <div className="product-title-section">
        <span className="black-friday-tag">BLACK FRIDAY</span>
        <h1 className="product-name">{product.name}</h1>
      </div>

      <div className="product-rating">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
        <span className="rating-number">{product.rating.toFixed(1)}</span>
        <span className="rating-separator">-</span>
        <span className="rating-count">{product.soldCount} vendidos</span>
      </div>

      <div className="separator"></div>
      
      <div className="installment-section">
        <div className="installment-price">
          <span className="installment-text">apenas <strong>3x</strong> de</span>
          <div className="price-options">
            <span className="installment-old-price">R${product.installmentOldPrice.toFixed(2)}</span>
            <span className="installment-current-price">R${product.installmentPrice.toFixed(2)}</span>
          </div>
          <span className="cash-price">ou <strong>R${product.pixPrice.toFixed(2)}</strong> à vista</span>
        </div>
      </div>

      {(product.variants.version.show || product.variants.capacity.show) && (
        <div className="variants-section">
          {renderVariantSection('version', product.variants.version)}
          {renderVariantSection('capacity', product.variants.capacity)}
        </div>
      )}

      <div className="benefits-section">
        <div className="benefit-box">
          <i className="fa-solid fa-truck benefit-icon"></i>
          <div className="benefit-content">
            <span className="benefit-title">Frete grátis</span>
            <span className="benefit-subtitle">Realizado por correios</span>
          </div>
        </div>
        <div className="benefit-box">
          <div className="benefit-content">
            <span className="benefit-title">R$ {product.pixPrice.toFixed(2)} no Pix</span>
            <span className="benefit-subtitle">+ Envio prioritário</span>
          </div>
        </div>
      </div>

      <button 
        className="buy-button"
        onClick={() => setShowIframe(true)}
      >
        COMPRAR AGORA
      </button>

      <div className="urgency-section">
        <div className="urgency-text">CORRA, A OFERTA EXPIRA EM BREVE!</div>
        <div className="countdown-urgent">01:00:00</div>
      </div>

      <div className="seals-section">
        <div className="seal-box">
          <i className="fa-solid fa-circle-check seal-icon"></i>
          <div className="seal-content">
            <span className="seal-text">Compra</span>
            <span className="seal-bold">Segura</span>
          </div>
        </div>
        
        <div className="seal-box">
          <i className="fa-solid fa-medal seal-icon"></i>
          <div className="seal-content">
            <span className="seal-text">Satisfação</span>
            <span className="seal-bold">Garantida</span>
          </div>
        </div>
        
        <div className="seal-box">
          <i className="fa-solid fa-lock seal-icon"></i>
          <div className="seal-content">
            <span className="seal-text">Privacidade</span>
            <span className="seal-bold">Garantida</span>
          </div>
        </div>
      </div>

      <div className="separator"></div>
      
      <div className="description-section">
        <div className="description-title">Descrição</div>
        <p className="description-text">{product.description.text}</p>
        {product.description.image && (
          <img 
            src={product.description.image} 
            alt="Descrição do Produto" 
            className="description-image" 
          />
        )}
      </div>

      {showIframe && (
        <div className="iframe-overlay">
          <button 
            className="iframe-close" 
            onClick={() => setShowIframe(false)}
            aria-label="Fechar"
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {isIframeLoading && (
            <div className="iframe-loading">
              <div className="loading-spinner"></div>
              <span>Carregando...</span>
            </div>
          )}
          
          <iframe
            src={product.checkoutUrl || "https://exemplo.com/checkout"}
            title="Checkout"
            className="checkout-iframe"
            onLoad={handleIframeLoad}
            style={{ opacity: isIframeLoading ? 0 : 1 }}
          />
        </div>
      )}

      <style jsx>{`
        .iframe-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: white;
          z-index: 9999;
          display: flex;
          flex-direction: column;
        }

        .iframe-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border: none;
          background: #EE4D2D;
          color: white;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(238,77,45,0.2);
          z-index: 10000;
          transition: all 0.2s ease;
        }

        .iframe-close:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(238,77,45,0.3);
        }

        .iframe-close:active {
          transform: scale(0.95);
        }

        .checkout-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: white;
          transition: opacity 0.3s ease;
        }

        .iframe-loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #EE4D2D;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .iframe-loading span {
          color: #666;
          font-size: 14px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}