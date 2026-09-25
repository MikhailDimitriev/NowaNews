import type {Categories} from "~/entities/article";
import aiIcon from '/src/shared/assets/icons/brain.png'
import businessIcon from '/src/shared/assets/icons/brain.png'
import cultureIcon from '/src/shared/assets/icons/brain.png'
import entertainmentIcon from '/src/shared/assets/icons/brain.png'
import healthIcon from '/src/shared/assets/icons/brain.png'

export function imageDefinitionByCategory(category: Categories) {
  switch (category) {
    case "ai":
      return aiIcon
    case "business":
      return businessIcon
    case "culture":
      return cultureIcon
    case "entertainment":
      return entertainmentIcon
    case "health":
      return healthIcon
  }
}