import replaceImage from "~/shared/assets/icons/imageNotLoaded.png"

export const checkIfImageLoaded = (imageLoaded: boolean, imageUrl: string) => {
  return imageLoaded ? (imageUrl ? imageUrl : replaceImage) : replaceImage
}