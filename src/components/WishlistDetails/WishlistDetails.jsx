import "../../pages-css/wishlist-css/page-layout.css";
import { useWishList } from '../../Contexts/wishListContext';
import { useCart } from '../../Contexts/cartContext';

const WishlistDetails = () => {

    // const {wishlistItem} =useWishList();
    const { wishlistItem, setWishListItem } = useWishList();
    const { items, setItems } = useCart();
    // console.log(wishlistItem);
    

    // Move from wishList to cart
    const addToCart = ({ product }) => {
        const save = [...items];
        console.log(save);
        const index = save.findIndex((item) => item.id === product.id);
        if (index === -1) {
          setItems([...save,  product ]);
        } else {
          save[index].quantity += 1;
          setItems(save);
        }
      };

      //Remove form wishlist
    const handleRemove= (id)=>{
        
        const newItems = wishlistItem.filter((item) => item._id !== id);

        setWishListItem(newItems);
      }

    return (
        <>
          
        {
            wishlistItem.length === 0 ? (
                <h1 style={{textAlign:"center"}}>Wishlist is empty</h1>
            ):(

                <div id="page-layout-container">

                {/*  section-1  */}
                <div id="section-1">
                    <h3>My wishlist</h3>
                </div>
                {/* end of section-1  */}
                  

                <div id="section-2">

                    {
                        wishlistItem.map((product,id)=>{
                           
                            return <div className="prod-in-wishlist" key={id}>
                        {/* <h1>{product.product.price}</h1> */}
                        <div className="vertical-card-with-shadow">
                      
                            <img className="vertical-card-img" src={product.image} alt="card image" />
                            <div>
                                <div className="text-details">
                                    <h3 className="card-title">{product.productTitle}</h3>

                                    <h3 className="card-content">
                                        Price: ₹{product.price} <span>
                                            <h5 id="mrp">MRP: ₹{product.MRP}</h5>
                                        </span><span>
                                            <h6>Review: ({product.review})</h6>
                                        </span>
                                    </h3>

                                </div>
                                <div className="cart-card-btn">
                                    <button className="btn-primary" href="#url" onClick={() => addToCart({ id, product })}>Move to cart</button>
                                    <button className="btn-secondary" href="#url" onClick={()=>handleRemove(product._id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                        {/*  end of product-1 in wishlist  */}
                    </div>
                        })
                    }
                    
                </div>

            </div>
            )
        }
            
        </>
    );
}

export default WishlistDetails;