'use client';
import styles from "./page.module.css";
import Selector from "./components/Selector";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredLink, setHoveredLink] = useState<string>('projects');

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
            <li
              className={styles.projects}
              onMouseEnter={() => setHoveredLink('projects')}
            >
              {hoveredLink === 'projects' && <Selector />}
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li
              className={styles.about}
              onMouseEnter={() => setHoveredLink('about')}
            >
              {hoveredLink === 'about' && <Selector />}
              <Link href='/about'>ABOUT</Link>
            </li>
            <li
              className={styles.contact}
              onMouseEnter={() => setHoveredLink('contact')}
            >
              {hoveredLink === 'contact' && <Selector />}
              <Link href='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.home}>
        <svg width="1370" height="964" viewBox="0 0 1370 964" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M976.58 654.446L1183.79 643.515L1186.95 703.431L1069.62 709.621L1072.36 761.549L1171.22 756.334L1174.06 810.259L1075.2 815.474L1078.26 873.394L1195.09 867.23L1198.31 928.145L991.594 939.05L976.58 654.446Z" fill="black" />
          <path d="M898.178 935.381L815.624 919.864L838.238 764.365C842.982 733.714 846.176 710.403 847.821 694.432L846.347 694.155C840.076 705.865 831.857 724.331 821.689 749.553L816.923 761.376L754.199 908.318L671.645 892.801L669.098 749.362L668.803 723.869C667.65 692.109 666.717 670.905 666.005 660.257L664.531 659.98C660.142 676.114 653.977 702.597 646.036 739.431C645.277 741.663 644.436 745.235 643.513 750.149L614.152 881.995L531.106 866.385L595.547 588.507L736.086 614.923L737.443 740.332L737.243 773.872C741.773 764.21 746.354 753.369 750.987 741.352L796.036 626.191L939.523 653.162L898.178 935.381Z" fill="black" />
          <path d="M321.804 750.383C280.768 722.406 256.493 691.736 248.981 658.374C241.932 624.924 253.054 586.717 282.346 543.753C311.075 501.614 343.303 478.604 379.031 474.722C414.759 470.84 451.214 481.574 488.395 506.923C566.612 560.25 579.152 625.885 526.013 703.827C499.161 743.211 468.398 767.623 433.721 777.063C399.321 786.691 362.015 777.798 321.804 750.383ZM353.387 700.508C361.099 705.766 368.416 708.939 375.339 710.028C382.449 710.842 389.773 708.976 397.309 704.432C410.791 697.083 426.264 680.602 443.726 654.988C460.813 629.925 470.314 609.776 472.229 594.541C474.332 579.031 467.86 565.742 452.812 554.676C447.028 550.733 440.5 547.291 433.226 544.349C426.416 541.32 421.434 540.343 418.279 541.42C412.345 543.023 404.096 549.501 393.53 560.856C383.428 572.123 373.307 585.193 363.168 600.065C347.395 623.2 338.05 641.64 335.134 655.386C332.718 665.438 333.044 674.132 336.111 681.468C339.366 688.529 345.125 694.875 353.387 700.508Z" fill="black" />
          <path d="M252.804 218.834L304.838 292.879L219.339 352.963L263.9 416.372L349.399 356.287L401.434 430.332L168.254 594.199L116.219 520.154L216.855 449.433L172.294 386.024L71.659 456.746L19.6241 382.701L252.804 218.834Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}
