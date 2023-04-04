import { useEffect } from 'react'
import { fetchApiData } from './utils/api';

function App() {
  useEffect(() => {
    fetchTesting()
  }, []);

  const fetchTesting = () => {
    fetchApiData('/movie/popular')
      .then(res => console.log(res));
  }

  return (
    <div className="App">
      App
    </div>
  )
}

export default App
