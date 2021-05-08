import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DonateForm from "./components/DonateForm";
import Footer from "./components/Footer";

export default function Donation() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />
      <DonateForm />
      <Footer />
    </div>
  );
}
