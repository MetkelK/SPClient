import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
          className="text-white px-4"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.facebook.com/sickpayfund"
          target="_blank"
          rel="noreferrer"
          className="text-white px-4"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
}
