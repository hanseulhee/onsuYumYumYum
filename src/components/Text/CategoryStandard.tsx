import { css, Theme } from "@emotion/react";
import Link from "next/link";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

interface Props {
  category: string;
}

function CategoryStandard({ category }: Props) {
  return (
    <Link href="/Category/Standard" passHref>
      <div css={standardWrapper}>
        <span css={standardIcon}>
          <ArrowRightRoundedIcon />
        </span>
        <button css={standardSummary}>{category} 식당의 기준</button>
      </div>
    </Link>
  );
}

export default CategoryStandard;

const standardWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 0.77rem;
  font-weight: ${theme.fontWeight.normal};
  cursor: pointer;
  :hover {
    font-weight: ${theme.fontWeight.bold};
    transition: all 0.3s;
  }
`;

const standardSummary =  css`
  margin-top: 0.25rem;
`

const standardIcon = (theme: Theme) => css`
  display: flex;
  align-items: center;  
  color: ${theme.color.yellow};
`;
