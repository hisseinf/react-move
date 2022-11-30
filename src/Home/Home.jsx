import axios from 'axios'
import { required } from 'joi'
import React ,{useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'

import x from "../imge/download.jfif"

export default function Home() {

  let [MoviseList ,setMovise] = useState([])
let [tvList ,settvList] = useState([])
let [personList ,setpersonList] = useState([])

useEffect(()=>{
 
  getMovies('movie', setMovise)
  getMovies('tv' ,settvList)
  getMovies('person' ,setpersonList)


},[])

async function getMovies(type , callback) {
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=bf47d093d04dc0ff702061a92c6492d5`)


callback(data.results.slice(0,10))


}

  return (
    <>
    
    <div className=' container'>
      
<div className=' row gy-3 align-items-center'>

  <div className="col-lg-4">
    <div className="item">
      <div className='borde w-50'></div>
<h2 className=' my-4'>
  Tranding <br/> Movies<br/>To Watch Now
</h2>
<div className='borde'></div>
    </div>
  </div>

{MoviseList.map(  (el , i )=> <div key={i} className="col-lg-2  col-md-4">


<Link to={`/DetalisMovie/`+el.id }>

<div className="item   position-relative ">
  <img src={ 'https://image.tmdb.org/t/p/w500' + el.poster_path}  className='w-100' alt="" />
  <h3 className=' fw-bold p-1 h6'> {el.title.split(' ').slice(0,2).join(" ")}</h3>
  {/* <p className='text-muted px-1'>{el.overview.split(' ').slice(0,10).join(" ")}</p> */}
  <div className=' position-absolute top-0 end-0 colr p-2'>{el.vote_average.toFixed(2)}</div>
</div>



</Link>




</div>
)}


</div>


   </div>
   
    


   <div className=' container py-5'>
      
      <div className=' row gy-3 align-items-center'>
      
        <div className="col-lg-4 ">
          <div className="item">
            <div className='borde w-50'></div>
      <h2 className=' my-4'>
        Tranding <br/>Tv<br/>To Watch Now
      </h2>
      <div className='borde'></div>
          </div>
        </div>
      
      {tvList.map(  (el , i )=> <div key={i} className="col-lg-2  col-md-4">
      <Link to={`/TvDetalis/`+el.id}>
      <div className="item   position-relative ">
        <img src={ 'https://image.tmdb.org/t/p/w500' + el.poster_path}  className='w-100' alt="" />
        <h3 className=' fw-bold p-1 h6'> {el.name.split(' ').slice(0,3).join(" ")}</h3>
        {/* <p className='text-muted px-1'>{el.overview.split(' ').slice(0,10).join(" ")}</p> */}
        <div className=' position-absolute top-0 end-0 colr p-2'>{el.vote_average.toFixed(2)}</div>
      </div>
      </Link>
      </div>
      )}
      
      
      </div>
      
      
         </div>




         <div className='container  py-5'>
      
      <div className=' row gy-3 align-items-center'>
      
        <div className="col-lg-4">
          <div className="item">
            <div className='borde w-50'></div>
      <h2 className=' my-4'>
        Tranding <br/>person<br/>To Watch Now
      </h2>
      <div className='borde'></div>
          </div>
        </div>
      
      {personList.map(  (el , i )=> <div key={i} className="col-lg-2  col-md-4">
      <Link to={`/PeopleDetalis/`+el.id}>
      <div className="item   position-relative ">

        {el.profile_path != null?   <img src={ 'https://image.tmdb.org/t/p/w500' + el.profile_path}  className='w-100' alt="" /> :
        <img src={x}  className="w-100" alt="" />
        }
      
     
        <h3 className=' fw-bold p-1 h6'> {el.name}</h3>
        <div className=' position-absolute top-0 end-0 colr p-2'>{el.popularity.toFixed(2)}</div>
        
      </div>
      </Link>
      </div>
      )}
      
      
      </div>
      
      
         </div>


        
    </>
  )
}
