import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="purple lighten-3">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        SPA React Project
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export { Header };