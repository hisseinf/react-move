import React from 'react'
import ReactLoading from "react-loading";
export default function AppLoader() {
  return (

    <>
    
    <div className='  vh-100 d-flex justify-content-center  align-items-center'>
    
    
      <ReactLoading  type="bars" color="#0000FF"
        height={100} width={150} />
     
    </div>
    </>
  
  )
}

