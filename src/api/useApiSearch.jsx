import React, { useEffect, useState } from 'react'

const useApiSearch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false)

    const fetchApi = () =>{
        fetch(url)
            .then(res => res.json())
            .then(resJson =>{
                setLoading(true);
                setData(resJson.data)
            })
            .catch(error => console.log(error))
    }
    useEffect(() =>{
        fetchApi();
    },[url])
    return{loading,data}
  
}

export default useApiSearch