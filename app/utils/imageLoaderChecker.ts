import React from "react";

export function imageLoaderChecker(article: ArticleStructure, Setter: React.Dispatch<React.SetStateAction<boolean>> ) {
  if(article.image_url) {
    const img = new Image()

    img.src = article.image_url
    img.onload = () => Setter(true)
  }
}