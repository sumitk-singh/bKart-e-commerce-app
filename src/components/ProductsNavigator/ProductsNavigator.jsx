// Home page product navigator
import '../../pages-css/home-page-css/home-page-style.css';
import { Link } from "react-router-dom";

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
        return <Link to="/Product"><button  className="round-btn" key={index}>{item}</button></Link>
      })}
    </div>
  </div>
}

export default ProductNavigator;


