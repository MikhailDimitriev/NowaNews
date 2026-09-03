import {replaceImage} from "~/config/replaceNewsImage";
import type {CSSProperties} from "react";

export const checkIfBackgroundImageLoaded = (imageLoaded: boolean, imageUrl: string): CSSProperties => {

  return (imageLoaded ?
    {backgroundImage: `linear-gradient(rgb(0 0 0 / 0), black 100%), url(${imageUrl ? imageUrl : replaceImage})`} :
    {backgroundImage: `linear-gradient(rgb(0 0 0 / 0), black 100%), url(${replaceImage})`}
  )
}