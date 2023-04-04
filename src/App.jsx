import { useEffect } from 'react'
import { fetchApiData } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getApiConfig } from './store/homeSlice';

import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult';
import NotFound from './pages/404/NotFound';
import Explore from './pages/explore/Explore';
import Details from './pages/details/Details';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);


  useEffect(() => {
    fetchTesting()
  }, []);

  const fetchTesting = () => {
    fetchApiData('/movie/popular')
      .then(res => {
        console.log(res)
        dispatch(getApiConfig(res));
      });
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:quary' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
