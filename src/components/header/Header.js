import { Link } from "react-router-dom";
import { MainPage } from "../main-page/MainPage";
import styles from "./Header.module.css";
import "../../reset.css"

export const Header = () => {
    return (<navbar>
    <ul className={styles.header} role="list">
        <li className={styles.headerLinks}><Link to="/" className={`${styles.headerLinkElement} ${styles.home}`}>Home</Link></li>
        <li className={styles.headerLinks}><Link to="/login" className={styles.headerLinkElement}>Login</Link></li>
        <li className={styles.headerLinks}><Link to="/register" className={styles.headerLinkElement}>Register</Link></li>
        <li className={styles.headerLinks}><Link to="/about" className={styles.headerLinkElement}>About Us</Link></li>
        <li className={styles.headerLinks}><Link to="/contact" className={styles.headerLinkElement}>Contact Us</Link></li>
    </ul>
    </navbar>)
    
}