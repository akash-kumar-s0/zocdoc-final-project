import "./App.css";
import AppPromo from "./components/AppPromo";
import DoctorSection from "./components/DoctorSection";
import CityDropdown from "./components/CityDrop/CityDropdown";
// import CityDropdown from "./components/Finds/Visits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Insurance from "./components/Insurance";
import JobSection from "./components/JobSection";
import PartnerSection from "./components/PartnerSection";
import Speciality from "./components/Speciality";
import SubscriptionPromo from "./components/SubscriptionPromo";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Insurance />
      <Speciality />
      <DoctorSection />
      <AppPromo />
      <SubscriptionPromo />
      <PartnerSection />
      <CityDropdown />
      <JobSection />
      <Footer />
    </>
  );
}

export default App;
