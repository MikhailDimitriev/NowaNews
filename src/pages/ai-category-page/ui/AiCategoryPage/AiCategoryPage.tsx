import {
  useNewsByCategoryAiStore
} from "~/pages/ai-category-page/model/store/useNewsByCategoryAiStore";
import {CategoryPageBody} from "~/widgets/category-page-body";


const AiCategoryPage = () => {

  return (
    <CategoryPageBody
      store={useNewsByCategoryAiStore}
      category={"ai"}
    />
  );
};

export default AiCategoryPage;