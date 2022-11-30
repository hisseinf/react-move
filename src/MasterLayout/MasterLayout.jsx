import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footr from '../Footr/Footr';
export default function MasterLayout({user ,LogOut}) {
  return (
  <>
  
  <Navbar user={user}  LogOut={LogOut}/>
  
  <div className='container w-75 py-5'>
  <Outlet>


    
</Outlet>
  </div>
  <Footr/>
  </>
  )
}
