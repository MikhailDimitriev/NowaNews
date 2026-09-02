import CategoryPage from "~/components/CategoriesPages/CategoryPage";
import {
  useNewsByCategoryBusinessStore
} from "~/context/CategoriesStores/useNewsByCategoryBusinessStore";

const CategoryBusiness = () => {
  return (
    <CategoryPage
      store={useNewsByCategoryBusinessStore}
      category={"business"}
    />
  );
};

export default CategoryBusiness;