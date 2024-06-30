import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey! Let's Build Netflix Front-end Today!!</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixoriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
