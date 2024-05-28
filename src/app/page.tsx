import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Happy from "@/components/Happy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Young from "@/components/Young";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Happy/>
     <Young/>
     <Offer/>
     {/* <Work/> */}
     {/* <Testimonials/> */}
     <Contact/>
     <Footer/>
    </>
  );
}
