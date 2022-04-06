import "../../pages-css/wishlist-css/page-layout.css";
import { useWishList } from '../../Contexts/wishListContext';
import { useCart } from '../../Contexts/cartContext';

const WishlistDetails = () => {

    const { wishlistItems, removeFromWishlist } = useWishList();
    const { addToCart } = useCart();

    return (
        <>

            {
                wishlistItems.length === 0 ? (
                    <h1 style={{ textAlign: "center" }}>Wishlist is empty</h1>
                ) : (

                    <div id="page-layout-container">

                        {/*  section-1  */}
                        <div id="section-1">
                            <h3>My wishlist</h3>
                        </div>
                        {/* end of section-1  */}

                        <div id="section-2">

                            {
                                wishlistItems.map((product, id) => {

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
                                                    <button className="btn-primary" href="#url" onClick={() => addToCart({ product })}>Move to cart</button>
                                                    <button className="btn-secondary" href="#url" onClick={() => removeFromWishlist(product._id)}>Remove</button>
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