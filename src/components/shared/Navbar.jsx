import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo/Socialdansa-logo.png";
import NavButton from "../UI/Button/NavButton";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">
                            <img className={styles.logo} src={logo} alt="Socialdansa logotyp" />
                        </Link>
                    </li>
                    <li className={styles.toggle}>
                        <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
                        <label className={styles["menu-icon"]} htmlFor="menu-btn">
                            <span className={styles["nav-icon"]}></span>
                        </label>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/">Start</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/map">Karta</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/socialdance">Socialdanser</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/danceband">Dansband</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/about">Om Socialdansa</NavLink>
                    </li>
                    <li className={styles["menu-item"]}>
                        <div className={styles["navbar-container-btn"]}>
                            <span>
                                <NavButton href="/login" background="primary">
                                    Logga in
                                </NavButton>
                            </span>
                            <span>
                                <NavButton href="/register" background="secondary">
                                    Registrera dig
                                </NavButton>
                            </span>
                        </div>
                    </li>
                    <li className={styles["menu-item"]}>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
