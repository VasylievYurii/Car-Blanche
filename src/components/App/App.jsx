import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import Advertisement from 'pages/Advertisement';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts, getIsLoading, getError } from 'redux/selectors';
import { fetchAdverts } from 'redux/operations';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const adverts = useSelector(getAdverts);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAdverts());
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
