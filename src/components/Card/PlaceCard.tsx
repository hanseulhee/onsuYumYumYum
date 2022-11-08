import { css, Theme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "constants/motion";

interface Props {
  id?: number;
  img: string;
  title?: string;
  summary?: string;
}

function PlaceCard({ id, img, title, summary }: Props) {
  return (
    <Link href={`/Detail/${id}`} passHref>
      <article css={wrapper}>
        <motion.div
          css={centerWrapper}
          variants={defaultFadeInUpVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div css={imgWrapper}>
            <Image
              src={img}
              alt="img"
              css={placeImg}
              layout="fill"
              priority
            />
          </div>
          <div css={textWrapper}>
            <span css={subTitle}>{summary}</span>
            <span css={name}>{title}</span>
          </div>
        </motion.div>
      </article>
    </Link>
  );
}

export default PlaceCard;

const wrapper = css`
  position: relative;
  width: auto;
  height: auto;
  margin: 0 auto 0.9rem;
`;

const centerWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const imgWrapper = css`
  position: relative;
  width: 9.8rem;
  height: 12.2rem;
`;

const placeImg = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 9.5rem;
  height: 2.7rem;
  margin-top: 0.3rem;
`;

const subTitle = (theme: Theme) => css`
  color: ${theme.color.grey500};
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.63rem;
  overflow: auto;
`;

const name = (theme: Theme) => css`
  color: ${theme.color.grey900};
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.93rem;
  overflow: auto;
`;
