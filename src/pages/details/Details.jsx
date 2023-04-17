import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './style.scss'
import Banner from './banner/Banner'

const Details = () => {
  const { id, mediaType } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  // console.log(data)
  return (
    <div>
      <Banner loading={loading} data={data} />
    </div>
  )
}

export default Details