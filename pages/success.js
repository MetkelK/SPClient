import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Success() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar className="flex-none" />
      <div className="flex-grow p-12 text-center">
        <h1 className="text-5xl mb-12">Thank you for your donation</h1>
      </div>
      <Footer className="flex-none" />
    </div>
  );
}
