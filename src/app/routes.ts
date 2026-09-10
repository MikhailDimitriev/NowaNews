import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("../pages/home.tsx"),
  route('category=ai', '../pages/ai-category-page/ui/AiCategoryPage/AiCategoryPage.tsx'),
  route('category=business', '../pages/business-category-page/ui/BusinessCategoryPage/BusinessCategoryPage.tsx'),
  route('category=culture', '../pages/culture-category-page/ui/CultureCategoryPage/CultureCategoryPage.tsx'),
  route('category=entertainment', '../pages/entertainment-category-page/ui/EntertainmentCategoryPage/EntertainmentCategoryPage.tsx'),
  route('category=health', '../pages/health-category-page/ui/HealthCategoryPage/HealthCategoryPage.tsx'),
] satisfies RouteConfig;
