// Home page product navigator
import '../../pages-css/home-page-css/home-page-style.css';

//*** Home page product navigator button items ***
const productItems =[
  "Tshirt",
  "Jacket",
  "Shirt",
  "Pant",
  "Shoes",
  "Goggles"
];
//*** */

const ProductNavigator = () => {

  const items = productItems;
  return <div className="section-1">
    <div className="home-page-header-product-display">
      {items.map((item, index) => {
        return <button  className="round-btn" key={index}>{item}</button>
      })}
    </div>
  </div>
}

export default ProductNavigator;


