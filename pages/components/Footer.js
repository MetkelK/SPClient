// import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footerSection">
      <p>Greater Toronto Area, Ontario, Canada | sickpaysolidarity@gmail.com</p>
      <div className="footerIcons">
        <a
          href="https://www.instagram.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </footer>
  );
}
