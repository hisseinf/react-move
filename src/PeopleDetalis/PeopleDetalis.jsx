import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import x from "../imge/download.jfif"
export default function PeopleDetalis() {

  let {id}= useParams ()


useEffect(()=>{
    getPeople(id)
},[])

const [person, setperson] = useState(null)


async function getPeople(Id) {
   let {data}= await  axios.get(`https://api.themoviedb.org/3/person/${Id}?api_key=bf47d093d04dc0ff702061a92c6492d5&language=en-US`) 

setperson(data)


}


  return (
  <>


   { person !== null ? 
    <div className="row my-5 gx-5">
    <div className="col-lg-4">
        <div className="items  ">
        <img src={ 'https://image.tmdb.org/t/p/w500' + person.profile_path}  className='w-100 border  rounded-4' alt="" />
        </div>
    </div>
    <div className="col-lg-8 ">
<div className="item">
    <h3 className=' text-info fw-bold'> {person.name }</h3>

{person.also_known_as.slice(0,3).map((el ,index)=> <button key={index} className=' alert alert-info mx-1'>{el}</button>)}


<p className='  '>popularity  : {person.popularity}</p>
<p className='  my-4'>gender  :   {person.gender}</p>
<p className='  my-4'>Birthday  :  {person.birthday}</p>
<p className='  my-4'>Place Of Birth  : {person.place_of_birth}</p>
<p className='  my-4'>Deathday :  { person.deathday == null? "Alive":person.deathday}</p>

<p className=' text-muted my-4'>{person.biography.split(' ').slice(0,50).join(" ")}</p>
<a  className=' btn btn-outline-info' target="_blank" href={person.homepage}>You can watch Home Page <br /> <i className="fa-solid fa-circle-play"></i></a>


</div>
    </div>
</div>



:''
}



  </>
  )
}
