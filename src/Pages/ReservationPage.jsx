
import Nav from "../Components/Nav";
import AboutLandingPage from "../Components/AboutLandingPage";
import img1 from '../assets/image/img-4.jpg'
import Footer from '../Components/Footer';
import ReserveSeat from "../Components/ReserveSeat";
const ReservationPage = () => {
  return (
     <>
       <div style={{overflowX:"hidden",overflowY:"hidden"}}>
    <Nav />
     <AboutLandingPage img={img1} title="Reservation" />
     <ReserveSeat/>
       <Footer/> 
       </div>
   </>
  )
}

export default ReservationPage