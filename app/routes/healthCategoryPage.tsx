import CategoryPage from "~/components/CategoriesPages/CategoryPage";
import {
  useNewsByCategoryHealthStore
} from "~/context/CategoriesStores/useNewsByCategoryHealthStore";

const HealthCategoryPage = () => {
  return (
    <CategoryPage
      store={useNewsByCategoryHealthStore}
      category={"health"}
    />
  );
};

export default HealthCategoryPage;