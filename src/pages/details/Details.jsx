import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './style.scss'
import Banner from './banner/Banner'
import Cast from './cast/Cast'
import VideosPart from './videosPart/VideosPart'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'
 
const Details = () => {
  const { id, mediaType } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: videos, loading: loadingVideos } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <Banner loading={loading} data={data} crew={credits?.crew} video={videos?.results?.[0]} />
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosPart data={videos} loading={loadingVideos}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>

    </div>
  )
}

export default Details