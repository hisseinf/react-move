import axios from 'axios'
import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'


export default function TvDetalis() {

    let {id}= useParams ()

    let[Tv, setTv]= useState(null)
    
    useEffect( ()=>{
        getDetalistv(id) 
    
    
    },[])
    
    async function getDetalistv(IdDetelis) {

        let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${IdDetelis}?api_key=bf47d093d04dc0ff702061a92c6492d5&language=en-US`)
       
     
        setTv(data)
       
 console.log(data)
     
     
     }    



  return (
    <>

    { Tv !== null ? 
     <div className=' container '>
           <div className="row my-5">
        <div className="col-lg-4">
            <div className="items  ">
            <img src={ 'https://image.tmdb.org/t/p/w500' + Tv.poster_path}  className='w-100 border  rounded-4' alt="" />
            </div>
        </div>
        <div className="col-lg-8 ">
    <div className="item">
        <h3>{Tv.name}</h3>
    
        <p className=' text-muted my-4'>{Tv.tagline}</p>
    {Tv.genres.map(  (el ,i)=> <span key={i} className=' alert alert-danger mx-2 '>{el.name}</span>)}
    
    <p className='  my-4'>Vote : {Tv.vote_average}</p>
    <p className='  my-4'>VoteCount : {Tv.vote_count}</p>
   <p className='  my-4'>number of episodes : {Tv.number_of_episodes}</p>
   <p className='  my-4'>last air date : {Tv.last_air_date}</p>
    
    <p className=' text-muted my-4'>{Tv.overview}</p>
    
  
    <a  className=' btn btn-outline-info' target="_blank" href={Tv.homepage}>You can watch here <br /> <i className="fa-solid fa-circle-play"></i></a> 
    
    </div>
        </div>
    </div>
    
     </div>
    
    
    :''
    }
    
    
      
      </>
  )
}
