import { css, Theme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const slides = [
    { img: "/images/slide2.png", path: "/" },
    { img: "/images/slide3.png", path: "Review" },
    { img: "/images/slide4.png", path: "/" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4100,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div css={wrapper}>
      <Slider {...settings} css={slider}>
        {slides.map((slide, index) => {
          return (
            <Link key={index} href={slide.path}>
              <a css={itemWrapper}>
                <Image
                  src={slide.img}
                  alt="img"
                  width="100%"
                  height="47rem"
                  layout="responsive"
                  css={slideImg}
                />
                <div css={slideNumber}>
                  <span aria-labelledby="slide-num">
                    <b>{index + 1} </b> /
                    <span css={slideLength}>{slides.length}</span>
                  </span>
                </div>
              </a>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;

const slider = css`
  .slick-list {
    width: 100vw;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;

const wrapper = css`
  position: relative;
  width: 100vw;
  height: auto;
  padding: 20px 0;
  top: 0;
  z-index: 0;
`;

const slideImg = css`
  position: relative;
  object-fit: cover;
  width: auto;
  height: auto;
`;

const itemWrapper = css`
  position: relative;
`;

const slideNumber = (theme: Theme) => css`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  bottom: 0.6rem;
  right: 2.7em;
  width: 12.8em;
  height: 5.3em;

  border-radius: 30px;
  color: ${theme.color.fullWhite};
  font-size: 0.19rem;

  background-color: rgb(0, 0, 0, 0.45);
`;

const slideLength = css`
  color: rgb(255, 255, 255, 0.86);
`;
