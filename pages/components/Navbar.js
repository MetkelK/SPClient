import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black w-full flex flex-row items-center justify-between py-4 w-full">
      <div className="w-28 ml-4 md:ml-8 lg:ml-12">
        <Link href="/">
          <a>
            <img className="" src="/1+1+Sick+Pay+Logo.png" />
          </a>
        </Link>
      </div>
      <div className="w-auto text-right flex items-center mr-4 md:mr-8 lg:mr-12">
        <Link href="/donation">
          <a className="p-1 my-0 mx-1 text-white text-center text-sm md:text-base lg:text-lg">
            Contribute Now
          </a>
        </Link>
        <Link href="/request">
          <a className="p-1 my-0 mx-1 text-white text-center text-sm md:text-base lg:text-lg">
            Apply for funds
          </a>
        </Link>
      </div>
    </nav>
  );
}
