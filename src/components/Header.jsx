import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.siteHeader}>
            <Link className={styles.siteHeaderTitle} to="/">Il mio Portfolio</Link>
        </header>
    )
}

export default Header
