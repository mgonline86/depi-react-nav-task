import logoImage from "../../logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={`${styles.nav} container`}>
        <div className={styles.brandContainer}>
          <a href="/">
            <img
              className={styles.brandLogo}
              src={logoImage}
              alt="logo"
              width={48}
              height={40}
            />
          </a>
        </div>
        <div className={styles.navMenuDesktop}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.navMenuMobile}>
          <details>
            <summary></summary>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
