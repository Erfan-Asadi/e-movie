import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  const searchQueryHandler = (e) => {
    e.preventDefault();
    if(query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Milions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <form className="searchInput" onSubmit={searchQueryHandler}>
            <input type="text" 
                   placeholder='Search for a movie or a tv show...'
                   onChange={(e) => setQuery(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner