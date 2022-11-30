import React from 'react'
import x from "../imge/download.jfif"
export default function Profile({user}) {
 
  let{first_name, last_name,email ,age}=user
  
  return (
    <>

<div className=' container '>
  <h2 className=' h1 fw-bold text-center '> Wellcom {first_name}</h2>
  <div className="d-flex justify-content-center justify-content-center">
    <div className="item-profil p-5 ">
<img src={x} className="w-100 rounded-circle " alt="" />

<h4 className='text-center py-2'> Name : {first_name} {last_name}</h4>
<h5 className='text-center '> Age : {age}</h5>
<h6 className='text-center text-white '> Email :{email}</h6>


    </div>
  </div>
</div>


    </>
  )
}
