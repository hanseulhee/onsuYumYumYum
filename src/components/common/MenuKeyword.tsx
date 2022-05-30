import { css, Theme } from "@emotion/react";

interface Props {
    name: string;
}

function MenuKeyWord({ name }: Props) {
    return (
        <div css={sizeWrapper}>
            <span css={keyword}>{name}</span>
        </div>
    );
}

export default MenuKeyWord;

const sizeWrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0.6rem 0.9rem;
`;

const keyword = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.2rem;
`;