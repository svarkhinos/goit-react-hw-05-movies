import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

// import NotFoundView from './components/NotFoundPage/NotFoundPage';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage.js' /*webpackChunkName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage.js' /*webpackChunkName: "MoviesPage"*/
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage.js' /*webpackChunkName: "MovieDetailsPage"*/
  ),
);

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/goit-react-hw-05-movies" element={<HomePage />}></Route>
          <Route path="/movies/" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieID/*"
            element={<MovieDetailsPage />}
          ></Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
