//Home page price card
// import '../../pages-css/cart-css/page-layout.css';
import '../../pages-css/compo-css/card.css';

//*** Home page price card items ***
const priceTags = [
  {
    price:"499",
  },
  {
    price:"1499",
  },
  {
    price:"2499",
  }
]
//*** */

const PriceCard = () => {
  return (
    <div className="section-3">
      <div className="home-page-offer-card">
        {priceTags.map((price, index) => {
          return <div className="offer-card card-2" key={index}>
            <h2 lass="text-inline" >Under INR {price.price}/-</h2>
            <button className="offer-card-btn">View all</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default PriceCard;