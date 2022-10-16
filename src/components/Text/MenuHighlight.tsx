import { css, Theme } from "@emotion/react";

interface Props {
  deliciousFood: string;
}

function MenuHighlight({ deliciousFood }: Props) {
  return (
    <div css={contentWrapper}>
      <span css={highlightContent}>{deliciousFood}</span>
    </div>
  );
}

export default MenuHighlight;

const contentWrapper = css`
  margin-bottom: 0.18rem;
`;

const highlightContent = (theme: Theme) => css`
  background-color: #fff2ac;
  background-image: linear-gradient(to right, #ffee8e 100%);
  font-weight: ${theme.fontWeight.light};
  font-size: 0.95rem;
`;
