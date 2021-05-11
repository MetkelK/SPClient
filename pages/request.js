import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RequestForm from "./components/RequestForm";
import Footer from "./components/Footer";

export default function Requests() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />
      <RequestForm />
      <Footer />
    </div>
  );
}
