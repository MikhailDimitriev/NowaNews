import {CategoryPageBody} from "~/widgets/category-page-body";
import {
  useNewsByCategoryEntertainmentStore
} from "~/pages/entertainment-category-page/model/store/useNewsByCategoryEntertainmentStore";

const EntertainmentCategoryPage = () => {
  return (
    <CategoryPageBody
      store={useNewsByCategoryEntertainmentStore}
      category={"entertainment"}
    />
  );
};

export default EntertainmentCategoryPage;