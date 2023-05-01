import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  link: string;
}

function Banner({ img, link }: Props) {
  return (
    <Link href={link} passHref>
      <div css={wrapper}>
        <Image src={img} alt="Banner Img" layout="fill" />
      </div>
    </Link>
  );
}

export default Banner;

const wrapper = css`
  position: relative;
  width: 100%;
  height: 6.23rem;
  object-fit: cover;
`;
