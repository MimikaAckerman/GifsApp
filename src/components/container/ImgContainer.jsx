import React from "react";
import UseFetchApi from "../../api/UseFetchApi.";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./containerStyle.css";
// import required modules
import { Grid, Pagination } from "swiper";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImgContainer = () => {
  const { gif } = UseFetchApi();
  /* console.log(gif); */

  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {gif.map((gi) => {
          return (
            <div key={gi.id}>
              <SwiperSlide>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                     
                      <img src={gi.images.fixed_height.url} />
                    
                    </div>
                    <div className="flip-card-back">
                      <p className="title">
                      <Link to={`/GifsDetails/${gi.title}`} style={{ textDecoration: "none", color:'white' }}>
                        <H1title>{gi.title}</H1title>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

const H1title = styled.h1`
  font-size: 1rem;
`;
