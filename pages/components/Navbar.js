import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black w-full flex flex-row items-center justify-between py-4 w-full">
      <div className="w-28 ml-6">
        <Link href="/">
          <a>
            {/* <Image
              src="/1+1+Sick+Pay+Logo.png"
              alt="Banner Image"
              layout="fill"
              objectFit="contain"
            /> */}
            <img className="" src="/1+1+Sick+Pay+Logo.png" />
          </a>
        </Link>
      </div>
      <div className="w-auto text-right mr-6 flex items-center">
        <Link href="/donation">
          <a className="p-2 my-0 mx-1 text-white text-center">Contribute Now</a>
        </Link>
        <Link href="/request">
          <a className="p-2 my-0 mx-1 text-white text-center">
            Apply for funds
          </a>
        </Link>
      </div>
    </nav>
  );
}
