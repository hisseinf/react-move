
import './App.css';
import {createBrowserRouter ,RouterProvider , Navigate  } from "react-router-dom";
import Home from './Home/Home';
import Movise from './Movise/Movise';
import People from './People/People';
import TvShaw from './Tvshaw/TvShaw';
import MasterLayout from './MasterLayout/MasterLayout';
import Foound from './Foound/Foound';
import About from './About/About';
import Login from './Login/Login';
import Register from './Register/Register';
import DetalisMovie from "./DetalisMovie/DetalisMovie";
import TvDetalis from "./TvDetalis/TvDetalis";
import { useState  ,useEffect} from 'react';

import jwt_decode from 'jwt-decode';
import Profile from './Profile/Profile';
import {Offline } from 'react-detect-offline';
import PeopleDetalis from './PeopleDetalis/PeopleDetalis';
import AppLoader from './AppLoder/AppLoader';




function App() {
  
let [user ,setUser]=useState(null)



useEffect( ()=> {

if(localStorage.getItem("token") != null){
  saveUserData()
}


}  ,[])


function saveUserData() {
  let token = localStorage.getItem("token")
  
  let  data=jwt_decode(token)
  setUser(data)
}

function LogOut() {
  localStorage.removeItem("token")
  setUser(null)
  return <Navigate to= '/Login' />

  
}


function PortectedRouter(props) {
  

  if ( localStorage.getItem("token") == null) {
    
    return <Navigate to= '/Login' />

  }
  
  else{
    return props.children
  }
}


let router= createBrowserRouter([
  {path : '/',element:<MasterLayout user={user} LogOut={LogOut}/> , errorElement: <Foound/> ,children:[

    {path:"/" , element:<PortectedRouter><Home/></PortectedRouter>   },
    {path:"Home" , element:<PortectedRouter><Home/></PortectedRouter>     },
    {path:"About" , element:<PortectedRouter><About/></PortectedRouter>  },
    {path:"Movise" , element:<PortectedRouter><Movise/></PortectedRouter>     },
    {path:"Profile" ,element:<PortectedRouter><Profile user={user} /></PortectedRouter>},
    
    {path:"DetalisMovie/:id" , element:<PortectedRouter><DetalisMovie/></PortectedRouter>   },
    {path:'TvDetalis/:id', element:<PortectedRouter><TvDetalis/></PortectedRouter> },
    {path:'PeopleDetalis/:id', element:<PortectedRouter><PeopleDetalis/></PortectedRouter> },
{path:'AppLoader' , element:<AppLoader/>},

    {path:"People" , element:<PortectedRouter><People/></PortectedRouter>   },
    {path:"Tv" , element:<PortectedRouter><TvShaw/></PortectedRouter>    },
    {path:"Login" , element: <Login  saveUser ={ saveUserData}/>},
    {path:"Register" , element: <Register/>},
    {path:"*" , element:<Foound/>},

  



  ]},
  
])

  return (
   <>
    <div>
    <Offline> <div className='Offline alert alert-danger text-center px-2 '> You Are Offline
     <br/> <span className=' text-muted'>Check internet connection</span> 
     <br/> <i className="fa-solid fa-signal fa-2x"></i></div></Offline>
  </div>
<RouterProvider router={router} />
  
   </>
  )
}

export default App;
