import { useEffect, useState } from "react";
import { IStore, objectedStores } from "assets/stores/stores";
import { useRouter } from "next/router";

function ShareButton({ linkButtonCss }) {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APPKEY);
    }
  });

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

  function kakaoShare() {
    window.Kakao.Share.sendCustom({
      installTalk: true,
      templateId: 81806,
      templateArgs: {
        locationImg: `${currentStore?.locationImg}`,
        name: `${currentStore?.name}`,
        storeName: `${currentStore?.name}`,
        storeSummary: `${currentStore?.summary}`,
        url: `${currentStore?.name}`,
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
