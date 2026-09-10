import {CategoryPageBody} from "~/widgets/category-page-body";
import {
  useNewsByCategoryCultureStore
} from "~/pages/culture-category-page/model/store/useNewsByCategoryCultureStore";

const CultureCategoryPage = () => {
  return (
    <CategoryPageBody
      store={useNewsByCategoryCultureStore}
      category={"culture"}
    />
  );
};

export default CultureCategoryPage;