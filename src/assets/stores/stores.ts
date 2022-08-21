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
    name: "돈내고 돈먹기",
    summary: "고기",
    category: ["모두", "회식", "가성비"],
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
        name: "생삼겹살",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "갈매기살",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "항정살",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 4,
        name: "돼지왕갈비",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 5,
        name: "돼지껍데기",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 6,
        name: "차돌박이",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 7,
        name: "소금구이",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 8,
        name: "갈매기",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 9,
        name: "소갈비살",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 10,
        name: "소막창",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 11,
        name: "삼겹살",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 12,
        name: "물냉면",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 13,
        name: "비빔냉면",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 14,
        name: "공기밥",
        price: "1000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
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
    name: "국수나무 성공회대점",
    summary: "성공회대 학식",
    category: ["모두", "가성비", "혼밥"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556698-9fe0e3b2-03f7-42e1-baa9-2ac6cb055afa.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "2615-9962",
    location:
      "서울 구로구 연동로 320 (항동, 성공회대학교) 새천년관 1층(eco 카페)",
    time: ["매일 11:00 ~ 19:00 (18:30 라스트오더)"],
    menu: [
      {
        id: 1,
        name: "국물떡볶이",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728702-bd2853f0-3d72-4412-9e06-2082ecb4b584.jpeg",
      },
      {
        id: 2,
        name: "옛날왕돈까스",
        price: "8400원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728681-507580a4-7645-459d-b8bd-c17cbf312dab.jpeg",
      },
      {
        id: 3,
        name: "치즈돈까스",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 4,
        name: "로제돈까스",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728683-bbc12def-5583-46fb-9ba6-431798c30e76.jpeg",
      },
      {
        id: 5,
        name: "아쿠아돈까스",
        price: "9500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 6,
        name: "생면국수",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728704-3f25ccbf-37a6-4261-872b-55c886083942.jpeg",
      },
      {
        id: 7,
        name: "국수나무우동",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 8,
        name: "새우튀김우동",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 9,
        name: "베트남소고기쌀국수",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 10,
        name: "냉국수",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728798-37f9ddba-48e0-400c-b7f4-d9334dc29774.jpeg",
      },
      {
        id: 11,
        name: "소고기낙지덮밥",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 12,
        name: "소고기덮밥 (규동식)",
        price: "7800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 13,
        name: "고고제육덮밥",
        price: "7500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "이삭토스트 성공회대점",
    summary: "이삭토스트",
    category: ["모두", "가성비", "혼밥"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556698-9fe0e3b2-03f7-42e1-baa9-2ac6cb055afa.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2686-5408",
    location: "서울 구로구 경인로 18",
    time: [
      "월 10:00 ~ 22:00",
      "화 10:00 ~ 22:00",
      "수 10:00 ~ 22:00",
      "목 10:00 ~ 22:00",
      "금 10:00 ~ 22:00",
      "토 10:00 ~ 21:00",
      "일 10:00 ~ 21:00",
    ],
    menu: [
      {
        id: 1,
        name: "핫치킨 MVP",
        price: "3900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "베이컨 베스트",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "감자",
        price: "3300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 4,
        name: "딥치즈 베이컨",
        price: "3700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 5,
        name: "햄치즈 포테이토",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 6,
        name: "허니갈릭 햄치즈",
        price: "3200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 7,
        name: "햄 스페셜",
        price: "3100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 8,
        name: "햄치즈",
        price: "2800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 9,
        name: "그릴드 불갈비",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 10,
        name: "베이컨 포테이토 피자",
        price: "4700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 11,
        name: "트리플 소세지",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 12,
        name: "더블 소세지",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 13,
        name: "딥치즈 베이컨 포테이토",
        price: "4400원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 14,
        name: "베이컨 치즈 베이글",
        price: "3900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 15,
        name: "새우",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 16,
        name: "칠리 새우",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 17,
        name: "피자",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 18,
        name: "레드 치킨 토스트",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 19,
        name: "크리미 치킨 토스트",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 20,
        name: "콘치즈 토스트",
        price: "3900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 21,
        name: "그릴드 불고기",
        price: "3700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "153 닭불덮밥",
    summary: "153",
    category: ["모두", "혼밥", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556698-9fe0e3b2-03f7-42e1-baa9-2ac6cb055afa.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2617-0153",
    location: "서울 구로구 경인로 23",
    time: ["매일 11:00 ~ 20:00"],
    menu: [
      {
        id: 1,
        name: "153 닭불고기덮밥",
        price: "7900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185787947-789f9dac-2728-4739-8b2a-0801c14d38fa.jpeg",
      },
      {
        id: 2,
        name: "간장 닭불고기덮밥",
        price: "7900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185787969-8563995c-9211-4a7b-ac55-31d0f0e76fd3.jpeg",
      },
      {
        id: 3,
        name: "불닭 불고기덮밥",
        price: "7900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 4,
        name: "간장 돼지불고기덮밥",
        price: "7900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 5,
        name: "고추장 돼지불고기덮밥",
        price: "7900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 6,
        name: "153 닭불고기 덮밥 & 찰순대 & 음료수",
        price: "11900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 7,
        name: "간장 닭불고기 덮밥 & 찰순대 & 음료수",
        price: "11900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185787850-1a9b0e58-b016-4f1b-845e-2b78232dd9f0.jpeg ",
      },
      {
        id: 8,
        name: "불닭 불고기 덮밥 & 찰순대 & 음료수",
        price: "11900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 9,
        name: "고추장 돼지불고기 덮밥 & 찰순대 & 음료수",
        price: "11900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 10,
        name: "간장 돼지불고기 덮밥 & 찰순대 & 음료수",
        price: "11900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 11,
        name: "커플 세트 (덮밥 2가지 선택 & 찰순대 & 음료수)",
        price: "19900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 12,
        name: "찰순대",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185788039-914624ee-1da2-4d36-b6ee-3976d3f36ca8.jpeg",
      },
      {
        id: 13,
        name: "닭불고기",
        price: "2 ~ 3인분: 12900원, 3 ~ 4인분: 14900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 14,
        name: "닭불고기",
        price: "2 ~ 3인분: 12900원, 3 ~ 4인분: 14900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 15,
        name: "계란후라이 추가",
        price: "500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185787926-6f5fb46e-d051-41cf-82ab-c463ecaf34d0.jpeg",
      },
      {
        id: 16,
        name: "고기 추가",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 17,
        name: "콜라 / 사이다",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 18,
        name: "소주 / 맥주",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "이천성모메존칼국수",
    summary: "칼국수, 만두",
    category: ["모두", "회식", "가성비", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556698-9fe0e3b2-03f7-42e1-baa9-2ac6cb055afa.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2625-4821",
    location: "서울 구로구 경인로 18",
    time: [
      "월 정기 휴무 (매주 월요일)",
      "화 11:00 ~ 20:00",
      "수 11:00 ~ 20:00",
      "목 11:00 ~ 20:00",
      "금 11:00 ~ 20:00",
      "토 11:00 ~ 20:00",
      "일 11:00 ~ 20:00",
    ],
    menu: [
      {
        id: 1,
        name: "해물 손 칼국수",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185729012-132bf8c9-0944-4b6c-ab22-9398e8f0f74d.jpeg",
      },
      {
        id: 2,
        name: "얼큰한 짬뽕 수제비",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553734-df02f6b6-2f1c-4811-9003-fe5ca37aff65.jpeg",
      },
      {
        id: 3,
        name: "시원한 해물 수제비",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 4,
        name: "담백한 미역 수제비",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
    ],
    reviewLink: "http://localhost:3000/Review/dondon",
  },
  {
    name: "우가본",
    summary: "우가우가",
    category: ["모두", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/185556698-9fe0e3b2-03f7-42e1-baa9-2ac6cb055afa.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "2615-9962",
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
        name: "불고기정식 + 압력돌솥밥 - 점심특선",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553700-c20b2e22-c581-4dee-8272-3a1b9979845b.jpeg",
      },
      {
        id: 2,
        name: "돼지김치두루치기 + 압력돌솥밥 - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728433-b84dbd67-8398-4866-b655-3c3a4d9d1664.jpeg",
      },
      {
        id: 3,
        name: "우렁된장찌개 + 압력돌솥밥 - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 4,
        name: "차돌된장찌개 + 압력돌솥밥 - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 5,
        name: "육회비빔밥(공깃밥) - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728427-24bf0648-82d8-444c-bd08-af5a4f4d8b32.jpeg",
      },
      {
        id: 6,
        name: "소머리국밥(공깃밥) - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 7,
        name: "냉면 (물냉면/비빔냉면) - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185728432-6b8e7b56-6679-474c-8206-88eea021e85a.jpeg",
      },
      {
        id: 8,
        name: "압력돌솥밥 - 점심특선",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 9,
        name: "명품 소 한마리 (800g)",
        price: "85000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 10,
        name: "명품 소 한마리 + 육회 (1000g)",
        price: "103000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 11,
        name: "소 한마리 (800g)",
        price: "65000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 12,
        name: "소 한마리 + 육회 (1000g)",
        price: "83000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 13,
        name: "한우등심 (360g)",
        price: "85000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 14,
        name: "살치살 (180g)",
        price: "38000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 15,
        name: "안창살 (180g)",
        price: "30000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 16,
        name: "부채살 (180g)",
        price: "18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 17,
        name: "갈비살 (180g)",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 18,
        name: "차돌박이 (180g)",
        price: "18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 19,
        name: "토시살 (180g)",
        price: "17000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 20,
        name: "육회 (200g)",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 21,
        name: "돼지 한마리 (800g)",
        price: "62000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 22,
        name: "돼지 한마리 + 육회 (1000g)",
        price: "80000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 23,
        name: "생삼겹살 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 24,
        name: "목살 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 25,
        name: "슬라이스삼겹 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 26,
        name: "항정살 (180g)",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 27,
        name: "가브리살 (180g)",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 28,
        name: "돼지갈비 (1000g)",
        price: "48000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 29,
        name: "돼지갈비 + 육회 (1200g)",
        price: "66000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 30,
        name: "돼지갈비 (300g)",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 31,
        name: "막걸리",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 32,
        name: "소주 / 맥주 / 매화수",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 33,
        name: "클라우드 / 청하",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 34,
        name: "백세주",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 35,
        name: "복분자",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185553975-77b04405-6406-4dfd-a519-d3b58120396b.jpeg",
      },
      {
        id: 36,
        name: "음료수 (콜라/사이다/환타)",
        price: "2000원",
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
