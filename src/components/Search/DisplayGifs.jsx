import React from 'react'
import useApiSearch from '../../api/useApiSearch';
import ImagenItem from './ImageItem';
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";


const DisplayGifs = ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TJorcUiLrZOX2MG1OzCq8bYY3TlndVei&q=${category}&limit=25`;


    const { loading, data } = useApiSearch(url);
  return (
    <>
     <div className='container-gifs'>
        
            {
                loading ?
                
                    data.map(img => (
                        
                        <ImagenItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
        </div>
    </>
  )
}

export default DisplayGifs