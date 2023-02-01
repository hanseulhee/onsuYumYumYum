import { css, Theme } from "@emotion/react";

export const underline = (theme: Theme) => css`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.color.yellow};
  }
`;
