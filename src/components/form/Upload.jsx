import React, { useState } from 'react'
import './style/GlobalStyle.css'
import styled from "styled-components";

const Upload = () => {

  const UploadImage = (files) =>{
    console.log(files[0]);
  }


 

  return (
    <>
    <UploadContainer>
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
          <input 
           type="file"
           name='file'
           onChange={(event) => UploadImage(event.target.files)}
           placeholder='Upload Gif🆙'
           style={{color:'transparent',width:130}}   />
          </div>
      </button>
    </UploadContainer>
    </>
  )
}

export default Upload


const UploadContainer = styled.div`
margin-left: 2rem;
position: absolute;
margin-top: 16rem;
`
