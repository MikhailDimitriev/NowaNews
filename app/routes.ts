import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route('category=ai', './routes/aiCategoryPage.tsx'),
  route('category=business', './routes/businessCategoryPage.tsx'),
  route('category=culture', './routes/cultureCategoryPage.tsx'),
  route('category=entertainment', './routes/entertainmentCategoryPage.tsx'),
  route('category=health', './routes/healthCategoryPage.tsx'),
] satisfies RouteConfig;
