import "./OfferBox.css"

const OfferBox = ({ image, destination, origin, price }) => {
  return (
    <div className="offer-box">
      <div className="offer-image-container">
        <img src={image || "/placeholder.svg"} alt={destination} className="offer-image" />
      </div>
      <div className="offer-content">
        <h3 className="offer-destination">{destination}</h3>
        <p className="offer-origin">Desde {origin}</p>
        <p className="offer-price">${price}</p>
      </div>
    </div>
  )
}

export default OfferBox
