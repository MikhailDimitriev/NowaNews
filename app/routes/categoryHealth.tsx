import CategoryPage from "~/components/CategoriesPages/CategoryPage";
import {
  useNewsByCategoryHealthStore
} from "~/context/CategoriesStores/useNewsByCategoryHealthStore";

const CategoryHealth = () => {
  return (
    <CategoryPage
      store={useNewsByCategoryHealthStore}
      category={"health"}
    />
  );
};

export default CategoryHealth;