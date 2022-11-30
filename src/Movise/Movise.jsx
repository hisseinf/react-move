import axios from 'axios'
import React ,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Movise() {


 
  let [MoviseList ,setMovise] = useState([])
  const [CurrntCategry, setCurrntCategry] = useState("popular")

let pageNumber= new Array(10).fill("y").map((elm ,i)=> i+1)


  useEffect(()=>{
 
    getMovies()
  

  
  },[])


  async function getMovies(page=1 , type= "popular") {
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=bf47d093d04dc0ff702061a92c6492d5&language=en-US&page=${page}`)
  
  
    setMovise(data.results)
  
  
  
  }


  function ChingNumber(index) {
  
    getMovies(index, CurrntCategry)
  }

  function changeType(e) {
    let type= e.target.id;
    setCurrntCategry(type)
    console.log(type);
    getMovies(1,type)
  }
  
  return (
    <>
  
    <div className=' container'>
      
      <div className=' row gy-3 align-items-center'>
      
      <ul className=' text-center'>
  <button id='popular' onClick={changeType} type="button" className="btn btn-outline-primary mx-2">Popular</button>
  <button id='top_rated' onClick={changeType}  type="button" className="btn btn-outline-danger">Top Rated</button>
  <button id='now_playing' onClick={changeType}  type="button" className="btn btn-outline-info mx-2">Now Playing</button>
  </ul>
      {MoviseList.map(  (el , i )=> <div key={i} className="col-lg-3  col-md-6">
      
      
      <Link to={"/DetalisMovie/" +el.id }>
      
      <div className="item   position-relative  rounded-3">
        <img src={ 'https://image.tmdb.org/t/p/w500' + el.poster_path}  className='w-100 rounded-3' alt="" />
        <h3 className=' fw-bold p-1 h6 px-2'> {el.title}</h3>
       
        <div className=' position-absolute top-0 end-0 colr p-2 rounded-3'>{el.vote_average.toFixed(2)}</div>
      </div>
      
      
      
      </Link>
      
      
      
      
      </div>
      )}
      
      
      </div>
      
      
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
