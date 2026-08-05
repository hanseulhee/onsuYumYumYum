export const KAKAO_SDK_URL =
  "https://t1.kakaocdn.net/kakao_js_sdk/2.7.6/kakao.min.js";

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APPKEY;

export function initKakao() {
  if (typeof window === "undefined" || !window.Kakao) return;

  if (!KAKAO_APP_KEY) {
    console.warn(
      "[kakao] NEXT_PUBLIC_KAKAO_APPKEY 가 없어 공유 기능이 비활성화됩니다."
    );
    return;
  }

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_APP_KEY);
  }
}

export function isKakaoShareReady() {
  if (typeof window === "undefined") return false;

  const kakao = window.Kakao;
  return Boolean(
    kakao &&
      typeof kakao.isInitialized === "function" &&
      kakao.isInitialized() &&
      kakao.Share &&
      typeof kakao.Share.sendCustom === "function"
  );
}
