import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.name}>
        <h1>BEN KAHL</h1>
      </div>
      <div className={styles.projectList}>
        <div className={styles.backgroundCircle}></div>
        <div className={styles.foregroundCircle}></div>
        <div className={styles.links}>
          <ul>
            <li id="projects">PROJECTS</li>
            <li id="about">ABOUT</li>
            <li id="contact">CONTACT</li>
          </ul>
        </div>
      </div>
      <div className={styles.home}>
        <p id="H">H</p>
        <p id="O">O</p>
        <p id="M">M</p>
        <p id="E">E</p>
      </div>
    </div>
  );
}
