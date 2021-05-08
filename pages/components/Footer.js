import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-600 flex flex-col items-center justify-center py-4">
      <p className="text-white mb-4 text-center">
        Greater Toronto Area, Ontario, Canada | sickpaysolidarity@gmail.com
      </p>
      <div className="flex flex-row items-center justify-center">
        <a
          href="https://www.instagram.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
          className="text-white px-4"
        >
          <i aria-hidden className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
          className="text-white px-4"
        >
          <i aria-hidden className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
          className="text-white px-4"
        >
          <i aria-hidden className="fab fa-facebook-f"></i>
        </a>
      </div>
    </footer>
  );
}
