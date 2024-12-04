// src/components/Reviews.js
export default function Reviews({ reviews, stats }) {
    const defaultAvatar = 'https://via.placeholder.com/32x32'
  
    return (
      <div className="reviews-section">
        <div className="reviews-title">Avaliações dos clientes</div>
        <div className="rating-overview">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i key={`overview-star-${i}`} className="fas fa-star"></i>
            ))}
          </div>
          <span className="rating-score">{stats.averageRating.toFixed(1)}</span>
        </div>
        
        <div className="tags-container">
          {stats.tags.map((tag, index) => (
            <div key={`review-tag-${index}`} className="review-tag">
              {tag.text} ({tag.count})
            </div>
          ))}
        </div>
        
        <div className="separator"></div>
  
        {reviews.map((review, reviewIndex) => (
          <div key={`review-card-${reviewIndex}-${review.id}`} className="review-card">
            <div className="review-header">
              <div className="user-info">
                <img 
                  src={review.avatar || defaultAvatar} 
                  alt={`${review.username} avatar`} 
                  className="user-avatar" 
                />
                <span className="username">{review.username}</span>
              </div>
              <span className="review-date">{review.date}</span>
            </div>
            <div className="review-rating">
              <div className="stars">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <i key={`star-${reviewIndex}-${starIndex}`} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            <div className="review-attributes">
              <span className="attribute">
                <span className="attribute-label">Custo-benefício:</span>
                <span className="attribute-value"> {review.attributes.costBenefit}</span>
              </span>
              <span className="attribute">
                <span className="attribute-label">Parecido com o anúncio:</span>
                <span className="attribute-value"> {review.attributes.asAdvertised}</span>
              </span>
            </div>
            <p className="review-text">{review.text}</p>
            {review.images && review.images.length > 0 && (
              <div className="review-images">
                {review.images.map((image, imageIndex) => (
                  <img 
                    key={`review-image-${reviewIndex}-${imageIndex}`} 
                    src={image} 
                    alt={`Review image ${imageIndex + 1} from ${review.username}`} 
                    className="review-image" 
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }