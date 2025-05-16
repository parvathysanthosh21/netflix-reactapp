import './App.css'
import Banner from './component/Banner'
import Nav from './component/Nav'
import Row from './component/Row'
import requests from './request'
function App() {

  return (
    <>
    <Nav/>
   <Banner fetchURL={requests.fetchNetflixOriginals}/>
     <Row isPoster={true} title="NetFlix Originals" fetchURL={requests.fetchNetflixOriginals}/>
     <Row title="Trending In India" fetchURL={requests.fetchTrending}/>
     <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
     <Row title="Documentries" fetchURL={requests.fetchDocumentaries}/>

    </>
  )
}

export default App
