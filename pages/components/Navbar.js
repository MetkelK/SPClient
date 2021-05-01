import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navImage}>
        <Image
          src="/1+1+Sick+Pay+Logo.png"
          alt="Banner Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.navLinks}>
        <a href="https://www.instagram.com/sickpayfund">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/sickpayfund">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/sickpayfund">
          <i class="fab fa-facebook"></i>
        </a>
        <Link href="/donation">
          <a className={styles.donateButton}>Contribute Now</a>
        </Link>
      </div>
    </nav>
  );
}
