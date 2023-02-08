import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './style/style.css'
const ImagenItem = ({ title, url }) => {
  return (
    <>
      <div className="ContainerResultSearch">
        <div class="flip-card2">
          <div class="flip-card-inner2">
            <div class="flip-card-front2">
              <div className="grid">
                <img
                  src={url}
                  alt={title}
                  style={{ height: 200, width: 150 }}
                />
              </div>
            </div>
            <div class="flip-card-back2">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagenItem;

