import type {Article, Categories} from "~/entities/article";


export interface NewsStore {
  newsList: Article[],
  isNewNewsLoading: boolean,
  newsCount: number,

  newsFetch: (category: Categories) => void

  newsCountIncrement: (category: Categories) => void,
}