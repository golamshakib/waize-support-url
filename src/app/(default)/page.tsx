import ContactUs from "../components/ContactUs";
import DeleteResult from "../components/DeleteResult";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Instruction from "../components/Instruction";
import Security from "../components/Security";
import UserGeneratedContent from "../components/UserGeneratedContent";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Header />
        <Instruction />
        <DeleteResult />
        <Security />
        <UserGeneratedContent />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
