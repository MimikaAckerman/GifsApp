import React from "react";
import useApiSearch from "../../api/useApiSearch";
import ImagenItem from "./ImageItem";

import "./style/style.css";

const DisplayGifs = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=TJorcUiLrZOX2MG1OzCq8bYY3TlndVei&q=${category}&limit=25`;

  const { loading, data } = useApiSearch(url);
  return (
    <>
      <div className="parent">
        {loading
          ? data.map((img) => (
              <ImagenItem
                key={img.id}
                title={img.title}
                url={img.images.downsized_medium.url}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default DisplayGifs;
