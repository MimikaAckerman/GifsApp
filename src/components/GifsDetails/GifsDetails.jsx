import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import UseFetchApi from "../../api/UseFetchApi.";
import cover from "../../assets/img/background.mp4";

export const GifsDetails = () => {
  let { title } = useParams();
  const { gif } = UseFetchApi();

  const gifsDetails = gif.filter((g) => g.title === title);

  return (
    <>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={cover} type="video/mp4" />
      </BackgroundVideo>

      <Icon>
        {/*boton de regreso a la homePage*/}
        <Link to="/">
          <button type="button" className="btn cube cube-hover">
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            <div className="text">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="5em"
                width="5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z"></path>
                </g>
              </svg>
            </div>
          </button>
        </Link>
      </Icon>

      <ContainerGifDetails>
        {gifsDetails.map((details) => (
          <div key={details.id}>
            <Card>
              <CardImg>
                <img
                  src={details.images.fixed_height.url}
                  style={{ height: 350 }}
                />
              </CardImg>
              <H1title>{details.title}</H1title>
            </Card>

            <LikeButton>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="5em"
                width="5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.998,17l4.186-4.186c1.089-1.088,1.089-2.813,0-3.907c-1.094-1.088-2.818-1.088-3.907,0l-0.278,0.279l-0.279-0.279 c-1.088-1.088-2.813-1.088-3.907,0c-1.088,1.094-1.088,2.818,0,3.907L11.998,17z"></path>
                <path d="M21,4c0-0.552-0.447-1-1-1H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4z M19,19H5V5h14V19z"></path>
              </svg>
            </LikeButton>
          </div>
        ))}
      </ContainerGifDetails>
    </>
  );
};

const BackgroundVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 45rem;
`;

const ContainerGifDetails = styled.div`
  position: absolute;
  margin-top: 5rem;
`;

const Icon = styled.div`
  position: absolute;
  margin-top: 3rem;
  margin-left: 2rem;
`;

const Card = styled.div`
  position: absolute;
  width: 40rem;
  height: 30rem;
  margin-left: 17rem;
  margin-top: 3rem;
  background: #fff;
  border: 3px solid #000;
  border-radius: 0;
  box-shadow: 15px 15px 0 -2.5px #fff, 15px 15px 0 0 #000;
`;
const CardImg = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
`;
const H1title = styled.h1`
  font-size: 1.5rem;
  margin-left: 2rem;
`;
const LikeButton = styled.button`
  margin-left: 45.5rem;
  position: absolute;
  margin-top: 10rem;
`;
