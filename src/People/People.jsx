import axios from 'axios'
import React  , { useEffect ,useState} from 'react'
import x from "../imge/download.jfif"

import { Link } from 'react-router-dom'



export default function People() {


  let [MoviseList ,setMovise] = useState([])

  let pageNumber= new Array(10).fill("y").map((elm ,i)=> i+1)

  useEffect(()=>{
   
    getMovies()
  
  
  
  },[])
  
  



  async function getMovies(page=1) {
 let {data} = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=bf47d093d04dc0ff702061a92c6492d5&language=en-US&page=${page}`)
  
  
    setMovise(data.results)
 
  
  }

  function ChingNumber(index) {
    
    getMovies(index)
  }
  return (
<>
<div className="row gy-4">
{MoviseList.map((elm ,i )=>  <div key={i} className="col-lg-3 col-md-6">
  <Link to={`/PeopleDetalis/`+ elm.id}>
    <div className="itemee   overflow-hidden  position-relative  rounded-3 text-center">
    {elm.profile_path != null?   <img src={ 'https://image.tmdb.org/t/p/w500' + elm.profile_path}  className='w-100 rounded-3' alt="" /> :
        <img src={x}  className="w-100" alt="" />
        }
   <div> <h3 className=' py-3 h6  '> {elm.name}</h3></div>
    <div className=' position-absolute top-0 end-0 colr bg-info p-2 rounded-3'>{elm.popularity.toFixed(1)}</div>
    </div>
    </Link>
  </div>)}
</div>


<div className=' container my-5 d-flex justify-content-center'>

<nav aria-label="...">
  <ul className="pagination pagination-sm">
   {pageNumber.map((El ,i)=> <li key={i} onClick={ ()=>  ChingNumber(El)   } className="page-item "><a className="page-link p-2 px-3" >{El}</a></li>)}
   
    
  </ul>
</nav>
    
</div>
</>
  )
}

