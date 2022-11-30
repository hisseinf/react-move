import axios from 'axios'
import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'

export default function DetalisMovie() {

let {id}= useParams ()

let[movie, setMovie]= useState(null)

useEffect( ()=>{
    getDetalistv(id) 
    

},[])


async function getDetalistv(movieId) {

   let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bf47d093d04dc0ff702061a92c6492d5&language=en-US`)
  

   setMovie(data)



}


  return (
  <>
 
{ movie !== null ? 
    <div className="row my-5">
    <div className="col-lg-4">
        <div className="items  ">
        <img src={ 'https://image.tmdb.org/t/p/w500' + movie.poster_path}  className='w-100 border  rounded-4' alt="" />
        </div>
    </div>
    <div className="col-lg-8 my-5">
<div className="item">
    <h3> {movie.title }</h3>

    <p className=' text-muted my-4'>{movie.tagline}</p>
{movie.genres.map(  (el ,i)=> <span key={i} className=' alert alert-danger mx-2 '>{el.name}</span>)}

<p className='  my-4'>Vote : {movie.vote_average}</p>
<p className='  my-4'>VoteCount : {movie.vote_count}</p>
<p className='  my-4'>budget : {movie.budget}</p>
<p className=' text-muted my-4'>{movie.overview}</p>
<a  className=' btn btn-outline-info' target="_blank" href={movie.homepage}>You can watch here <br /> <i className="fa-solid fa-circle-play"></i></a>


</div>
    </div>
</div>



:''
}


  
  </>
  )
}
