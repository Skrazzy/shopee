// src/components/ProductCarousel.js
'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import 'flickity/css/flickity.css'

const ProductCarousel = ({ images }) => {
  const carouselRef = useRef(null)
  const flickityRef = useRef(null)
  const thumbnailsRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const initFlickity = async () => {
      try {
        const Flickity = (await import('flickity')).default
        
        if (!carouselRef.current || flickityRef.current) return

        flickityRef.current = new Flickity(carouselRef.current, {
          cellAlign: 'center',
          contain: true,
          wrapAround: true,
          prevNextButtons: false,
          pageDots: false,
          draggable: true,
          adaptiveHeight: false,
          selectedAttraction: 0.2,
          friction: 0.8,
          initialIndex: 0
        })

        // Configura os thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail')
        thumbnails.forEach((thumb, i) => {
          thumb.addEventListener('click', () => {
            flickityRef.current?.select(i, false, true)
          })
        })

        flickityRef.current.on('change', (index) => {
          thumbnails.forEach(t => t.classList.remove('is-selected'))
          thumbnails[index]?.classList.add('is-selected')

          // Scroll thumb into view
          const thumb = thumbnails[index]
          if (thumb) {
            const container = thumbnailsRef.current
            const scrollOffset = thumb.offsetLeft - (container.offsetWidth / 2) + (thumb.offsetWidth / 2)
            container.scrollTo({
              left: scrollOffset,
              behavior: 'smooth'
            })
          }
        })
      } catch (error) {
        console.error('Error initializing Flickity:', error)
      }
    }

    setTimeout(initFlickity, 0)

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy()
        flickityRef.current = null
      }
    }
  }, [])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - thumbnailsRef.current.offsetLeft)
    setScrollLeft(thumbnailsRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - thumbnailsRef.current.offsetLeft
    const walk = (x - startX) * 2 // Velocidade do scroll
    thumbnailsRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - thumbnailsRef.current.offsetLeft)
    setScrollLeft(thumbnailsRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - thumbnailsRef.current.offsetLeft
    const walk = (x - startX) * 2
    thumbnailsRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="product-carousel">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-cell">
            <div className="carousel-cell-inner">
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div 
        className="thumbnails"
        ref={thumbnailsRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === 0 ? 'is-selected' : ''}`}
            onClick={(e) => {
              if (!isDragging) {
                flickityRef.current?.select(index)
              }
            }}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .thumbnails {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: grab;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        .thumbnails:active {
          cursor: grabbing;
        }
      `}</style>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ProductCarousel), {
  ssr: true
})