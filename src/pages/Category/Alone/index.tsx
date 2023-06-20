import Banner from "components/common/Banner";
import Category from "components/common/Category";

function Alone() {
  return (
    <Category
      categoryId="4"
      categoryName="혼밥"
      postImgSrc="/images/alonePoster.png"
      bannerImgSrc={<Banner img="/images/banner2.png" link="/Notice/Report" />}
    />
  );
}

export default Alone;
