import {useEffect, useState} from "react";

export const useSingleNews = (imageUrl: string) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()

    img.src = imageUrl
    img.onload = () => setImageLoaded(true)
  }, []);

  return imageLoaded
}