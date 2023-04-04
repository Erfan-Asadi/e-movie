import { useEffect } from 'react'
import { fetchApiData } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getApiConfig } from './store/homeSlice';

function App() {
  const dispatch = useDispatch();

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
    <div className="App">
      App
    </div>
  )
}

export default App
