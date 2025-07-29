import styles from "./Nav.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.hamburger}>
        <div className={styles.hamburger1}></div>
        <div className={styles.hamburger2}></div>
        <div className={styles.hamburger3}></div>
      </div>
    </div>
  );
}
