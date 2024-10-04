import './App.css'
import AppPromo from './components/AppPromo'
import DoctorSection from './components/DoctorSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Insurance from './components/Insurance'
import PartnerSection from './components/PartnerSection'
import Speciality from './components/Speciality'
import SubscriptionPromo from './components/SubscriptionPromo'

function App() {

  return (
    <>
        <Header/>
        <Hero/>
        <Insurance/>
        <Speciality/>
        <DoctorSection/>
        <AppPromo/>
        <SubscriptionPromo/>
        <PartnerSection/>
        <Footer/>
    </>
  )
}

export default App
