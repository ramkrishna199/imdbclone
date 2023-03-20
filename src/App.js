import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./component/movieList/MovieList";
import Movie from "./pages/movieDetail/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
     <Route index element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="movies/:type" element={<MovieList />}/>
 <Route path="*" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
