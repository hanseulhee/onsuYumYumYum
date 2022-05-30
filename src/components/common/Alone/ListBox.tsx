import { css, Theme } from "@emotion/react";
import Card from "components/Card";

interface Props {
    category: string;
}

function ListBox({ category }: Props) {
    return (
        <div css={boxWrapper}>
            <div css={cardWrapper}>
                <Card title="식당이름" summary="주메뉴" img="/images/slide4.png" />
            </div>
        </div>
    );
}

export default ListBox;

const cardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  padding: 1.3rem 0;
`;

const boxWrapper = (theme: Theme) => css`
  background-color: ${theme.color.fullWhite};
`;