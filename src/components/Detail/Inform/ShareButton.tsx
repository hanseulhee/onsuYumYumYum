import { useRouter } from "next/router";
import useGetRestaurantById from "hooks/api/useGetRestaurantById";
import { isKakaoShareReady } from "libs/kakao";

function ShareButton({ linkButtonCss }) {
  const {
    query: { detailId },
  } = useRouter();

  const { restaurant } = useGetRestaurantById({
    detailId,
  });

  function toAbsoluteUrl(url: string | undefined) {
    if (!url) return "";
    return url.startsWith("/") ? `${window.location.origin}${url}` : url;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다.");
    } catch {
      alert("공유하기를 사용할 수 없습니다.");
    }
  }

  function kakaoShare() {
    if (!isKakaoShareReady()) {
      copyLink();
      return;
    }

    window.Kakao.Share.sendCustom({
      installTalk: true,
      templateId: 81806,
      templateArgs: {
        locationImg: toAbsoluteUrl(restaurant?.outsideImage.s3Url),
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
