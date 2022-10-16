import { useRouter } from "next/router";
import useGetRestaurantById from "hooks/api/useGetRestaurantById";

function ShareButton({ linkButtonCss }) {
  const {
    query: { detailId },
  } = useRouter();

  const { restaurant } = useGetRestaurantById({
    detailId,
  });

  function kakaoShare() {
    window.Kakao.Share.sendCustom({
      installTalk: true,
      templateId: 81806,
      templateArgs: {
        locationImg: `${restaurant?.outsideImage.s3Url}`,
        name: `${restaurant?.name}`,
        id: `${restaurant?.id}`,
        storeSummary: `${restaurant?.summary}`,
      },
    });
  }

  return (
    <button onClick={kakaoShare} css={linkButtonCss}>
      공유하기
    </button>
  );
}

export default ShareButton;
