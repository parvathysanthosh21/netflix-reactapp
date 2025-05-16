import React ,{useState, useEffect} from 'react'
import tmdbAxiosInstance from '../tmbdAxiosInstance';
import './Banner.css'
function Banner({ fetchURL }) {
    const [movie, setmovie] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchURL)
        console.log(data.results[Math.floor(Math.random()*data.results.length)]);
        setmovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    // console.log(movie);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{height:'600px',backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
            
            <div className="banner-content">
                <h1>{movie?.name}</h1>
                <h2>{movie?.overview?.slice(0,200)}</h2>
            </div>
            </div>
    )
}

export default Banner