import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SearchGif = () => {
  return (
    <>
    <ContainerSearch>
      <Link to={`/SearchPage`} style={{ textDecoration: "none" }}>
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
  <div className="text">Search Gif ...🔎</div>
</button>
</Link>
</ContainerSearch>
    </>
  )
}

export default SearchGif

const ContainerSearch = styled.div`
margin-left: 65rem;
margin-top: 2rem;
`