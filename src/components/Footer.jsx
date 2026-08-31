import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <p>Francesco Cassese — {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
