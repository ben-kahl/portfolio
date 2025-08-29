'use client';
import styles from "./page.module.css";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <h1>CONTACT</h1>
      <div className={styles.contacts}>
        <div>
          <a href='ben.kahl2002@gmail.com'>
            <div className={styles.emailIcon}></div>
            ben.kahl2002@gmail.com
          </a>
        </div>
        <div>
          <a href='https://www.github.com/ben-kahl'>
            <div className={styles.githubIcon}></div>
            github.com/ben-kahl
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/ben-kahl/'>
            <div className={styles.linkedInIcon}></div>
            linkedin.com/in/ben-kahl/
          </a>
        </div>
      </div>
      <h3>temp</h3>
      <div className={styles.background}>
        <div className={styles.outerRing}></div>
        <div className={styles.innerCircle}></div>
        <div className={styles.leftPoly}></div>

        <div className={styles.rightBox}></div>
      </div>
    </div>
  );
}
