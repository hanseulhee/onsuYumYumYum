import { css, Theme } from "@emotion/react";
import Image from "next/image";
import slide2 from "assets/images/slide2.png";
import slide3 from "assets/images/slide3.png";
import slide4 from "assets/images/slide4.png";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const slides = [
    { img: slide2, path: "/" },
    { img: slide3, path: "Review" },
    { img: slide4, path: "/" },
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
                <Image src={slide.img} alt="img" css={slideImg} />
                <div css={slideNumber}>
                  <span>
                    <b>{index + 1} </b> /{" "}
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

  top: -2em;
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
