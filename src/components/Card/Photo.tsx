import { Theme, css } from "@emotion/react";
import Image from "next/image";

interface IProps {
  img: string;
  title: string;
  summary: string;
}

function Photo({ img, title, summary }: IProps) {
  return (
    <div css={wrapper}>
      <div css={imgWrapper}>
        <Image src={img} alt="careImg" layout="fill" />
      </div>
      <div css={contentWrapper}>
        <span css={titleCss}>{title}</span>
        <p css={summaryCss}>{summary}</p>
      </div>
    </div>
  );
}

export default Photo;

const wrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;

  width: 18rem;
  min-height: 19rem;
  height: auto;
  background-color: ${theme.color.grey100};
  margin-bottom: 3rem;
`;

const imgWrapper = css`
  position: relative;
  border-radius: 7px;
  width: 100%;
  height: 10rem;
  object-fit: cover;
  overflow: hidden;
`;

const contentWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.9rem 0.85rem 0 0.85rem;
`;

const titleCss = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
`;

const summaryCss = (theme: Theme) => css`
  color: ${theme.color.grey500};
  font-weight: ${theme.fontWeight.light};
  font-size: 0.9rem;
`;
