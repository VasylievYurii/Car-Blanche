import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import Advertisement from 'pages/Advertisement';

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/advertisement" element={<Advertisement />} />
      <Route path="/advertisement/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default App;
