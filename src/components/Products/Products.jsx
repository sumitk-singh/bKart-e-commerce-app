import "../../pages-css/products-page-css/layout-handler.css";
import {react,useState} from "react";
// import {useCart} from "../../Contexts/cartContext";
// import {useWishList}  from "../../Contexts/wishListContext";
import { useFilter } from "../../Contexts/filterContext";
import Sidebar from "../Sidebar/Sidebar";
import ProductData from "../../db/productData";
import { Link } from "react-router-dom";
  
const Products = () => {

    const { filteredProduct } = useFilter();

    // console.log(filteredProduct);


  
    // add to cart
    
  
    // Move to wishlist
  
   

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
                                    <Link to="/Cart"><button className="buy-btn" >Buy</button></Link>
                                    <button className="add-to-wishlist" ><i class="fas fa-heart" ></i> </button>
                                    <button className="add-to-cart" ><i class="fas fa-shopping-cart"></i> </button>
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