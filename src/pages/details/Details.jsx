import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './style.scss'
import Banner from './banner/Banner'
import Cast from './cast/Cast'
import VideosPart from './videosPart/VideosPart'

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
    </div>
  )
}

export default Details