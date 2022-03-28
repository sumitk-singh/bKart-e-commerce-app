import '../../pages-css/compo-css/navbar.css';
import logo from "../../assets/logo/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="page-layout-container">
            <div className="header">
                <div className="nav-bar">
                    <div className="brand-logo">
                        <Link to="/"><img src={logo} alt="brand-logo" /></Link>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link> </li>
                            <li> <Link to="/Product">Products</Link> </li>
                        </ul>
                    </div>
                    <div className="nav-bar-search-box">
                        <input className="search-box" type="text" placeholder="search for products" spellCheck="true" /><i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="nav-bar-icons">
                        <ul className="nav-bar-icons-list">
                            <li><Link to="/Login">Login</Link> </li>
                            <li>
                                <Link to="/Wishlist"> <i className="fa fa-heart" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="/Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;