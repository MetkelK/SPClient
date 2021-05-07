import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navImage">
        <Link href="/">
          <a>
            <Image
              src="/1+1+Sick+Pay+Logo.png"
              alt="Banner Image"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
      <div className="navLinks">
        <Link href="/donation">
          <a className="navButton">Contribute Now</a>
        </Link>
        <Link href="/request">
          <a className="navButton">Apply for funds</a>
        </Link>
      </div>
    </nav>
  );
}
