import type {CategoriesUnions} from "~/config/categoriesList";


export function imageDefinitionByCategory(category: CategoriesUnions) {
  switch (category) {
    case "ai":
      return '/brain.png'
    case "business":
      return '/business.png'
    case "culture":
      return '/culture.png'
    case "entertainment":
      return '/entertainment.png'
    case "health":
      return '/health.png'
  }
}