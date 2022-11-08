import { css, Theme } from "@emotion/react";
import storeData from "assets/stores/stores";
import PlaceCard from "components/Card/PlaceCard";
import Image from "next/image";

function Search({ searchField }) {
  return (
    <div css={wrapper}>
      <div css={textWrapper}>
        <span css={text}>{searchField} 검색 결과</span>
        <Image src="/favicon/logo.png" alt="logo img" width="20%" height="20%" />
      </div>
      <div css={cardWrapper}>
        {storeData.모두
          .filter((item) => {
            if (searchField == "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchField.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, index) => (
            <PlaceCard
              key={index}
              id={item.id}
              title={item.name}
              summary={item.summary}
              img={item.menuImg}
            />
          ))}
      </div>
    </div>
  );
}

export default Search;

const wrapper = css`
  min-height: 100%;
  position: relative;
  width: 100%;
`;

const textWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1.25rem;
`;

const cardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  flex-wrap: wrap;
`;

const text = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1rem;
  margin-right: 0.1rem;
  padding-bottom: 0.16rem;
`;
