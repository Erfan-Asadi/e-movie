import React from 'react'
import { useSelector } from 'react-redux';
import './style.scss';

const Genres = ({ data }) => {
    const { genres } = useSelector(state => state.home)

    return (
        <div className='genres'>
            {data?.map(singleId => {
                if(!genres[singleId]?.name) return;
                
                return <span key={singleId} className='genre'>
                    {genres[singleId]?.name}
                </span>
            })}
        </div>
    )
}

export default Genres