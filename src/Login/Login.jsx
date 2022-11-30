import axios from  'axios'
import Joi from 'joi';
import React ,{useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function Login({saveUser}) {

  let [user ,setUser]=useState({

   
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


  
}
async function submitfrom(e) {
  e.preventDefault()
let valid=ValidtionData()
  if(valid.error==null){
    setLoading(true)
    let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signin",user)
  console.log(data);
  
  setLoading(false)
  if(data.message == "success"){
  
    navgiate ('../Home')
    localStorage.setItem("token" , data.token)
  
    saveUser()
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

  email:Joi.string().required().email({tlds:{allow:['com' , 'net']}}),
  password:Joi.string().required().pattern( new RegExp( /^[A-Z][a-z]{3,10}$/ ))

})
return scheme.validate(user ,{abortEarly:false})
}

  return (
<>

<h2 className=' text-center h1 pt-5 fw-bold'> login form</h2>


{erroList.length>0 ?erroList.map((el ,id)=> <div className=' alert alert-danger' key={id}>{el.message}</div>)  :''}

{erro == '' ? "" :  <div className=' alert alert-danger '>
{erro}
</div>}


<form onSubmit={submitfrom}>





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
 <button type='submit' className=' btn btn-outline-info my-3'>Login</button>}



</form>

<p className=' text-muted py-5 text-center lead'>In the event that you do not have an account, please go to create a new account (Register)</p>

</>
  )
}
