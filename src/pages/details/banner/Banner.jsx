import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/laziLoadImage/Img";
import CircularRating from '../../../components/circularRating/CircularRating';
import PosterFallback from "../../../assets/no-poster.png";
// import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/VideoPopup";

const Banner = ({ video, crew, loading, data }) => {

    const { url } = useSelector(state => state.home);
    const _genres = data?.genres?.map(g => g.id);

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor((totalMinutes / 60));
        const minutes = (totalMinutes % 60);
        return `${hours}h:${minutes < 10 ? `0${minutes}` : `${minutes}`}m`
    }

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <>
                        <div className="backdrop-img">
                            <Img src={url.backdrop + data.backdrop_path} />
                        </div>
                        <div className="opacity-layer"></div>
                        <ContentWrapper>
                            <div className="content">
                                <div className="left">
                                    {data.poster_path ? (
                                        <Img className="posterImg"
                                             src={url.backdrop + data.poster_path} />
                                             ) : (
                                        <Img className="posterImg"
                                             src={PosterFallback} />
                                    )}
                                </div>
                                <div className="right">
                                    <div className="title">
                                        {`${data.name || data.title} (${dayjs(data.release_data).format('YYYY')})`}
                                    </div>
                                    <div className="subtitle">
                                        {data.tagline}
                                    </div>
                                    <Genres data={_genres} />
                                </div>
                            </div>
                        </ContentWrapper>
                        </>
                        
                    )
                    }
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}

        </div>
    );
};

export default Banner;