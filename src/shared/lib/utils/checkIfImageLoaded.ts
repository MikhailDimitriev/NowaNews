import {replaceImage} from "~/shared/constants/replaceNewsImage";

export const checkIfImageLoaded = (imageLoaded: boolean, imageUrl: string) => {
  return imageLoaded ? (imageUrl ? imageUrl : replaceImage) : replaceImage
}