import Banner from "components/common/Banner";
import Category from "components/common/Category";

function Dining() {
  return (
    <Category
      categoryId="1"
      categoryName="회식"
      postImgSrc="/images/diningPoster.png"
      bannerImgSrc={<Banner img="/images/banner1.png" link="/Random" />}
    />
  );
}

export default Dining;
