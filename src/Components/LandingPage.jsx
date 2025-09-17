import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


import './LandingPage.css'

import img1 from '../assets/image/slide-1.jpg'
import img2 from '../assets/image/slide-2.jpg'
import img3 from '../assets/image/slide-3.jpg'
import Carousel from 'react-bootstrap/Carousel';


const LandingPage = () => {
    
  return (
    <>
   
     <div  style={{overflow:"hidden", overflowX: "hidden", overflowY: "hidden" }}> 
         
    <Carousel  >
   
      <Carousel.Item interval={500}>
        <img className='slideimg' src={img1} alt="" />
        <Carousel.Caption  style={{overflowX: "hidden"}}>
          
         <div className="heading">
    <h3><i>Welcome To Restuarant</i></h3>
    <h1>Fresh Delicious meal to reach your optimum health and fitness</h1>
   
      <Button className='button' variant="danger">View Menu</Button>
    

</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='slideimg' src={img2} alt="" />
        <Carousel.Caption>
         
          <div className="heading">
    <h3><i>Welcome To Restuarant</i></h3>
    <h1>Fresh Delicious meal to reach your optimum health and fitness</h1>
   
      <Button className='button' variant="danger">View Menu</Button>
    

</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='slideimg' src={img3} alt="" />
        <Carousel.Caption>
          <div className="heading">
    <h3><i>Welcome To Restuarant</i></h3>
    <h1>Fresh Delicious meal to reach your optimum health and fitness</h1>
   
      <Button className='button' variant="danger">View Menu</Button>
    

</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

     </div>
</>
  )
}

export default LandingPage