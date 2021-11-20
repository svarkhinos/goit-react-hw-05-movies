import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Cast from './components/Cast/Cast';
// import NotFoundView from './views/NotFoundView';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieID" element={<MovieDetailsPage />}></Route>
        <Route path="/movies/:movieID/cast" element={<Cast />}></Route>
        {/* <Route path="*" element={<HomeView />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
