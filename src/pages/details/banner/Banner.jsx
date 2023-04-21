import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/laziLoadImage/Img";
import { PlayIcon } from '../PlayIcon';
import CircularRating from '../../../components/circularRating/CircularRating';
import PosterFallback from "../../../assets/no-poster.png";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const Banner = ({ video, crew, loading, data }) => {

    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const { url } = useSelector(state => state.home);
    const _genres = data?.genres?.map(g => g.id);
    const director = crew?.filter(i => i.job === 'Director');
    const writer = crew?.filter(i => ['Screenplay', 'Story', 'Writer'].includes(i.job));

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
                                        <div className="row">
                                            <CircularRating rating={data.vote_average.toFixed(1)} />
                                            <div className="playbtn"
                                                onClick={() => { 
                                                    setShow(true);
                                                    setVideoId(video.key)
                                                }}>
                                                <PlayIcon />
                                                <span className="text">Watch Trailer</span>
                                            </div>
                                        </div>
                                        <div className="overview">
                                            <section className="heading">Overview</section>
                                            <p className="description">
                                                {data.overview}
                                            </p>
                                        </div>
                                        <div className="info">
                                            {data.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">Status: </span>
                                                    <div className="text">{data.status}</div>
                                                </div>
                                            )}
                                            {data.release_date && (
                                                <div className="infoItem">
                                                    <span className="text bold">Release Date: </span>
                                                    <div className="text">{dayjs(data.release_date).format("MMM D, YYYY")}</div>
                                                </div>
                                            )}
                                            {data.runtime && (
                                                <div className="infoItem">
                                                    <span className="text bold">Runtime: </span>
                                                    <div className="text">{toHoursAndMinutes(data.runtime)}</div>
                                                </div>
                                            )}
                                        </div>
                                        {director?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">Director(s):</span>
                                                {director.map((d, i) => (
                                                    <span className="text" key={i}>
                                                        {/* add ',' between director names, while reaching last name */}
                                                        {d.name}{i !== director.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {writer?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">Writer(s):</span>
                                                {writer.map((d, i) => (
                                                    <span className="text" key={i}>
                                                        {/* add ',' between director names, while reaching last name */}
                                                        {d.name}{i !== writer.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {data.created_by?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">Creator(s):</span>
                                                {data.created_by.map((d, i) => (
                                                    <span className="text" key={i}>
                                                        {/* add ',' between director names, while reaching last name */}
                                                        {d.name}{i !== data.created_by.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <VideoPopup
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId} />
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