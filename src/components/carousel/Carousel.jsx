import React, { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../laziLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";

import './style.scss'
import CircularRating from "../circularRating/CircularRating";


const Carousel = ({ data, loading }) => {
    const carouselWrapper = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const skeletonItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <span className="title skeleton"></span>
                    <span className="date skeleton"></span>
                </div>
            </div>
        )
    }
    const navigation = (dir) => {

    }
    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    onClick={() => navigation('left')}
                    className="carouselLeftNav arrow"
                />
                <BsFillArrowRightCircleFill
                    onClick={() => navigation('right')}
                    className="carouselRightNav arrow"
                />
                {!loading ? (
                    <div className="carouselItems">
                        {data?.map(item => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback; 

                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem">
                                    <div className="posterBlock">
                                        <Img src={posterUrl}/>
                                        <CircularRating rating={item.vote_average.toFixed(1)}/>
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">{item.title || item.name}</span>
                                        <span className="date">{dayjs(item.release_Date).format("MMM D, YYYY")}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                   <div className="loadingSkeleton">
                    {skeletonItem()}
                    {skeletonItem()}
                    {skeletonItem()}
                    {skeletonItem()}
                   </div>
                )}
            </ContentWrapper>
        </div>
    )
}

export default Carousel