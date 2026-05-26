import React from 'react'
import "./PortfolioDashboard.css"
import FeaturesCard from './FeaturesCard';
import ContactInfo from './ContactInfo';
function PortfolioDashboard() {
  return (
    <div id='MainContainer'>
      <div id='HeadContainer'>
        <h1 >Modern Workforce Management Solution</h1><br />

      </div>
      {/* <center><h2>DashBoard's</h2></center>  */}
      <FeaturesCard />
      <ContactInfo />
    </div>
  )
}
export default PortfolioDashboard;
