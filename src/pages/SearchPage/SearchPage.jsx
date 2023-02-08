import React, { useState } from "react";
import { Link } from "react-router-dom";

import DisplayGifs from "../../components/Search/DisplayGifs";
import Search from "../../components/Search/Search";
import styled, { createGlobalStyle } from "styled-components";
const SearchPage = () => {
  const [category, setCategory] = useState("");

  return (
    <>
       <GlobalStyle />
      <ContainerSearch>
        <Search setCategory={setCategory} />
        <DisplayGifs category={category} />
      </ContainerSearch>

      <Icon>
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
                height="3em"
                width="3em"
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




    </>
  );
};

export default SearchPage;

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #1E213E;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  }
`;

const Icon = styled.div`
  position: absolute;
  margin-top: 3rem;
  margin-left: 2rem;
`;
const BackgroundVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 45rem;
`;
const ContainerSearch = styled.div`
position: absolute;

`