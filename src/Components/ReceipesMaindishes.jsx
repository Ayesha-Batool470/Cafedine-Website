import React from 'react'
import MainDishes from './MainDishes'
import img1 from '../assets/image/menu-1.jpg'
import img2 from '../assets/image/img-2.jpg'
import img3 from '../assets/image/menu-2.jpg'
import './ReceipesMaindishes.css'

const ReceipesMaindishes = () => {
  return (
    <>
    <div className='recipes' >
        <h3 ><i>Main Dishes</i></h3>
    <h1 >We provide quality food.We care <br /> about your health</h1>
    <div className='recipeimg' >
        <MainDishes img={img1}  />
        <MainDishes img={img2}  />
          <MainDishes img={img3}  />
            <MainDishes img={img1}  />
              <MainDishes img={img3}  />
                <MainDishes img={img1}  />
        </div>
    </div>
    </>
  )
}

export default ReceipesMaindishes