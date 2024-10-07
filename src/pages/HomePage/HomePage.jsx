import { QueryClientProvider } from "@tanstack/react-query";
import AppPromo from "../../components/AppPromo/AppPromo";
import CityDropdown from "../../components/CityDrop/CityDropdown";
import DoctorSection from "../../components/DoctorSection/DoctorSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Insurance from "../../components/Insurance/Insurance";
import JobSection from "../../components/JobSection/JobSection";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import Speciality from "../../components/Speciality/Speciality";
import SubscriptionPromo from "../../components/SubscriptionPromo/SubscriptionPromo";
import queryClient from "../../api/queryClient";

const HomePage = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default HomePage;
