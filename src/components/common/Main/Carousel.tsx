import { css, Theme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const slides = [
    { name: "slide2", img: "/images/slide2.png", path: "/" },
    { name: "slide3", img: "/images/slide3.png", path: "Review" },
    { name: "slide4", img: "/images/slide4.png", path: "/" },
    { name: "slide5", img: "/images/slide5.png", path: "Notice/Report" },
    { name: "slide6", img: "/images/slide6.png", path: "Category/Ricefull" },
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
            <Link key={slide.name} href={slide.path}>
              <a css={itemWrapper}>
                <Image
                  src={slide.img}
                  alt="img"
                  width="100%"
                  height="47rem"
                  layout="responsive"
                  css={slideImg}
                  priority
                />
                <div css={slideNumber}>
                  <span aria-labelledby="slide-num">
                    <b>{index + 1}</b> /
                    <span css={slideLength}> {slides.length}</span>
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
    width: 100%;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;

const wrapper = css`
  position: relative;
  width: 100%;
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
  right: 1rem;
  width: 2.5rem;
  height: 1.1rem;
  font-size: 0.65rem;
  border-radius: 30px;
  color: ${theme.color.fullWhite};
  background-color: rgb(0, 0, 0, 0.45);
`;

const slideLength = css`
  position: relative;
  color: rgb(255, 255, 255, 0.86);
`;
