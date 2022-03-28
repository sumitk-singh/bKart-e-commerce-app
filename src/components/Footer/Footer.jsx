import "../../pages-css/home-page-css/page-layout-handeler.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2022 | B-kart</p>
            <p>Made with <span className="odd-color-text"><i class="fa fa-code" aria-hidden="true"></i></span> by Sumit Kr Singh
            </p>
            <ul className="nav-icon-center">
                <li>
                    <a href="https://www.linkedin.com/in/sumit-kr-singh-a94b56228/"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/sumitsi79994403" ><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://github.com/sumitk-singh" ><i class="fa-brands fa-github"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;