'use client'

import { useState } from 'react'

export default function RecommendedProducts({ products = [] }) {
  const [showIframe, setShowIframe] = useState(false)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [currentUrl, setCurrentUrl] = useState('')

  const handleProductClick = (url, e) => {
    e.preventDefault()
    setCurrentUrl(url)
    setShowIframe(true)
    setIsIframeLoading(true)
  }

  const handleIframeLoad = () => {
    setIsIframeLoading(false)
  }

  return (
    <>
      <div className="recommended-section">
        <div className="recommended-title">Recomendado para você</div>
        {products.map(product => (
          <a 
            href={product.url} 
            key={product.id}
            onClick={(e) => handleProductClick(product.url, e)}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="recommended-product">
              <img 
                src={product.image} 
                alt={product.name} 
                className="recommended-image" 
              />
              <div className="recommended-info">
                <div className="recommended-name">{product.name}</div>
                <span className="recommended-discount">{product.discount}% OFF</span>
                <div>
                  <span className="recommended-old-price">
                    R${product.oldPrice.toFixed(2)}
                  </span>
                  {' '}
                  <span className="recommended-price">
                    R${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Iframe overlay */}
      {showIframe && (
        <div className="iframe-overlay">
          <button 
            className="iframe-close" 
            onClick={() => {
              setShowIframe(false)
              setCurrentUrl('')
            }}
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
            src={currentUrl}
            title="Product Page"
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