import {CategoryPageBody} from "~/widgets/category-page-body";
import {
  useNewsByCategoryHealthStore
} from "~/pages/health-category-page/model/store/useNewsByCategoryHealthStore";

const HealthCategoryPage = () => {
  return (
    <CategoryPageBody
      store={useNewsByCategoryHealthStore}
      category={"health"}
    />
  );
};

export default HealthCategoryPage;