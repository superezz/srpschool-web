import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdmissionBanner from "@/components/AdmissionBanner";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Programs from "@/components/Programs";
import Results from "@/components/Results";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AdmissionBanner />
        <Stats />
        <Features />
        <Programs />
        <Results />
        <Gallery />
        <Testimonials />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
