import React from 'react'
import "./PortfolioDashboard.css"
import FeaturesCard from './FeaturesCard';
 function PortfolioDashboard() {
  return (
    <div id='MainContainer'>
        <div id='HeadContainer'>
      <h1 >Modern Workforce Management Solution</h1><br/>
      
       </div>
    {/* <center><h2>DashBoard's</h2></center>  */}
      <FeaturesCard/>
    </div>
  )
}
export default PortfolioDashboard;
