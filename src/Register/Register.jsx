import axios from  'axios'
import Joi from 'joi';
import React ,{useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function Register() {

  let [user ,setUser]=useState({

    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:'',

  })

  let[erro ,setErro]=useState('')
  let[erroList ,setErroList]=useState([])

  let[loading , setLoading]=useState(false)
let navgiate = useNavigate()

function addUser(e) {
let myUser={...user}
myUser[e.target.name]= e.target.value
setUser(myUser)
  console.log(myUser);

  
}
async function submitfrom(e) {
  e.preventDefault()
let valid=ValidtionData()
  if(valid.error==null){
    setLoading(true)
    let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signup",user)
  console.log(data);
  
  setLoading(false)
  if(data.message == "success"){
  
    navgiate ('../Login')
  
    
  }
  else{
   
    setErro(data.message)
  
  }
  }

  else{
    setErroList(valid.error.details)
  }

}


function ValidtionData() {
 let scheme= Joi.object ({
  first_name:Joi.string().required().min(3).max(20).alphanum(),
  last_name:Joi.string().required().min(3).max(20).alphanum(),
  age:Joi.number().required().min(16).max(80),
  email:Joi.string().required().email({tlds:{allow:['com' , 'net']}}),
  password:Joi.string().required().pattern( new RegExp( /^[A-Z][a-z]{3,10}$/ ))

})
return scheme.validate(user ,{abortEarly:false})
}

  return (
<>

<h2 className=' text-center'> Registertion form</h2>


{erroList.length>0 ?erroList.map((el ,id)=> <div className=' alert alert-danger' key={id}>{el.message}</div>)  :''}

{erro == '' ? "" :  <div className=' alert alert-danger '>
{erro}
</div>}


<form onSubmit={submitfrom}>



<div className=' py-2'>
  <label htmlFor="first_name" className='py-2'>first_name</label>
  <input type="text" onChange={addUser} className=' form-control bg-transparent text-white' id='first_name' name='first_name' />

</div>


<div className=' py-2'>
  <label htmlFor="last_name" className='py-2'>last_name</label>
  <input type="text" onChange={addUser} className=' form-control bg-transparent text-white' id='last_name' name='last_name' />
</div>


<div className=' py-2'>
  <label htmlFor="age" className='py-2'>age</label>
  <input type="number" onChange={addUser} className=' form-control bg-transparent text-white' id='age' name='age' />
</div>


<div className=' py-2'>
  <label htmlFor="email" className='py-2'>email</label>
  <input type="email" onChange={addUser} className=' form-control bg-transparent text-white' id='email' name='email' />
</div>

<div className=' py-2'>
  <label htmlFor="password" className='py-2'>password</label>
  <input type="" onChange={addUser} className=' form-control bg-transparent text-white' id='password' name='password' />
</div>


{loading == true ? <button type='button' className=' btn btn-outline-info my-3'>
  <i className='fa-solid fa-spinner fa-spin'></i>
</button> :
 <button type='submit' className=' btn btn-outline-info my-3'> Register</button>}



</form>



</>
  )
}
