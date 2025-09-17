import React from 'react'
import Nav from "../Components/Nav";

const MainLayout = ({Children}) => {
  return (
    <div>
     <Nav  />
     <div>{Children}</div>
    </div>
  )
}

export default MainLayout