import AboutLandingPage from "../Components/AboutLandingPage";
import AboutSecPart from "../Components/AboutSecPart";
import AboutThirPart from "../Components/AboutThirPart";
import AboutBackground from "../Components/AboutBackground";

import Gallary from "../Components/Gallary";
import Nav from "../Components/Nav";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import img1 from '../assets/image/img-4.jpg'

const AboutPage = () => {
  return (
    <>
      <div style={{overflowX:"hidden",overflowY:"hidden"}}>
        <Nav />
      <AboutLandingPage img={img1} title="About Us" />
      <AboutSecPart />
      <AboutThirPart />
      <AboutBackground />
      <Service />
      
      <Gallary />
      <Footer />
      </div>
    </>
  );
};

export default AboutPage;
