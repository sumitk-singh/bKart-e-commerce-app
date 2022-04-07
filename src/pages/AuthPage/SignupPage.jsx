import '../../pages-css/sign-up-page-css/page-layout.css';
import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
        <>
            <div className="page-layout-container">

                <div className="section-1">
                    <form className="sign-up">
                        <h2 className="txt-center">Sign up</h2>
                        <input type="text" placeholder="First name" />
                        <input type="email" placeholder="Email id" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm password" />
                        <p>By sign up. I agree to <span className="txt-highlight"><a href="#url"> Terms Of Use</a></span> & <span class="txt-highlight"><a href="#url"> Privacy Policy</a></span></p>
                        <button className="btn-sign-up">Sign up</button>
                        <p>Having trouble in Sign up <span className="txt-highlight"><a href="#url"> Get help</a></span><span><a class="txt-highlight txt-float-right"><Link to="/Login">Login</Link></a></span></p>
                    </form>
                </div>

            </div>
        </>
    );
};

export default SignupPage;