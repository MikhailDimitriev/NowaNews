import {
  useNewsByCategoryAiStore
} from "~/context/CategoriesStores/useNewsByCategoryAiStore";
import {
  useNewsByCategoryBusinessStore
} from "~/context/CategoriesStores/useNewsByCategoryBusinessStore";
import {
  useNewsByCategoryCultureStore
} from "~/context/CategoriesStores/useNewsByCategoryCultureStore";
import {
  useNewsByCategoryEntertainmentStore
} from "~/context/CategoriesStores/useNewsByCategoryEntertainmentStore";
import {
  useNewsByCategoryHealthStore
} from "~/context/CategoriesStores/useNewsByCategoryHealthStore";
import type {UseBoundStore} from "zustand/react";
import type {StoreApi} from "zustand/vanilla";
import type {NewsStore} from "~/context/CategoriesStores/types";

export type CategoriesUnions = 'ai' | 'business' | 'culture' | 'entertainment' | 'health'

interface newsCategoriesStoresArray {
  category: CategoriesUnions;
  storeName: UseBoundStore<StoreApi<NewsStore>>
}

export const NEWS_CATEGORIES_AND_STORES_LIST: newsCategoriesStoresArray[] = [
  {category: "ai", storeName: useNewsByCategoryAiStore},
  {category: "business", storeName: useNewsByCategoryBusinessStore},
  {category: "culture", storeName: useNewsByCategoryCultureStore},
  {category: "entertainment", storeName: useNewsByCategoryEntertainmentStore},
  {category: "health", storeName: useNewsByCategoryHealthStore},
]