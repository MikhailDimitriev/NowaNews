import {
  useNewsByCategoryAiStore
} from "~/pages/ai-category-page/model/store/useNewsByCategoryAiStore";
import {
  useNewsByCategoryBusinessStore
} from "~/pages/business-category-page/model/store/useNewsByCategoryBusinessStore";
import {
  useNewsByCategoryCultureStore
} from "~/pages/culture-category-page/model/store/useNewsByCategoryCultureStore";
import {
  useNewsByCategoryEntertainmentStore
} from "~/pages/entertainment-category-page/model/store/useNewsByCategoryEntertainmentStore";
import {
  useNewsByCategoryHealthStore
} from "~/pages/health-category-page/model/store/useNewsByCategoryHealthStore";
import type {UseBoundStore} from "zustand/react"
import type {StoreApi} from "zustand/vanilla";
import type {NewsStore} from "~/entities/category-news";
import type {Categories} from "~/entities/article";

interface newsCategoriesStoresArray {
  category: Categories;
  storeName: UseBoundStore<StoreApi<NewsStore>>
}

export const NEWS_CATEGORIES_AND_STORES_LIST: newsCategoriesStoresArray[] = [
  {category: "ai", storeName: useNewsByCategoryAiStore},
  {category: "business", storeName: useNewsByCategoryBusinessStore},
  {category: "culture", storeName: useNewsByCategoryCultureStore},
  {category: "entertainment", storeName: useNewsByCategoryEntertainmentStore},
  {category: "health", storeName: useNewsByCategoryHealthStore},
]