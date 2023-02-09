import React from "react";
const ImagenItem = ({ title, url }) => {
  return (
    <>
      <img src={url} alt={title} style={{ height: 200, width: 150 }} />

      <p>{title}</p>
    </>
  );
};

export default ImagenItem;
