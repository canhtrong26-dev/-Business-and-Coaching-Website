import Navbar from "../components/Homepage/Navbar";
import ContactForm from "../components/Contactpage/ContactForm";
import ContactInfo from "../components/Contactpage/ContactInfo";
import Footer from "../components/Homepage/footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </>
  );
}