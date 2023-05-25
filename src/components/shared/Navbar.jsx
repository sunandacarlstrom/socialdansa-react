import { Link, NavLink } from "react-router-dom";
import "./Navbar.module.css";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="navbar-container">
                    <ul className="menu">
                        <li className="logo">
                            <Link to="/">
                                <img src="../../assets/images/logo/Socialdansa-logo.png" alt="Socialdansa logotyp" />
                            </Link>
                        </li>
                        <li className="hamburger-menu">
                            <input className="menu-btn" type="checkbox" id="menu-btn" />
                            <label className="menu-icon" htmlFor="menu-btn">
                                <span className="nav-icon"></span>
                            </label>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/">Start</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/map">Karta</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/socialdance">Socialdanser</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/danceband">Dansband</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/about">Om Socialdansa</NavLink>
                        </li>
                        <li className="menu-item">
                            <div className="navbar-container-btn">
                                <span>
                                    <Link to="/login" className="btn-navbar btn-primary-color">
                                        Logga in
                                    </Link>
                                </span>
                                <span>
                                    <Link to="/register" className="btn-navbar btn-secondary-color">
                                        Registrera dig
                                    </Link>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
