import CategoryPage from "~/components/CategoriesPages/CategoryPage";
import {
  useNewsByCategoryCultureStore
} from "~/context/CategoriesStores/useNewsByCategoryCultureStore";

const CategoryCulture = () => {
  return (
    <CategoryPage
      store={useNewsByCategoryCultureStore}
      category={"culture"}
    />
  );
};

export default CategoryCulture;