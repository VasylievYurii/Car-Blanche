import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from 'pages/Home';
import Favorites from 'pages/Favorites';
import Advertisement from 'pages/Advertisement';
import { fetchAdverts, fetchFavorites } from 'redux/operations';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/advertisement" element={<Advertisement />} />
      <Route path="/advertisement/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default App;
