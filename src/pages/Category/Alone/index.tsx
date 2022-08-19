import { css, Theme } from "@emotion/react";
import MenuKeyWord from "components/common/MenuKeyword";
import Image from "next/image";
import storeData from "assets/stores/stores";
import Link from "next/link";
import PlaceCard from "components/Card/PlaceCard";

function Alone() {
  return (
    <div css={fullSizeWrapper}>
      <div css={imgWrapper}>
        <Image
          src="/images/alonePoster.png"
          alt="img"
          width="100%"
          height="48rem"
          layout="responsive"
        />
      </div>
      <div css={keywordMenu}>
        <div css={categoryMenu}>
          {storeData.혼밥.map((store) => (
            <Link href={`/Detail/${store.name}`} key={store.name} passHref>
              <div css={categoryShape}>
                <span css={category}>{store.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MenuKeyWord name="한식" />
      <div css={inWrapper}>
        {storeData.혼밥.map((store) => (
          <PlaceCard
            key={store.name}
            title={store.name}
            summary={store.summary}
            img={store.menuImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Alone;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 3.85rem;
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
  margin-top: 1rem;
`;

const keywordMenu = (theme: Theme) => css`
  width: 100%;
  padding: 0.75rem 0.6rem;
  background-color: ${theme.color.fullWhite};
`;

const categoryMenu = css`
  display: flex;
  flex-direction: row;
  height: 2rem;
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const categoryShape = (theme: Theme) => css`
  border: 1px solid ${theme.color.grey500};
  width: auto;
  height: 1.85rem;
  padding: 0.1rem 0.62rem;
  border-radius: 20px;
  margin: 0 0.13rem;
  cursor: pointer;
`;

const category = (theme: Theme) => css`
  font-size: 0.81rem;
  font-weight: ${theme.fontWeight.light};
`;
