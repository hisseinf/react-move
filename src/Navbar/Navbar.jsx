import React from 'react'
import { Link ,NavLink } from "react-router-dom";
export default function Navbar(props) {
  let{user ,LogOut}=props
  return (
   <>
   
   <nav className="navbar navbar-expand-lg bg-transparent navBar navbar-dark py-4">
  <div className="container  ">
    <Link className="navbar-brand   pe-5  " to={'/'}><h2 className=' fa-2x fw-bold ps-3'>Noxe</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
     {user != null ? <>  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item px-2">
        <NavLink className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'Home'}>Home</NavLink>
      </li>

     
     
     

      <li className="nav-item px-2">
        <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'Movise'}>Movise</NavLink>
      </li>


      <li className="nav-item px-2">
        <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'Tv'}>TvShaw</NavLink>
      </li>

      <li className="nav-item px-2">
        <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'People'}>People</NavLink>
      </li>

     
{/* 
      <li className="nav-item px-2">
        <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'About'}>About</NavLink>
      </li> */}

   



    </ul> 
    
    
    
    <ul className="navbar-nav  ms-auto  px-5 mb-5 mb-lg-0 " >

    <li className="nav-item px-2   d-flex align-items-center">
    <i className="fa-brands fa-facebook px-2  fa-2x "></i>
    <i className="fa-brands fa-youtube px-2  fa-2x"></i>
    <i className="fa-brands fa-google px-2  fa-2x "></i>
    <i className="fa-brands fa-spotify px-2  fa-2x"></i>
    </li>

    <li className="nav-item px-2 pe-3 ">
     <span  className="nav-link btn btn-outline-info " onClick={LogOut}>Logout</span>
    </li>

    <li className="nav-item px-2">
        <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'Profile'}>Profile</NavLink>
      </li>


    </ul>
    
    
    
    </>:  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

<li className="nav-item px-2  d-flex align-items-center">
<i className="fa-brands fa-facebook px-2  fa-2x "></i>
<i className="fa-brands fa-youtube px-2  fa-2x"></i>
<i className="fa-brands fa-google px-2  fa-2x "></i>
<i className="fa-brands fa-spotify px-2  fa-2x"></i>

 
</li>
<li className="nav-item px-2">
  <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'Login'}>Login</NavLink>
</li>

<li className="nav-item px-2px-2">
  <NavLink  className={({isActive})=> isActive ? "active p-2" : "nav-link"} to={'Register'}>Register</NavLink>
</li>



</ul>}
     
     
     
     
    </div>
  </div>
</nav>
   
   </>
  )
}
