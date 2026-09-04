import React, {useState} from 'react';
import {Link} from "react-router";
import {checkIfImageLoaded} from "~/lib/utils/checkIfImageLoaded";

const SearchedNewsCard = ( { src, title, imageUrl }: {src: string, title: string, imageUrl:string} ) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link to={src} target="_blank">
      <img
        className="aspect-2/1 rounded-xl"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
        src={checkIfImageLoaded(imageLoaded, imageUrl)}
        alt="News image"
        width="200"
        height="100"
        loading="lazy"
      />
      <p className="font-bold text-overflow-3">{title}</p>
    </Link>
  );
};

export default SearchedNewsCard;