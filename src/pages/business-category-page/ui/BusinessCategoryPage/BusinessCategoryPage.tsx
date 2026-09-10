import {CategoryPageBody} from "~/widgets/category-page-body";
import {
  useNewsByCategoryBusinessStore
} from "~/pages/business-category-page/model/store/useNewsByCategoryBusinessStore";

const BusinessCategoryPage = () => {
  return (
    <CategoryPageBody
      store={useNewsByCategoryBusinessStore}
      category={"business"}
    />
  );
};

export default BusinessCategoryPage;