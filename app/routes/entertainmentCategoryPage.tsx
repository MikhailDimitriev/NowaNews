import CategoryPage from "~/components/CategoriesPages/CategoryPage";
import {
  useNewsByCategoryEntertainmentStore
} from "~/context/CategoriesStores/useNewsByCategoryEntertainmentStore";

const EntertainmentCategoryPage = () => {
  return (
    <CategoryPage
      store={useNewsByCategoryEntertainmentStore}
      category={"entertainment"}
    />
  );
};

export default EntertainmentCategoryPage;