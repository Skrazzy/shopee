// src/components/TopBar.js
export default function TopBar({ promotionData }) {
    const {
      couponsAvailable,
      discountPercentage,
      showBlackFriday = true
    } = promotionData
  
    return (
      <div className="top-bar">
        <img src="/logo-white.png" alt="Shopee Logo" className="logo" />
        <div className="coupon-box">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${(i + 1) * 10}%`,
                backgroundColor: ['#FFD700', '#FF69B4', '#4BC1AE', '#87CEEB'][i % 4],
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          <p className="coupon-text">{couponsAvailable} CUPONS DISPONÍVEIS</p>
          <p className="black-friday">
            {showBlackFriday && <span className="green-text">BLACK FRIDAY</span>}
            {` | ${discountPercentage}% OFF`}
          </p>
        </div>
      </div>
    )
  }