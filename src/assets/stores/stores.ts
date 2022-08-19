interface IMenu {
  id: number;
  name: string;
  price: string;
  menuImg: string;
}

export interface IStore {
  name: string;
  summary: string;
  category: string[];
  phone: string;
  location: string;
  time: string[];
  menuImg: string;
  menu: IMenu[];
  locationImg: string;
  thumbnailImg: string;
  reviewLink: string;
}

interface IStoreObject {
  [name: string]: IStore;
}

const stores: IStore[] = [
  {
    name: "토마토",
    summary: "성공회대생 혼밥성지",
    category: ["모두", "혼밥", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556493-f85e80ac-6fbf-4313-9192-9c58d6cb62e0.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-1234-1234",
    location: "서울 구로구 연동로 312",
    time: [
      "월 09:00 ~ 20:00",
      "화 09:00 ~ 20:00",
      "수 09:00 ~ 20:00",
      "목 09:00 ~ 20:00",
      "금 09:00 ~ 20:00",
      "토 09:00 ~ 20:00",
      "일: 정기 휴무 (매주 일요일)",
    ],
    menu: [
      {
        id: 1,
        name: "큐브스테이크 덮밥",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "소불고기덮밥",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "수라한상도시락",
        price: "24000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "모메존 칼국수",
    summary: "칼국수 하나로 유명세를 탄 맛집",
    category: ["모두", "가성비", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556508-68e5ffb2-96c1-48a3-b43d-38228d81abb4.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-1234-1234",
    location: "서울 구로구 경인로 18",
    time: [
      "월 정기 휴무 (매주 월요일)",
      "화 10:30 ~ 20:00",
      "수 10:30 ~ 20:00",
      "목 10:30 ~ 20:00",
      "금 10:30 ~ 20:00",
      "토 10:30 ~ 20:00",
      "일: 정기 휴무 (매주 일요일)",
    ],
    menu: [
      {
        id: 1,
        name: "큐브스테이크 덮밥",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "소불고기덮밥",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "수라한상도시락",
        price: "24000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "피자마루",
    summary: "건강한 맛! 착한 가격!",
    category: ["모두", "가성비", "해장", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556604-01a54e05-7e5e-4e25-a289-2dce78e7cc62.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-2222-2222",
    location: "서울 구로구 경인로 18",
    time: [
      "월 정기 휴무 (매주 월요일)",
      "화 10:30 ~ 20:00",
      "수 10:30 ~ 20:00",
      "목 10:30 ~ 20:00",
      "금 10:30 ~ 20:00",
      "토 10:30 ~ 20:00",
      "일: 정기 휴무 (매주 일요일)",
    ],
    menu: [
      {
        id: 1,
        name: "큐브스테이크 덮밥",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "소불고기덮밥",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "수라한상도시락",
        price: "24000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "중화요리함지박",
    summary: "알 사람들은 안다는 중식 맛집",
    category: ["모두", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556698-9fe0e3b2-03f7-42e1-baa9-2ac6cb055afa.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-3333-3333",
    location: "서울 구로구 경인로 18",
    time: [
      "월 정기 휴무 (매주 월요일)",
      "화 10:30 ~ 20:00",
      "수 10:30 ~ 20:00",
      "목 10:30 ~ 20:00",
      "금 10:30 ~ 20:00",
      "토 10:30 ~ 20:00",
      "일: 정기 휴무 (매주 일요일)",
    ],
    menu: [
      {
        id: 1,
        name: "큐브스테이크 덮밥",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "소불고기덮밥",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "수라한상도시락",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
];

export const objectedStores: IStoreObject = {};

stores.forEach((store) => {
  objectedStores[store.name] = store;
});

interface IObjectedStores {
  [categoryName: string]: IStore[];
}

const objectedStoresByCategory: IObjectedStores = {
  모두: [],
  혼밥: [],
  회식: [],
  해장: [],
  가성비: [],
};

stores.forEach((store) => {
  store.category.forEach((category) => {
    objectedStoresByCategory[category].push(store);
  });
});

export default objectedStoresByCategory;
