import { Theme, css } from "@emotion/react";
import PlaceCard from "components/Card/PlaceCard";
import CategoryStandard from "components/Text/CategoryStandard";
import SectionKeyword from "components/common/SectionKeyword";
import useGetRestaurantByCategory from "hooks/api/useGetRestaurantByCategory";
import useScrollRestoration from "hooks/useScrollRestoration";
import Image from "next/image";
import Link from "next/link";
import Loading from "pages/Loading";

interface IProps {
  categoryId: string | string[] | undefined;
  categoryName: string;
  postImgSrc: string;
  bannerImgSrc?: JSX.Element;
  subFeature?: JSX.Element;
}

function Category({
  categoryId,
  categoryName,
  postImgSrc,
  bannerImgSrc,
  subFeature,
}: IProps) {
  useScrollRestoration();

  const { restaurantCategory, isLoading } = useGetRestaurantByCategory({
    categoryId: categoryId,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div css={fullSizeWrapper}>
      <div css={imgWrapper}>
        <Image
          src={postImgSrc}
          alt="img"
          width="100%"
          height="48rem"
          layout="responsive"
          priority
        />
      </div>
      {subFeature}
      <div css={keywordMenu}>
        <div css={categoryMenu}>
          {restaurantCategory.map((restaurant) => (
            <Link
              href={`/Detail/${restaurant.id}`}
              key={restaurant.name}
              passHref
            >
              <div css={categoryShape}>
                <span css={category}>{restaurant.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SectionKeyword name="전체" />
      <CategoryStandard category={categoryName} />
      {bannerImgSrc && <div css={bannerWrapper}> {bannerImgSrc}</div>}
      <div css={inWrapper}>
        {restaurantCategory.map((restaurant) => (
          <PlaceCard
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.name}
            summary={restaurant.summary}
            img={restaurant.outsideImage.s3Url}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: ${theme.color.fullWhite};
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
`;

const inWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 0.2rem;
`;

const keywordMenu = (theme: Theme) => css`
  width: 100%;
  padding: 0.75rem 0.6rem;
  background-color: ${theme.color.fullWhite};
`;

const categoryMenu = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const categoryShape = (theme: Theme) => css`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.color.grey500};
  width: auto;
  height: 1.5rem;
  padding: 0rem 0.62rem;
  border-radius: 20px;
  margin: 0 0.13rem;
  cursor: pointer;
`;

const category = (theme: Theme) => css`
  font-size: 0.81rem;
  font-weight: ${theme.fontWeight.light};
`;

const bannerWrapper = css`
  position: relative;
  margin: 0.7rem 0 1.35rem 0;
`;
