import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Header />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
