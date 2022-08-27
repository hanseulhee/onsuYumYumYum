import { useEffect, useState } from "react";
import { IStore, objectedStores } from "assets/stores/stores";
import { useRouter } from "next/router";

function ShareButton({ linkButtonCss }) {
  const router = useRouter();
  const { slug } = router.query;
  const [currentStore, setCurrentStore] = useState<IStore | null>(null);

  useEffect(() => {
    if (typeof slug !== "string") {
      return;
    }
    if (!objectedStores[slug]) {
      return;
    }
    setCurrentStore(objectedStores[slug]);
  }, [slug, router]);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.onload = () =>
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APPKEY as string);
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  function kakaoShare() {
    window.Kakao.Share.sendCustom({
      templateId: 81806,
      templateArgs: {
        locationImg: `${currentStore?.locationImg}`,
        name: `${currentStore?.name}`,
        storeName: `${currentStore?.name}`,
        storeSummary: `${currentStore?.summary}`,
        url: `/Detail/${currentStore?.name}`,
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
