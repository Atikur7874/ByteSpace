import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import CourseSection from "./components/CourseSection";
import GrowthSection from "./components/GrowthSection";
import CreatorCTA from "./components/CreatorCTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <PartnerLogos />
        <CourseSection />
        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
