import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <ul className={styles.footer__box}>
                    <li className={styles.footer__linkName}>Tools</li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Generate your palettes</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Explore your palettes</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Contrast Checker</a>
                        </Link>
                        <span className={`${styles.footer__badge} ${styles["footer__badge--2"]}`}>soon</span>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Pallete Trends</a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles.footer__box}>
                    <li className={styles.footer__linkName}>Other</li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Explore gradients</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Create a gradient</a>
                        </Link>
                        <span className={`${styles.footer__badge} ${styles["footer__badge--1"]}`}>soon</span>

                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Make a gradient palette</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Android App</a>
                        </Link>
                        <span className={`${styles.footer__badge} ${styles["footer__badge--3"]}`}>soon</span>

                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/">
                            <a className={styles.footer__links}>Figma Plugin</a>
                        </Link>
                        <span className={`${styles.footer__badge} ${styles["footer__badge--5"]}`}>soon</span>
                    </li>
                </ul>
                <ul className={styles.footer__box}>
                    <li className={styles.footer__linkName}>Community</li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Instagram Page</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}> Become a Contributor</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Give us a coffee</a>
                        </Link>
                        <span className={`${styles.footer__badge} ${styles["footer__badge--4"]}`}>soon</span>

                    </li>
                </ul>
                <ul className={styles.footer__box}>
                    <li className={styles.footer__linkName}>Company</li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/">
                            <a className={styles.footer__links}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/about" >
                            <a className={styles.footer__links}>About</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Privacy Policy</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Terms and Conditions</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Advertise</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>History</a>
                        </Link>
                    </li>
                    <li className={styles.footer__linkItems}>
                        <Link href="/" >
                            <a className={styles.footer__links}>Help Center</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footer__bottomDetails}>
                <span className={styles.footer__copyrightText}>
                    © Colorss by <b className={styles.footer__copyrightTextName}>Suraj Singh Chahar</b>.
                    From a creative to all others
                </span>
                <div className={styles.footer__mediaIcon}>
                    <a href="https://www.instagram.com/soorajbutwithu/" target="_blank" rel='noreferrer'>
                        <svg className={styles.footer__icon}>
                            <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UC-n3Fr7c0WoHd8CUPn4CQzw" target="_blank" rel='noreferrer'>
                        <svg className={styles.footer__icon}>
                            <use href="/icons/symbol-defs.svg#icon-youtube"></use>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/imsurajchahar/" target="_blank" rel='noreferrer'>
                        <svg className={styles.footer__icon}>
                            <use href="/icons/symbol-defs.svg#icon-linkedin-with-circle"></use>
                        </svg>
                    </a>
                    <a href="https://codepen.io" target="_blank" rel='noreferrer'>
                        <svg className={styles.footer__icon}>
                            <use href="/icons/symbol-defs.svg#icon-codepen"></use>
                        </svg>
                    </a>
                    <a href="https://github.com/iamsurajchahar" target="_blank" rel='noreferrer'>
                        <svg className={styles.footer__icon}>
                            <use href="/icons/symbol-defs.svg#icon-github"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer