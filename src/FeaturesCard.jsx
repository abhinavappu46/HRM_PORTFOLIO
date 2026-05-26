import React from 'react'
import "./FeaturesCard.css"
function FeaturesCard() {
    return (
        <div id='MainDiv'>
            <div className='Card'>
                <div className='VideoCard'>
                    <video className="Video" src="/video/DashBoard.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
                <center><h2>Main Dasboard</h2></center>
                <p className='Ptag'>• View total employee statistics</p>
                <p className='Ptag'>• Monitor expiring company documents</p>
                <p className='Ptag'>• Track pending approval request</p>
                <p className='Ptag'>• View assets currently in service</p>
                <p className="Ptag">• Access quick employee management actions</p>
                <p className="Ptag">• Get quick insights from all dashboards</p>
                <p className="Ptag">• Monitor overall company operations efficiently</p>
                </div>
            </div>
            <div className='Card'>
                <div className='VideoCard'>
                    <video className="Video" src="/video/employee.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
                <center><h2>Employee Management</h2></center>
                <p className='Ptag'>• Add new employees with department,status,personal Deatils etc</p>
                <p className='Ptag'>• Search employees instantly </p>
                <p className='Ptag'>• Filter employees by departments</p>
                <p className='Ptag'>• Filter employees by employee status</p>
                <p className="Ptag">• Remove employee records securel</p>
                <p className="Ptag">• export employee details to excel</p>
                </div>
            </div>
            <div className='Card'>
                 <div className='VideoCard'>
                    <video className="Video" src="/video/Request.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
                <center><h2>Request management</h2></center>
                <p className='Ptag'>• Submit employee service requests</p>
                <p className='Ptag'>• Request approval & rejection system</p>
                <p className='Ptag'>• View complete request histor</p>
                <p className='Ptag'>• Search specific requests instantly</p>
                <p className='Ptag'>• Manage all employee requests efficiently</p>
              </div>
            </div>
            <div className='Card'>
                
                 <div className='VideoCard'>
                    <video className="Video" src="/video/Assets.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
               <center> <h2>Asset register</h2></center>
               <p className='Ptag'>• Add and manage company assets</p>
                <p className='Ptag'>• View total, available & in-use assets</p>
                <p className='Ptag'>• Track maintenance asset records</p>
                <p className='Ptag'>• Monitor asset availability status</p>
                <p className="Ptag">• View asset location & custodian details</p>
                <p className="Ptag">• Search assets instantly</p>
                </div>
            </div>
            <div className='Card'>
                <div className='VideoCard'>
                    <video className="Video" src="/video/Document.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
                <center><h2>Document Library</h2></center>
                <p className='Ptag'>• Track total company documents</p>
                <p className='Ptag'>• Monitor expired & expiring documents</p>
                <p className='Ptag'>• View valid document recordsRole-based access</p>
                <p className='Ptag'>• Upload new company document</p>
                <p className="Ptag">• Search specific documents instantly</p>
                <p className="Ptag">• Access complete document information</p>
                </div>
            </div>
            <div className='Card'>
                <div className='VideoCard'>
                    <video className="Video" src="/video/Attendance.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
               <center> <h2>Attendance Tracking</h2></center>
               <p className='Ptag'>• Monitor total employee attendance</p>
                <p className='Ptag'>• Track present, absent & on-leave employees </p>
                <p className='Ptag'>• Identify late employee records</p>
                <p className='Ptag'>• View daily & monthly attendance report</p>
                <p className="Ptag">• Search attendance by department</p>
                <p className="Ptag">• Search specific employee attendance</p>
                <p className="Ptag">• Export attendance reports to Excel</p>
            </div>
            </div>
            <div className='Card'>
                <div className='ImageCard'>
                    <video className="Video" src="/video/payroll.mp4" alt='video view' autoPlay muted loop/>
                </div>
                <div className='FeaturesCard'>
               <center> <h2>Payroll Processing</h2></center>
               <p className='Ptag'>•  View total basic pay & allowancest</p>
                <p className='Ptag'>• Track total deductions & net payable </p>
                <p className='Ptag'>• Access detailed employee payroll record</p>
                <p className='Ptag'>• Monitor monthly payroll information</p>
                <p className="Ptag">• Manage salary, allowance & deduction data</p>
                <p className="Ptag">• Export payroll reports to WPS/Excel</p>
                <p className="Ptag">• Edit payroll details easily</p>
                </div>
            </div>


        </div>
    )
}
export default FeaturesCard;

