import CategoryPage from "~/components/CategoriesPages/CategoryPage";
import {
  useNewsByCategoryAiStore
} from "~/context/CategoriesStores/useNewsByCategoryAiStore";

const AiCategoryPage = () => {

  return (
    <CategoryPage
      store={useNewsByCategoryAiStore}
      category={"ai"}
    />
  );
};

export default AiCategoryPage;