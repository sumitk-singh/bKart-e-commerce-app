import styles from "../../pages-css/cart-css/cart-page-layout.module.css";
import subStyles from "../../pages-css/cart-css/page-style.module.css";
import { useCart } from '../../Contexts/cartContext';
import { useWishList } from '../../Contexts/wishListContext';


const CartDetails = () => {

    const { cartItems, removeFromCart } = useCart();
    const { addToWishList } = useWishList();



    return (
        <>
            <div id={styles.page_layout_container}>
                {/* section-1- heading */}
                <div id={styles.section_1}>
                    <h2>My shopping cart </h2>
                    <p className="spacer"></p>
                </div>
                {/* end of section-1 */}

                {/* logic */}

                {cartItems.length === 0 ? (
                    <h1>Cart is Empty</h1>
                ) :
                    (<div id={styles.section_2}>

                        {
                            cartItems.map((product, id) => {
                                return <div className="vertical-card-with-shadow" key={id}>
                                    {/* <h1>{item.quantity}</h1> */}
                                    <img className="vertical-card-img" src={product.image} alt="card image" />
                                    <div>
                                        <div className="text-details">
                                            <h3 className="card-title">{product.productTitle}</h3>

                                            <h3 className="card-content">
                                                Price: ₹{product.price}
                                            </h3>
                                            <div className="size-n-qty">
                                                Size:
                                                <select name="select-tshirt-size" id="select-tshirt-size">
                                                    <option value="S">S</option>
                                                    <option value="S">M</option>
                                                    <option value="S">L</option>
                                                    <option value="S">XL</option>
                                                    <option value="S">XXL</option>
                                                </select>

                                                <label htmlFor="quantity">Qty.</label>
                                                <input type="number" id="quantity" name="quantity" value={product.quantity} min="1" max="50" />
                                            </div>

                                        </div>
                                        <div className="cart-card-btn">
                                            <button className="btn-primary" href="#url" onClick={() => addToWishList({ product })}>Move to wishlist</button>
                                            <button className="btn-secondary" href="#url" onClick={() => removeFromCart(product._id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    )}
                {/* section-3- right side check out details */}
                <div id={styles.section_3}>
                    <div className={subStyles.r_side_cart_details}>
                        <p>Price details</p>
                        <hr />
                        <p className={subStyles.spacer}></p>
                        <p><span>Total Price:</span> <span className={subStyles.txt_float_right}>₹7194</span></p>
                        <p>Discount : <span className={subStyles.txt_float_right}>-₹2500</span></p>
                        <p>Coupon discount: <span className={subStyles.txt_float_right}><a to="#url" className={subStyles.coupon}>Apply coupon</a>
                        </span></p>
                        <p>Convinience fee: <span className={subStyles.txt_float_right} >Free</span></p>
                        <p className={subStyles.spacer}></p>
                        <hr />
                        <h4 className={subStyles.txt_bold}>Total amount:
                            <span className={`${subStyles.txt_float_right} ${subStyles.dark}`}>₹4694</span>
                        </h4>
                        <hr />
                        <button className={subStyles.btn_place_order}>Place order</button>
                    </div>
                </div>
                {/* end of section-3 */}
            </div>
        </>
    );
}

export default CartDetails;