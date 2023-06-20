import Category from "components/common/Category";
import LinkButton from "components/common/CostEffect/LinkButton";

function CostEffect() {
  return (
    <Category
      categoryId="2"
      categoryName="가성비"
      postImgSrc="/images/costEffectPoster.png"
      subFeature={<LinkButton />}
    />
  );
}

export default CostEffect;
