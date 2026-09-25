import type {Categories} from "~/entities/article";

export function imageDefinitionByCategory(category: Categories) {
  switch (category) {
    case "ai":
      return '/src/shared/assets/icons/brain.png'
    case "business":
      return '/src/shared/assets/icons/business.png'
    case "culture":
      return '/src/shared/assets/icons/culture.png'
    case "entertainment":
      return '/src/shared/assets/icons/entertainment.png'
    case "health":
      return '/src/shared/assets/icons/health.png'
  }
}