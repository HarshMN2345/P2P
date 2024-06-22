import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GirlBanner from "@/components/GirlBanner";
import Happy from "@/components/Happy";
import Hero from "@/components/Hero";
import Manage from "@/components/Manage";
import Manage2 from "@/components/Manage2";
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
     <Brands/>
     <GirlBanner/>
     <Manage/> 
     <Manage2/>
     <Offer/>
     <Young/> 
     {/* <Work/> */}
     {/* <Testimonials/> */}
     <Contact/>
     <Footer/>
    </>
  );
}
