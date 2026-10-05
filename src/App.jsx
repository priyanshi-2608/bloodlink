import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DonorStats from "./components/DonorStats";
import BloodRequests from "./components/BloodRequests";
import WhyDonate from "./components/WhyDonate";
import DonationHistory from "./components/DonationHistory";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-4 py-lg-5">
        <HeroSection />

        <DonorStats />

        <BloodRequests />

        <WhyDonate />

        <DonationHistory />
      </main>

      <Footer />
    </>
  );
}

export default App;