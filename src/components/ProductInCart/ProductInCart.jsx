import '../../pages-css/cart-css/cart-page-layout.css';

const ProductInCart = () => {
    return (
        <>
            {/* section-2- products in cart */}
            <div className='page-layout-container'>
                <div className="section-2">
                    <div className="vertical-card-with-shadow">
                        <img className="vertical-card-img" src="/assets/images/tshirt/tee-1.jpg" alt="card image" />
                        <div>
                            <div className="text-details">
                                <h3 className="card-title">Solid round neck tshirt</h3>

                                <h3 className="card-content">
                                    Price: ₹1190
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

                                    <label htmlFor="qty">Qty.</label>
                                    <input type="number" id="qty" name="qty" value="1" min="1" max="50" />
                                </div>

                            </div>
                            <div className="cart-card-btn">
                                <button className="btn-primary" href="#url">Move to wishlist</button>
                                <button className="btn-secondary" href="#url">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-card-with-shadow">
                        <img className="vertical-card-img" src="/assets/images/tshirt/tee-1.jpg" alt="card image" />
                        <div>
                            <div className="text-details">
                                <h3 className="card-title">Solid round neck tshirt</h3>

                                <h3 className="card-content">
                                    Price: ₹1199
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

                                    <label htmlFor="qty">Qty.</label>
                                    <input type="number" id="qty" name="qty" value="1" min="1" max="50" />
                                </div>

                            </div>
                            <div className="cart-card-btn">
                                <button className="btn-primary" href="#url">Move to wishlist</button>
                                <button className="btn-secondary" href="#url">Remove</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductInCart;