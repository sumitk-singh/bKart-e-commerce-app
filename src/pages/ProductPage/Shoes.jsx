import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import "../../pages-css/products-page-css/layout-handler.css";

const Shoes = () => {
    return (
        <>
        
            <Sidebar />

            <div className="page-layout-container">

                <div id="section-1">
                    <div className="prod-shirt">
                        <div className="vertical-card-with-shadow">
                            <img className="vertical-card-img" src="/assets/images/shirts/sht-1.jpg" alt="card image" />
                            <div>
                                <div className="text-details">
                                    <h3 className="card-title">Men's premium shirt</h3>

                                    <h3 className="card-content">

                                        <span className="sale-price"><span className="sale-price">Price: ₹1199</span></span> <span>
                                            <h5 id="mrp">MRP: ₹3999</h5>
                                        </span><span className="review">
                                            <p>Ratinng: <span>3</span><span class="fa fa-star checked"></span></p>
                                        </span>
                                    </h3>
                                </div>
                                <div className="card-btn">
                                    <button className="buy-btn" href="#url">Buy</button>
                                    <button className="add-to-wishlist" href="#url"><i class="fas fa-heart"></i> </button>
                                    <button className="add-to-cart" href="#url"><i class="fas fa-shopping-cart"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

          
        </>
    );
};

export default Shoes;