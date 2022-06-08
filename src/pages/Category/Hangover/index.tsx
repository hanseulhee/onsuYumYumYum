import { css, Theme } from "@emotion/react";
import Category from "components/common/Alone/Category";
import ListBox from "components/common/Alone/ListBox";
import MenuKeyWord from "components/common/MenuKeyword";
import Image from "next/image";

function Hangover() {
    return (
        <div css={fullSizeWrapper}>
            <div css={imgWrapper}>
                <Image
                    src="/images/hangoverPoster.png"
                    alt="img"
                    width="100%"
                    height="48rem"
                    layout="responsive"
                />
            </div>
            <Category />
            <MenuKeyWord name="한식" />
        </div>
    );
}

export default Hangover;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 3.85rem;
  background-color: ${theme.color.fullWhite};
`;

const imgWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
  background-color: ${theme.color.fullWhite};
`;