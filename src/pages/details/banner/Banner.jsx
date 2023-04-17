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
// import PosterFallback from "../../../assets/no-poster.png";
// import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/VideoPopup";

const Banner = ({ video, crew, loading, data }) => {

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor((totalMinutes / 60));
        const minutes = (totalMinutes % 60);
        return `${hours}h:${minutes < 10 ? `0${minutes}` : `${minutes}`}m`
    }
    const { url } = useSelector(state => state.home);

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <div className="backdrop-img">
                            <Img src={url.backdrop + data.backdrop_path} />
                        </div>
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