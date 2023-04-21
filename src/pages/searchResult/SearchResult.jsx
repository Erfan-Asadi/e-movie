
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchApiData } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
// import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const { query } = useParams();

  const getInitialData = () => {
    setLoading(true);
    fetchApiData(`/search/multi?query=${query}&page=${pageNum}`).then(
        (res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        }
    );
};

  useEffect(() => {
    getInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      pageresult...
    </div>
  )
}

export default SearchResult