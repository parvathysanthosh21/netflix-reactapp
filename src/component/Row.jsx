import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmbdAxiosInstance';
import './Row.css'
function Row({title,fetchURL,isPoster}) {
  // console.log(fetchURL);
   const [allMovies,setAllMovies] = useState()
 const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData =async()=>{
    const {data} = await tmdbAxiosInstance.get(fetchURL)
    // console.log(data.results);
    setAllMovies(data.results)
  }
  // console.log(allMovies);
  
  useEffect(()=>{
    fetchData()  
  },[])

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movie_row">
        {
          allMovies?.map(item =>(
            <img className={`movie ${isPoster && 'movie-poster'}`}src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="no image"/>
          ))
        }
      </div>
    </div>
  )
}

export default Row