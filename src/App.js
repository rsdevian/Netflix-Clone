import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner.js";
import Nav from "./Nav.js"

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixoriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies}/>
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaryMovies}/>
    </div>
  );
}

export default App;
