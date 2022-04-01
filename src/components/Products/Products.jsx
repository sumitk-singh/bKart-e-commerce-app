import "../../pages-css/products-page-css/layout-handler.css";
import {react,useState} from "react";
import {useCart} from "../../Contexts/cartContext";
import {useWishList}  from "../../Contexts/wishListContext";
import { useFilter } from "../../Contexts/filterContext";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
  
const Products = () => {

    const { filteredProduct } = useFilter();
    const { items, setItems } = useCart();
    const { wishlistItem, setWishListItem } = useWishList();
    const [products, setProducts] = useState([]);
  
    // add to cart
    const addToCart = ({ product }) => {
      const save = [...items];
      // console.log(save);
      const index = save.findIndex((item) => item._id === product._id);
      if (index === -1) {
        setItems([...save,  product ]);
      } else {
        save[index].quantity += 1;
        setItems(save);
      }
    };
  
    // Move to wishlist
    const moveToWishList = ({ product }) => {
      const save = [...wishlistItem];
    //    console.log(save);
      const index = save.findIndex((item) => item._id === product._id);
      if (index === -1) {
        setWishListItem([...save,  product]);
      }
    };

    return (
        <>
            <div className="page-layout-container">    
              <Sidebar />
                <div id="section-a">
                    {
                        filteredProduct().map((product,_id)=>{
                            return <div className="prod-shirt" key={_id}>
                        <div className="vertical-card-with-shadow">
                            <img className="vertical-card-img" src={product.image} alt="card image" />
                            <div>
                                <div className="text-details">
                                    <h3 className="card-title">{product.productTitle}</h3>

                                    <h3 className="card-content">

                                        <span className="sale-price"><span className="sale-price">Price: ₹{product.price}</span></span> <span>
                                            <h5 id="mrp">MRP: ₹{product.MRP}</h5>
                                        </span><span className="review">
                                        <p>Rating: <span>{product.rating}</span><span class="fa fa-star checked"></span></p>
                                        </span>
                                    </h3>
                                </div>
                                <div className="card-btn">
                                    <Link to="/Cart"><button className="buy-btn" onClick={() => addToCart({ _id, product })}>Buy</button></Link>
                                    <button className="add-to-wishlist" href="#url" onClick={() => moveToWishList({ _id, product })}><i class="fas fa-heart" ></i> </button>
                                    <button className="add-to-cart" href="#url" onClick={() => addToCart({ _id, product })}><i class="fas fa-shopping-cart"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Products;