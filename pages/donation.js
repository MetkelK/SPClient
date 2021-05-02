import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import DonateForm from "./components/DonateForm";

export default function Donation() {
  return (
    <div>
      <Navbar />
      <DonateForm />
    </div>
  );
}
