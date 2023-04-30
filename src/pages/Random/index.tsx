import { css, Theme } from "@emotion/react";
import bubbleItem from "assets/lottieJSON/bubbleItem.json";
import deliveryQuestion from "assets/lottieJSON/deliveryQuestion.json";
import PlaceCard from "components/Card/PlaceCard";
import LottieWrapper from "components/common/LottieWrapper";
import Footer from "components/Footer";
import { defaultFadeInUpVariants } from "constants/motion";
import { motion } from "framer-motion";
import { instance } from "libs/api/api";
import { useState } from "react";

interface IGetRestaurantRandom {
  data: IGetRestaurantDataContent;
}

function Random() {
  const [restaurant, setRestaurant] =
    useState<IGetRestaurantDataContent | null>(null);

  function onClick() {
    const api = async () => {
      const response = await instance.get<{}, IGetRestaurantRandom>(
        "/api/restaurants/random"
      );

      setRestaurant(response.data);
    };
    api();
  }

  return (
    <>
      <div css={fullSizeWrapper}>
        {restaurant ? (
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={bubbleItem} />
          </div>
        ) : (
          ""
        )}

        <div css={itemWrapper}>
          <div css={contentWrapper}>
            <span css={contentTitle}>오늘 뭐 먹지?</span>
            {restaurant ? (
              <span css={contentSubTitle}>
                우와! 오늘은&nbsp;
                <motion.b
                  variants={defaultFadeInUpVariants}
                  initial="initial"
                  whileInView="animate"
                  exit="exit"
                >
                  {restaurant.name}
                </motion.b>
                &nbsp;먹어야겠어요
              </span>
            ) : (
              <span css={contentSubTitle}>
                고민 중이라면 지금 바로 눌러보세요!
              </span>
            )}
          </div>
          {restaurant ? (
            <div css={placeCardWrapper}>
              <PlaceCard
                key={restaurant.id}
                id={restaurant.id}
                title={restaurant.name}
                summary={restaurant.summary}
                img={restaurant.outsideImage.s3Url}
              />
            </div>
          ) : (
            <div css={beforeClickLottieWrapper}>
              <LottieWrapper lottieData={deliveryQuestion} />
            </div>
          )}
          <button css={button} onClick={onClick}>
            Push
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Random;

const fullSizeWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const lottieWrapper = css`
  position: relative;
`;

const beforeClickLottieWrapper = css`
  width: 58%;
`;

const itemWrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  height: auto;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const contentTitle = (theme: Theme) => css`
  font-size: 2.02rem;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.3px;
  opacity: 0.92;
`;

const contentSubTitle = (theme: Theme) => css`
  margin-top: 0.2rem;
  font-size: 1rem;
  font-weight: ${theme.fontWeight.light};
`;

const placeCardWrapper = css`
  margin-top: 2rem;
`;

const button = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;

  margin-top: 2rem;
  padding: 0.15rem 7rem;

  font-weight: ${theme.fontWeight.bold};
  background-color: ${theme.color.yellow};
  border-radius: 5px;

  :hover {
    background-color: rgb(250, 183, 0);
    transition: all 0.45s;
  }
`;
