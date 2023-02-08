import { useEffect, useState } from "react";

const UseFetchApi = () => {

/*     const urlGifs = 'http://localhost:4000/type/'*/
    const API_URL ='https://api.giphy.com/v1/gifs/trending?api_key=TJorcUiLrZOX2MG1OzCq8bYY3TlndVei&limit=25&rating=g'


    const [gif,setGif] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch(API_URL);
                const gif = await response.json()
                setGif(gif.data)
            }catch(error){
                setGif(true);
            }
        }
        fetchData();
    },[API_URL])

  return{
    gif
  }
   
};
export default UseFetchApi;
