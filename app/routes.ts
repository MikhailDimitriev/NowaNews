import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route('category=ai', './routes/categoryAi.tsx'),
  route('category=business', './routes/categoryBusiness.tsx'),
  route('category=culture', './routes/categoryCulture.tsx'),
  route('category=entertainment', './routes/categoryEntertainment.tsx'),
  route('category=health', './routes/categoryHealth.tsx'),
] satisfies RouteConfig;
