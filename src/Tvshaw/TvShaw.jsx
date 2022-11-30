import axios from 'axios'
import React ,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
export default function TvShaw() {



  let [MoviseList ,setMovise] = useState([])
let pageNumber= new Array(10).fill("y").map((elm ,i)=> i+1)

useEffect(()=>{
 
  getMovies()



},[])

async function getMovies(page=1) {
  let {data} = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=bf47d093d04dc0ff702061a92c6492d5&language=en-US&page=${page}`)


  setMovise(data.results)



}

function ChingNumber(index) {
    
  getMovies(index)
}


  return (
    <>
    
    
    <div className=' container'>
      
      <div className=' row gy-4 align-items-center'>
      
       
      {MoviseList.map(  (el , i )=> <div key={i} className="col-lg-3  col-md-6">
      
      
      <Link to={"/TvDetalis/" +el.id }>
      
      <div className="item   position-relative text-center  rounded-3">
        <img src={ 'https://image.tmdb.org/t/p/w500' + el.poster_path}  className='w-100 rounded-3' alt="" />
        <h3 className=' fw-bold p-1 h6 px-2'> {el.name.split(' ').slice(0,4).join(" ")}</h3>

        {/* {el.overview !== "" ?   <p className='text-muted px-1'>{el.overview.split(' ').slice(0,10).join(" ")}</p> :
      <p className='text-muted px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nulla.</p>}
       */}
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
