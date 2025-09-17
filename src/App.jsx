import "./App.css";
import LandingPage from "./Components/LandingPage";
import CardContainer from "./Components/CardContainer";
import AboutCafedine from "./Components/AboutCafedine";
import Background from "./Components/Background";
import Dishes from "./Components/Dishes";
import Phone from "./Components/Phone";
import Nav from "./Components/Nav";

import Gallary from "./Components/Gallary";
import Footer from "./Components/Footer";
function App() {

  return (
    <>
      <div style={{ overflowX: "hidden"}}>
        <Nav  />
       <LandingPage/>
        <CardContainer />
       <AboutCafedine />
        <Background />
        <Dishes />
        <Phone />
         
        <Gallary />
        <Footer />
      
      </div>
    </>
  );
}

export default App;
