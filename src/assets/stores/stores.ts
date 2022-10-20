interface IMenu {
  id: number;
  name: string;
  price: string;
  menuImg: string;
}

export interface IStore {
  id: number;
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
    id: 1,
    name: "돈내고돈먹기",
    summary: "착한 가격의 생삼겹살집",
    category: ["모두", "회식", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/158054201-e07c8000-0eb8-4bda-b5be-654cf0121c06.jpg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/191330136-5a821e25-5690-47aa-a192-dc9af72a5aa4.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/158054201-e07c8000-0eb8-4bda-b5be-654cf0121c06.jpg",
    phone: "02-2616-5997",
    location: "서울 구로구 경인로3길 86 승일빌딩",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "생삼겹살 (350g)",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191332736-ce395ae4-78f2-4d56-b6f5-777c525220b6.jpeg",
      },
      {
        id: 2,
        name: "갈매기살 (200g)",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "항정살 (200g)",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "돼지왕갈비",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "돼지껍데기 (200g)",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "차돌박이 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "우삼겹 (200g)",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "진갈비살 (180g)",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "소막창 (200g)",
        price: "17000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "물냉면",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191332590-ca20ff3b-6dfd-4145-9825-9e04a90bdfdb.jpeg",
      },
      {
        id: 11,
        name: "비빔냉면",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187039662-a1a0061c-b392-4810-9bd0-f69acf9f17d6.png",
      },
      {
        id: 12,
        name: "공깃밥",
        price: "1000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191332581-23aecac6-45ab-4491-a7ea-5a267df39dd6.jpeg",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review/carveDondon",
  },
  {
    id: 2,
    name: "토마토",
    summary: "성공회대생 혼밥성지",
    category: ["모두", "혼밥", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187130761-5c3b1d18-a6c4-4284-b2b9-5f5d3433cbcf.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187131076-33090a20-564b-4408-aa44-300b486ac2a4.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2060-0029",
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
          "https://user-images.githubusercontent.com/63100352/187064234-74dda74e-af5e-4f2f-ba93-e83360386ea7.png",
      },
      {
        id: 2,
        name: "제육숙주덮밥",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064236-72a1427c-c11b-4763-ac33-4b05d9b3c6cb.png",
      },
      {
        id: 3,
        name: "수라한상도시락",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187063879-8ed4e66a-ea1c-4e09-a4ca-cf655f83519d.png",
      },
      {
        id: 4,
        name: "닭갈비숙주덮밥",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187063877-bd948f19-9220-45cb-9bfc-0638cc8060e4.png",
      },
      {
        id: 5,
        name: "삼겹매콤마요",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064232-89435e78-c0b7-410b-b725-cff2a258edbd.png",
      },
      {
        id: 6,
        name: "참치마요",
        price: "3200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064177-f8600153-aa94-4f4d-8ecf-406e36296f0d.png",
      },
      {
        id: 7,
        name: "돈까스치킨마요",
        price: "3800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "치킨마요",
        price: "3200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064182-58dd1265-1f6d-4751-a482-7d1305549283.png",
      },
      {
        id: 9,
        name: "쭈삼덮밥",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064175-51faa1ba-3a7d-424d-b934-51e7c2cf4ff6.png",
      },
      {
        id: 10,
        name: "쭈불덮밥",
        price: "6700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "치킨스테이크덮밥",
        price: "5700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064183-2d44e798-eb7d-4fdf-b4fc-7ed3323e83f9.png",
      },
      {
        id: 12,
        name: "큐브텐동덮밥 (돈까스 + 새우)",
        price: "8300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064150-d6883d81-0120-4b3e-954a-5c84a06a25f0.png",
      },
      {
        id: 13,
        name: "진수성찬도시락",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064174-b8c97e98-4bdd-4077-8224-e5d504fb9d74.png",
      },
      {
        id: 14,
        name: "만찬도시락",
        price: "11500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064325-ec8065f1-65f4-4c8a-8b4c-6a812457f3ff.png",
      },
      {
        id: 15,
        name: "한상차림도시락",
        price: "9500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064136-fe1e2485-7aa6-4e61-b2d0-8d9c8c3f6664.png",
      },
      {
        id: 16,
        name: "삼겹매콤와퍼",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064234-74dda74e-af5e-4f2f-ba93-e83360386ea7.png",
      },
      {
        id: 17,
        name: "데리와퍼치킨",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064098-7df56de4-afd0-4b82-bc56-31222e266a02.png",
      },
      {
        id: 18,
        name: "제육와퍼",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064237-a4fc30ca-f678-4e79-a1d6-e58e288b082d.png",
      },
      {
        id: 19,
        name: "김치제육와퍼",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064055-3fdf0ad4-fa47-4ff2-b77d-7b793d01f894.png",
      },
      {
        id: 20,
        name: "데리와퍼참치",
        price: "4200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064054-5ea87378-1d8b-47c0-a80f-d86fa819802e.png",
      },
      {
        id: 21,
        name: "청양마요새우치킨볶음밥",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064053-9cf1d662-ba41-4fdf-9bf4-3e3b2882f1da.png",
      },
      {
        id: 22,
        name: "인기스타도시락",
        price: "7500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064812-b58c8882-0659-4151-81a7-f2b0d411fd35.png",
      },
      {
        id: 23,
        name: "코다리소불도시락",
        price: "8500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064764-5e6d708f-83d9-4a6d-8f52-cadfe651ee55.png",
      },
      {
        id: 24,
        name: "코다리제육도시락",
        price: "7500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064758-a9377ab0-14c9-4d87-8ded-1b3934325ff2.png",
      },
      {
        id: 25,
        name: "콤보도시락",
        price: "4800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064766-d2994b11-b126-4066-8fe6-13882583c9c3.png",
      },
      {
        id: 26,
        name: "소불튀김도시락",
        price: "6200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064810-a07d6684-bcb0-4271-85a6-0764982b6042.png",
      },
      {
        id: 27,
        name: "마늘간장치킨도시락",
        price: "5300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064852-64429107-0e53-4ff9-aa37-8a10b6b02a5a.png",
      },
      {
        id: 28,
        name: "불맛땡초치킨도시락",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064687-92e87092-44be-4579-9a48-eb2887bbf9e5.png",
      },
      {
        id: 29,
        name: "마늘보쌈도시락",
        price: "6900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064672-b0ec2463-52ba-4ba4-8852-44fa6c31ec42.png",
      },
      {
        id: 30,
        name: "떡닭갈비도시락",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064670-862463c4-d2a6-418a-bc34-6204fb6d1b79.png",
      },
      {
        id: 31,
        name: "칠리콤보도시락",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064757-8ee2d9a1-2e81-4ae7-9b53-5154551c1e3d.png",
      },
      {
        id: 32,
        name: "새우콤보도시락",
        price: "5200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064695-a2e94634-5185-4a9b-a8b9-1aa06f713cda.png",
      },
      {
        id: 33,
        name: "소불고기도시락",
        price: "6800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064644-49093102-b8a7-43e0-addd-c2b1b64e923c.png",
      },
      {
        id: 34,
        name: "제육볶음도시락",
        price: "4700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187064641-9857ef79-4047-45d7-bbc8-13e26d865891.png",
      },
      {
        id: 35,
        name: "수제함박정식도시락",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 36,
        name: "유린기볶음밥",
        price: "5700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065180-f2bc759b-935c-4a9c-b219-eb01583442e6.png",
      },
      {
        id: 37,
        name: "사천탕수볶음밥",
        price: "5700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065177-3ae795ed-b1c4-44ef-808f-b3f7dca8cfd8.png",
      },
      {
        id: 38,
        name: "강된장제육비빔밥",
        price: "5800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065181-1de28f92-ad0d-471c-84c3-c77851e25ffb.png",
      },
      {
        id: 39,
        name: "소불고기비빔밥",
        price: "6800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065182-ae352898-61dd-4079-9c2a-8ca3018e0154.png",
      },
      {
        id: 40,
        name: "야채참치비빔밥",
        price: "5300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065337-c2a6a969-d448-4eb7-97c2-59dacec47aa6.png",
      },
      {
        id: 41,
        name: "돈까스커리",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065334-437b67a7-f1bd-4526-9869-60548d491c96.png",
      },
      {
        id: 42,
        name: "치킨커리",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065338-eeba7e9c-56ac-4d25-bf9a-268878db633e.png",
      },
      {
        id: 43,
        name: "김치찌개",
        price: "4700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065331-51b6f02f-630f-4944-8bff-569c38a0a368.png",
      },
      {
        id: 44,
        name: "소고기 육개장",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065351-653523e1-b97e-4ce6-b8d0-76e13442dad0.png",
      },
      {
        id: 45,
        name: "오리지널크리스피치킨",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065336-777b9c2d-6669-4370-8bb4-e79ea00a0b41.png",
      },
      {
        id: 46,
        name: "마늘간장크리스피치킨",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065295-60522980-8fda-4556-938b-69c34a990f18.png",
      },
      {
        id: 47,
        name: "불맛땡초크리스피치킨",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065294-81d35036-af4f-4854-a353-b75b4965cfe8.png",
      },
      {
        id: 48,
        name: "새우치킨샐러드",
        price: "3800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065292-be4b58dc-bce3-41f2-a1f3-54705c9959e5.png",
      },
      {
        id: 49,
        name: "치킨샐러드",
        price: "3800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065290-49be78ee-9260-4fb3-a422-78121adafd20.png",
      },
      {
        id: 50,
        name: "국물떡볶이",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 51,
        name: "로제떡볶이 큐브스테이크",
        price: "6300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065145-453be48c-4069-4fef-a477-2ab94b3d914a.png",
      },
      {
        id: 52,
        name: "로제떡볶이 치킨",
        price: "5200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065144-53fb19a2-15a3-4e2a-b9dc-b103a290aedc.png",
      },
      {
        id: 53,
        name: "로제파스타 큐브스테이크",
        price: "6300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065142-26fcc2e5-6b37-419a-9472-017a3e2d44b3.png",
      },
      {
        id: 54,
        name: "로제파스타 치킨",
        price: "5200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187065140-09a60969-1a63-45ad-849a-8c50acc02c4d.png",
      },
      {
        id: 55,
        name: "짝1호",
        price: "4800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187152673-2571aced-cc0f-46d7-bc88-05c8bf3928fb.png",
      },
      {
        id: 56,
        name: "짝2호",
        price: "5800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187152762-483c65e8-e6d6-45bc-8f8b-fced38e6e809.png",
      },
      {
        id: 57,
        name: "짝3호",
        price: "4800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187152598-e0384a88-d90f-4be2-be94-3bd60159450e.png",
      },
      {
        id: 58,
        name: "짝4호",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187152767-b222eb7b-e2bc-4ff5-87fa-606f60864209.png",
      },
      {
        id: 59,
        name: "짝5호",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187152600-fb6ffe06-7e86-402a-92a4-31c8a84e5462.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review/tomato",
  },
  {
    id: 3,
    name: "착한쌈싸",
    summary: "건강한 쌈밥 정식이 유명한 맛집",
    category: ["모두", "혼밥", "가성비", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156108903-5eb61d94-6dde-41f7-b65a-ea092e9f9553.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156108903-5eb61d94-6dde-41f7-b65a-ea092e9f9553.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "0507-1400-2614",
    location: "서울 구로구 경인로3길 86 승일빌딩",
    time: [
      "월 11:30 ~ 23:00",
      "화 11:30 ~ 23:00",
      "수 11:30 ~ 23:00",
      "목 11:30 ~ 23:00",
      "금 11:30 ~ 23:00",
      "토 17:00 ~ 23:00",
      "일: 17:00 ~ 23:00",
      "점심특선: 11:30 ~ 15:00",
    ],
    menu: [
      {
        id: 1,
        name: "점심특선 제육쌈밥 (3시 이후 15000원)",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "한돈한판 (600g)",
        price: "44000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "한돈반판 (450g)",
        price: "36000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "한돈생삼겹 (540g)",
        price: "47000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "한돈왕구이 (750g)",
        price: "50000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "한우 꽃등심 찌개 세트 (450g)",
        price: "86000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "한우 꽃등심 육회 세트 (450g)",
        price: "99000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "한우 차돌박이 (150g)",
        price: "18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "한우 꽃등심 (150g)",
        price: "26000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "한우생고기 육회 (180g)",
        price: "23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "물, 비빔냉면",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "계란찜",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "된장찌개",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "추억의 도시락",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "잔치국수",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },

  {
    id: 4,
    name: "다원국수",
    summary: "깊은 산속 옹달샘 같은 맛집",
    category: ["모두", "혼밥", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156355733-b10631ea-ed64-468a-b7d7-ae24f31697cd.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156355733-b10631ea-ed64-468a-b7d7-ae24f31697cd.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2060-0090",
    location: "서울 구로구 오류동 108-74",
    time: [
      "월 정기휴무 (매주 월요일)",
      "화 11:00 ~ 19:50",
      "수 11:00 ~ 19:50",
      "목 11:00 ~ 19:50",
      "금 11:00 ~ 19:50",
      "토 11:00 ~ 16:50",
      "일: 11:00 ~ 16:50",
      "브레이크타임: 14:50 ~ 17:00",
    ],
    menu: [
      {
        id: 1,
        name: "초계비빔국수",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "초계국수",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "잔치국수",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "왕만두",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "면곱빼기",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 5,
    name: "친구야호프",
    summary: "친구야 친구야호프?!",
    category: ["모두", "회식", "가성비"],
    menuImg:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMTE5/MDAxNjE5MjY5NTM0MDY0.2ijYtVGpNZdywBwyuWHc5szwIGcUB_YOJxC3PCkUOaMg.3lsw9m2IXu5DSVmWVj8aKq109i4mYgO2P-OJl7Ficz0g.JPEG.dasol3331/1.JPG?type=w800",
    locationImg:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMTE5/MDAxNjE5MjY5NTM0MDY0.2ijYtVGpNZdywBwyuWHc5szwIGcUB_YOJxC3PCkUOaMg.3lsw9m2IXu5DSVmWVj8aKq109i4mYgO2P-OJl7Ficz0g.JPEG.dasol3331/1.JPG?type=w800",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2685-2434",
    location: "서울 구로구 경인로3길 69",
    time: [
      "월 15:00 ~ 24:00",
      "화 15:00 ~ 24:00",
      "수 15:00 ~ 24:00",
      "목 15:00 ~ 24:00",
      "금 15:00 ~ 24:00",
      "토 15:00 ~ 24:00",
      "일: 15:00 ~ 24:00",
      "2, 4째주 일요일 휴무",
    ],
    menu: [
      {
        id: 1,
        name: "치즈계란말이",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "쏘야볶음",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "모듬소시지",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "골뱅이무침",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "두부김치",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "무뼈닭발",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "닭똥집",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "번데기",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "탕수육 & 감자튀김 & 돈까스",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "오징어땅콩",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "한치구이",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "마른안주",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "노가리",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "먹태",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "닭강정 (매운맛 / 순한맛)",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "눈내리는 닭갈비",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "닭볶음탕 + 주먹밥",
        price: "23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "후라이드치킨",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "양념치킨",
        price: "17000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "탕수육",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187067042-7b3da763-16a3-4892-8e52-f9d572ba9093.jpeg",
      },
      {
        id: 21,
        name: "감자튀김",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 22,
        name: "쥐포튀김",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 23,
        name: "치즈스틱",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 24,
        name: "묵사발",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 25,
        name: "해물떡볶이",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 26,
        name: "부대찌개",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 27,
        name: "김치찌개",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 28,
        name: "홍합탕",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 29,
        name: "어묵탕",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 30,
        name: "돈까스",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 31,
        name: "치즈계란찜",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 32,
        name: "김치전",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 33,
        name: "라면",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 34,
        name: "주먹밥",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 35,
        name: "볶음밥",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 36,
        name: "화채",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 37,
        name: "과일",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 38,
        name: "황도",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 39,
        name: "카스 생맥주 500cc",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 40,
        name: "카스 생맥주 2000cc",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 41,
        name: "카스 생맥주 3000cc",
        price: "17000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 6,
    name: "국수나무",
    summary: "성공회대 학식",
    category: ["모두", "가성비", "혼밥"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187131110-fedf2229-8107-4a77-8e02-f7be646ecb24.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187131110-fedf2229-8107-4a77-8e02-f7be646ecb24.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-2615-9962",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
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
        name: "파인애플볶음밥",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "생면국수",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "국수나무우동",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187040310-592eecf7-ed87-426b-bcf0-f57f5fd70ba5.jpeg",
      },
      {
        id: 8,
        name: "새우튀김우동",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187038856-ac57252d-de8b-4c0c-9a02-36327c413881.JPG",
      },
      {
        id: 9,
        name: "베트남소고기쌀국수",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187038879-49452bc1-f91d-4d83-a247-9f186bd4a7f5.JPG",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "소고기덮밥 (규동식)",
        price: "7800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187038926-9cea8210-2bff-4247-a826-ec746b446c54.JPG",
      },
      {
        id: 13,
        name: "고고제육덮밥",
        price: "7500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "순대국",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187450947-2a4c6a96-d15c-458c-8950-47fb10cf70a5.jpeg",
      },
      {
        id: 15,
        name: "얼큰순대국",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "갈비덮밥",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187452899-e7e4d2df-3abb-47a2-9d64-b3cd20678c38.jpeg",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 7,
    name: "바베큐보스치킨",
    summary: "숯불바베큐전문점",
    category: ["모두", "회식", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156121171-b0f3882f-313e-4e77-946e-5601f33e4ed1.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156121171-b0f3882f-313e-4e77-946e-5601f33e4ed1.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2686-9199",
    location: "서울 구로구 온수동 52-1",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "참숯바비큐",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "참숯순살바비큐",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "보스 후라이드 치킨",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "보스 양념 치킨",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "보스 크리스피 치킨",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "보스 땡초 치킨",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "보스 갈릭데리야끼 치킨",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "참숯바비큐날개",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "보스훈제바비큐",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "보스 소시지 바비큐",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "(부채살/목살/닭가슴살) 스테이크",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "(그린/닭가슴살/스테이크) 샐러드",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "보스 플래터",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "각종 사이드메뉴",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 8,
    name: "중화요리함지박",
    summary: "알 사람들은 안다는 중식 맛집",
    category: ["모두", "혼밥", "가성비", "회식"],
    menuImg:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMzBfNjgg/MDAxNTcyMzk4NzQ1MjA3.UQiIyHGUNFwoCh5JwZiOLKdiUUg9kfTcdmUtNXfnGoAg.d9W8CDgnbCJN2TZGAEY-PLYdS7SRzt0e8owKZYNBJgAg.JPEG.ohs526/IMG_7915.jpg?type=w800",
    locationImg:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMzBfNjgg/MDAxNTcyMzk4NzQ1MjA3.UQiIyHGUNFwoCh5JwZiOLKdiUUg9kfTcdmUtNXfnGoAg.d9W8CDgnbCJN2TZGAEY-PLYdS7SRzt0e8owKZYNBJgAg.JPEG.ohs526/IMG_7915.jpg?type=w800",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2616-4155",
    location: "서울 구로구 경인로 22",
    time: [
      "월 정기휴무 (매주 월요일)",
      "화 11:00 ~ 20:30",
      "수 11:00 ~ 20:30",
      "목 11:00 ~ 20:30",
      "금 11:00 ~ 20:30",
      "토 11:00 ~ 20:30",
      "일: 11:00 ~ 20:30",
    ],
    menu: [
      {
        id: 1,
        name: "짜장면",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187067621-efee9b23-d013-496d-9240-a9614b8b9efe.jpeg",
      },
      {
        id: 2,
        name: "짬뽕",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187067622-05f6f7a6-e0de-4503-a7f1-1e5106bfe0dc.jpeg",
      },
      {
        id: 3,
        name: "간짜장",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "쟁반짜장 ~ 순한맛 (1인분)",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "고추쟁반1인분",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187067623-3c5cbce5-8c9f-4c41-a44a-f0e7c2b0116f.jpeg",
      },
      {
        id: 6,
        name: "해물볶음짬뽕1인분",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "삼선짬뽕",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187068048-68dce0ea-111e-4c94-a56f-d9fc7e640450.jpeg",
      },
      {
        id: 8,
        name: "삼선간짜장",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "볶음밥",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "짜장밥",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "짬뽕밥",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "제육덮밥",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "마파밥",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "등심탕수육 (大)",
        price: "30000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "등심탕수육 (中)",
        price: "26000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "등심탕수육 (小)",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "찹쌀탕수육 (大)",
        price: "32000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "찹쌀탕수육 (中)",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "찹쌀탕수육 (小)",
        price: "22000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "고추잡채 (中)",
        price: "33000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 21,
        name: "라조육 (中)",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 22,
        name: "라조기 (中)",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 23,
        name: "깐풍기 (中)",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 24,
        name: "깐풍육 (中)",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 25,
        name: "양장피 (中)",
        price: "30000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 26,
        name: "유산슬 (中)",
        price: "33000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 27,
        name: "팔보채 (中)",
        price: "33000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 28,
        name: "크림새우 (中)",
        price: "33000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 29,
        name: "칠리탕수육 (中)",
        price: "33000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 30,
        name: "군만두",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 31,
        name: "물만두",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 32,
        name: "삼선우동",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 33,
        name: "삼선울면",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 34,
        name: "삼선차돌짬뽕",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 35,
        name: "볶음밥",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 36,
        name: "짬짜면",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 37,
        name: "볶짜면",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 38,
        name: "볶짬면",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 39,
        name: "탕짜면",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 40,
        name: "탕볶밥",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 9,
    name: "썬더치킨",
    summary: "저렴하고 맛있는 치킨집",
    category: ["모두", "회식", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/190892056-a8bef2f8-f5e5-4399-8d68-09c4fd88484d.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/190892008-54922291-c4a6-4b21-a3b0-0c9d3d2aa010.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2616-3319",
    location: "서울 구로구 경인로3길 86 승일빌딩 1층",
    time: ["매일 16:00 - 01:00"],
    menu: [
      {
        id: 1,
        name: "파닭치킨",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "후라이드치킨",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/190897656-435bb09f-df1b-4d96-abb9-b208f804a6ef.jpeg",
      },
      {
        id: 3,
        name: "양념치킨",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "모듬치킨",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "불닭치킨",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "간장치킨",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "마늘치킨",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "먹태구이",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "오징어",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "노가리",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "골뱅이",
        price: "18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "모듬감자",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "생맥주 500cc",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/190897678-d4c68b80-47c8-4a18-a6f9-60c0a62296dc.jpeg",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review/chickenThunder",
  },
  {
    id: 10,
    name: "쎼쎼",
    summary: "진정한 중화요리전문점",
    category: ["모두", "혼밥", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187131244-5c8cc262-bea6-405d-afbc-9c5f5c2b8968.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156108730-c9e88e1f-b15d-457d-b3a1-8f2e7ebead89.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-2615-9962",
    location: "서울특별시 구로구 오류동 108-1",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "홍합짬뽕",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "옛날짜장",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187082394-144977df-00b7-42b9-8da4-c4418b4681a9.jpeg",
      },
      {
        id: 3,
        name: "홍합우동",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "야끼짬뽕",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187082392-9a326bf8-750d-49d5-b4c4-8891a5b82f3d.jpeg",
      },
      {
        id: 5,
        name: "쟁반짜장",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "짬짜면",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "깐풍기",
        price: "23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "잡채",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "양장피",
        price: "28000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "깐쇼새우",
        price: "23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "찹쌀탕수육",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "고량주",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 11,
    name: "153닭불덮밥",
    summary: "한번 맛보면 계속 가는 단골 맛집",
    category: ["모두", "혼밥", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187350311-b241ab95-4a5c-4533-a488-54b2f21dfc64.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187350311-b241ab95-4a5c-4533-a488-54b2f21dfc64.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2617-0153",
    location: "서울 구로구 경인로 23",
    time: ["매일 11:00 ~ 20:00"],
    menu: [
      {
        id: 1,
        name: "153 닭불덮밥",
        price: "8900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185787947-789f9dac-2728-4739-8b2a-0801c14d38fa.jpeg",
      },
      {
        id: 2,
        name: "간장 닭불덮밥",
        price: "8900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191662775-d9d91d09-5e8e-4b2e-8a7f-b37c4446fff0.jpeg",
      },
      {
        id: 3,
        name: "엄청매운 불닭 덮밥",
        price: "8900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "간장 돼지덮밥",
        price: "8900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "고추장 돼지덮밥",
        price: "8900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191662833-4f0872ef-e5dd-484a-b20e-c8e77db340bd.jpeg",
      },
      {
        id: 6,
        name: "153 닭불고기 덮밥 & 찰순대 or 계란찜 & 음료수",
        price: "12900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "간장 닭불고기 덮밥 & 찰순대 or 계란찜 & 음료수",
        price: "12900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187352415-bff87402-4372-411c-b931-22bc7ea1e9ff.jpeg",
      },
      {
        id: 8,
        name: "불닭 불고기 덮밥 & 찰순대 or 계란찜 & 음료수",
        price: "12900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "고추장 돼지불고기 덮밥 & 찰순대 or 계란찜 & 음료수",
        price: "12900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "간장 돼지불고기 덮밥 & 찰순대 or 계란찜 & 음료수",
        price: "12900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "커플 세트 (덮밥 2가지 선택 & 찰순대 or 계란찜 & 음료수)",
        price: "21800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187352599-6dfab0ba-3631-40d3-a864-7c5545eff2ab.jpeg",
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
        name: "계란후라이 추가",
        price: "800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/185787926-6f5fb46e-d051-41cf-82ab-c463ecaf34d0.jpeg",
      },
      {
        id: 14,
        name: "새우토핑",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "날치알토핑",
        price: "1000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "콜라 / 사이다",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "소주 / 맥주",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review/153",
  },
  {
    id: 12,
    name: "맷돌손두부",
    summary: "온수동 순두부 맛집",
    category: ["모두", "혼밥", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/191662250-f18c2bac-629d-42b2-8a97-afc196c883a3.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156108739-80cd382f-ac08-41c5-8b19-64ba640a0dab.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2689-2031",
    location: "서울 구로구 경인로 19 동진빌라",
    time: [
      "월 10:30 ~ 21:00",
      "화 10:30 ~ 21:00",
      "수 10:30 ~ 21:00",
      "목 10:30 ~ 21:00",
      "금 10:30 ~ 21:00",
      "토 10:30 ~ 21:00",
      "일: 정기 휴무 (매주 일요일)",
      "09/09 추석 연휴, 09/10 추석, 09/11 추석 연휴 휴무",
    ],
    menu: [
      {
        id: 1,
        name: "옛날두부찌개전골",
        price: "대 33000원 중 28000원 소 23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "만두 두부 전골",
        price: "대 33000원 중 28000원 소 23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "두부전골",
        price: "대 28000원 중 23000원 소 18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "두부제육",
        price: "22000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "해물순두부",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "김치순두부",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "순두부",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "콩비지",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "청국장",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "두부김치",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "두부구이",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "생두부",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "해물파전",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "된장찌개",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "김치찌개",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 13,
    name: "미스터동",
    summary: "독특함이 묻어나는 중식당",
    category: ["모두", "혼밥", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187130839-851d7bd2-9353-454f-a3e4-8c6611bde693.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187130935-bad3a84b-4254-4998-9c1a-ab9c819d4177.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2687-9872",
    location: "서울 구로구 경인로 31-9 동진빌라",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "짜장면",
        price: "5500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "짬뽕",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "삼선 짬뽕",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "간짜장",
        price: "7500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "삼선 우동",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "삼선 울면",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "기스면",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "매운 쟁반 짜장(2인 이상)",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "군만두 (8개)",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "볶음밥",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "잡채밥",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "해물덮밥",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "유산슬밥",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "능덮밥",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "잡탕밥",
        price: "17000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "매운 볶음밥",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 14,
    name: "오구쌀피자",
    summary: "맛있어서 오구 배불러서 오구",
    category: ["모두", "회식", "가성비"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187130838-5ea3cee0-698c-4d26-929f-5726e3210fd6.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187130838-5ea3cee0-698c-4d26-929f-5726e3210fd6.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2060-5980",
    location: "서울 구로구 연동로 312",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "반미터시그니처",
        price: "27000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "반반피자",
        price: "15900원 ~ 18900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "베이컨듬뿍피자",
        price: "15900원 (L), 12900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "달콤채식단피자",
        price: "15900원 (L), 12900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "로제떡볶이",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "짜장떡볶이",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "순살치킨",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "콤비네이션",
        price: "12900원 (L), 9900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "야채피자",
        price: "11900원 (L), 7900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "치즈피자",
        price: "11900원 (L), 7900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "페퍼로니피자",
        price: "12900원 (L), 9900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "파인애플피자",
        price: "11900원 (L), 7900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "불고기피자",
        price: "13900원 (L), 11900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "단호박피자",
        price: "15900원 (L), 12900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "포테이토피자",
        price: "13900원 (L), 10900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "고구마피자",
        price: "13900원 (L), 10900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "스위트피자",
        price: "14900원 (L), 11900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "핫스파이스피자",
        price: "15900원 (L), 12900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "통새우피자",
        price: "18900원 (L), 14900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "불새피자",
        price: "17900원 (L), 14900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 21,
        name: "허니고르곤피자",
        price: "13900원 (L)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 22,
        name: "육해공피자",
        price: "20900원 (L), 16900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 23,
        name: "베이컨포테이토피자",
        price: "18900원 (L), 14900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 24,
        name: "왕창포테이토피자",
        price: "15900원 (L), 12900원 (R)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 25,
        name: "바이트골드피자",
        price: "19900원 (L)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 26,
        name: "농촌피자",
        price: "18900원 (L)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 27,
        name: "어촌피자",
        price: "20900원 (L)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 28,
        name: "고기농장피자",
        price: "19900원 (L)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 29,
        name: "치즈오븐스파게티",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 30,
        name: "크림스파게티",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 31,
        name: "불고기스파게티",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 32,
        name: "까르보불닭스파게티",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 33,
        name: "오구쌀떡볶이",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 34,
        name: "치킨텐더",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 35,
        name: "새우링",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 36,
        name: "멘보샤 & 양념감자",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 37,
        name: "볶짜면",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 38,
        name: "반미터-콤비네이션피자",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 39,
        name: "반미터-포테이토피자",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 40,
        name: "반미터-페퍼&파인피자",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 15,
    name: "터프네이모",
    summary: "추억 회상하며 술먹기 좋은 포차",
    category: ["모두", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156109078-5226556b-48a0-48b7-8897-36a64bfecadf.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156109078-5226556b-48a0-48b7-8897-36a64bfecadf.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2688-3123",
    location: "서울 구로구 경인로3길 86",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "닭갈비",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "곱창볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "순대볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "오징어볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "낙지볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "번데기",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "불고기",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "삼겹살",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "오삼겹",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "돼지껍데기",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "오돌뼈",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "골뱅이무침",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "참치찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "계란말이",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "계란탕",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "부대찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "모듬전",
        price: "변동",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "닭볶음탕",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "꼼장어구이",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "백불",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 21,
        name: "연두부탕",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 16,
    name: "조마루뼈다귀전문점",
    summary: "고기 가득 얼큰한 해장국 뚝딱",
    category: ["모두", "가성비", "회식", "혼밥"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/191662994-25f5979d-5e62-4947-9135-f72a11b46765.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/157061287-c54a2c14-92fa-4a69-858d-6a56fa81f7d8.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2684-3519",
    location: "서울 구로구 경인로3길 60",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "해장국",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "감자탕",
        price: "35000원(大), 29000원(中), 23000원(小)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191663443-c864099d-bccb-4c1e-b333-4551cc52fa2a.jpeg",
      },
      {
        id: 3,
        name: "해물뼈찜",
        price: "50000원(大), 40000원(中), 30000원(小)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "콩나물찜",
        price: "36000원(大), 30000원(中), 25000원(小)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "공깃밥",
        price: "1000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/191663447-3508f60d-4194-43e4-a834-7f690819969c.jpeg",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review/backbone",
  },
  // {
  //   name: "부어치킨",
  //   summary: "치킨먹고 맥주부어",
  //   category: ["모두", "회식"],
  //   menuImg:
  //     "https://user-images.githubusercontent.com/63100352/192090535-600a17a2-5562-4b9e-9a45-9c511bf5a1f2.jpeg",
  //   locationImg:
  //     "https://user-images.githubusercontent.com/63100352/192090535-600a17a2-5562-4b9e-9a45-9c511bf5a1f2.jpeg",
  //   thumbnailImg:
  //     "https://user-images.githubusercontent.com/63100352/158054201-e07c8000-0eb8-4bda-b5be-654cf0121c06.jpg",
  //   phone: "0507-1352-0078",
  //   location: "서울 구로구 부일로 853",
  //   time: [
  //     "월 13:00 ~ 23:00",
  //     "화 13:00 ~ 23:00",
  //     "수 13:00 ~ 23:00",
  //     "목 13:00 ~ 23:00",
  //     "금 13:00 ~ 23:00",
  //     "토 13:00 ~ 23:00",
  //     "일 정기 휴무 (매주 일요일)",
  //   ],
  //   menu: [
  //     {
  //       id: 1,
  //       name: "크리스피치킨",
  //       price: "16000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 2,
  //       name: "골든부어치킨",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 3,
  //       name: "투개더치킨",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 4,
  //       name: "맛쇼킹치킨",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 5,
  //       name: "양념치킨",
  //       price: "18000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 6,
  //       name: "땡초치킨",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 7,
  //       name: "델리(간장)치킨",
  //       price: "18000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 8,
  //       name: "갈릭치킨",
  //       price: "18000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 9,
  //       name: "파닭치킨",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 10,
  //       name: "어니언치킨",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 11,
  //       name: "부어스트",
  //       price: "19000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/192090873-c80da2ed-f400-4e68-8b9a-f73ff9596dce.jpeg",
  //     },
  //     {
  //       id: 12,
  //       name: "그릴드 통다리",
  //       price: "21000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 13,
  //       name: "그릴드 윙",
  //       price: "20000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 14,
  //       name: "기름떡볶이",
  //       price: "3000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 15,
  //       name: "국물떡볶이",
  //       price: "5500원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 16,
  //       name: "로제떡볶이",
  //       price: "6500원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 17,
  //       name: "소떡소떡",
  //       price: "2500원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 18,
  //       name: "통새우바",
  //       price: "3500원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 19,
  //       name: "오튀봉",
  //       price: "3500원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 20,
  //       name: "치킨너겟 10조각",
  //       price: "4000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 21,
  //       name: "케이준감자",
  //       price: "3500원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 22,
  //       name: "치즈볼 (6개)",
  //       price: "5000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 23,
  //       name: "크림생맥주 500cc",
  //       price: "4000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/192090902-67a1cc52-fdf0-4f98-9fde-76317aea6339.jpeg",
  //     },
  //     {
  //       id: 24,
  //       name: "크림생맥주 1700cc",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 25,
  //       name: "크림생맥주 2700cc",
  //       price: "20000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 26,
  //       name: "해물짬뽕탕",
  //       price: "15000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 27,
  //       name: "해물어묵탕",
  //       price: "15000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 28,
  //       name: "무뼈닭발",
  //       price: "16000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 29,
  //       name: "골뱅이소면",
  //       price: "23000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 30,
  //       name: "황도",
  //       price: "10000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 31,
  //       name: "똥집튀김",
  //       price: "8000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 32,
  //       name: "모듬감자튀김",
  //       price: "8000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 33,
  //       name: "번데기탕",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 34,
  //       name: "먹태",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 35,
  //       name: "마른오징어",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 36,
  //       name: "노가리",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 37,
  //       name: "쥐포",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //     {
  //       id: 38,
  //       name: "한치",
  //       price: "13000원",
  //       menuImg:
  //         "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
  //     },
  //   ],
  //   reviewLink: "https://www.onsuyum.com/Review/bueoChicken",
  // },
  {
    id: 17,
    name: "봉구비어",
    summary: "맛있는 크림맥주",
    category: ["모두", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156108725-edc606d4-d1a9-4bad-a613-fc34031d8465.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156108725-edc606d4-d1a9-4bad-a613-fc34031d8465.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2066-0387",
    location: "서울 구로구 경인로3길 77",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "튀김쥐포",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "봉구노가리",
        price: "10500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "봉구먹태",
        price: "10500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "뻐터오징어구이",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "반건조오징어",
        price: "9500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "라면",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "짜파게티",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "햄야채볶음밥",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "궁물봉떡이",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "봉구오뎅탕",
        price: "6500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 18,
    name: "냉삼집",
    summary: "온수역 냉동 삼겹살 맛집",
    category: ["모두", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156108733-46002def-bd1e-47b2-9e83-db9ed0fb43d2.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156108733-46002def-bd1e-47b2-9e83-db9ed0fb43d2.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "0507-1314-8352",
    location: "서울 구로구 경인로3길 77",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "강릉장칼국수",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "대패삼겹살",
        price: "7900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "냉동삼겹살",
        price: "8900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "마약닭발",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "냉면",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "된장찌개",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "공깃밥",
        price: "1000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 19,
    name: "우가본",
    summary: "고기는 물론 점심특선 맛집!",
    category: ["모두", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/158742511-4f2a7097-3856-4678-ad4d-52761d5bf65e.jpg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/158742511-4f2a7097-3856-4678-ad4d-52761d5bf65e.jpg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2611-9233",
    location: "서울 구로구 온수동 44-10 한일빌딩",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "차돌된장찌개 + 압력돌솥밥 - 점심특선",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "명품 소 한마리 (800g)",
        price: "85000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "명품 소 한마리 + 육회 (1000g)",
        price: "103000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "소 한마리 (800g)",
        price: "65000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "소 한마리 + 육회 (1000g)",
        price: "83000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "한우등심 (360g)",
        price: "85000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "살치살 (180g)",
        price: "38000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "안창살 (180g)",
        price: "30000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "부채살 (180g)",
        price: "18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "갈비살 (180g)",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "차돌박이 (180g)",
        price: "18000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "토시살 (180g)",
        price: "17000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "육회 (200g)",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 21,
        name: "돼지 한마리 (800g)",
        price: "62000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 22,
        name: "돼지 한마리 + 육회 (1000g)",
        price: "80000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 23,
        name: "생삼겹살 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 24,
        name: "목살 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 25,
        name: "슬라이스삼겹 (180g)",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 26,
        name: "항정살 (180g)",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 27,
        name: "가브리살 (180g)",
        price: "19000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 28,
        name: "돼지갈비 (1000g)",
        price: "48000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 29,
        name: "돼지갈비 + 육회 (1200g)",
        price: "66000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 30,
        name: "돼지갈비 (300g)",
        price: "16000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 31,
        name: "막걸리",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 32,
        name: "소주 / 맥주 / 매화수",
        price: "5000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 33,
        name: "클라우드 / 청하",
        price: "6000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 34,
        name: "백세주",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 35,
        name: "복분자",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 36,
        name: "음료수 (콜라/사이다/환타)",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 20,
    name: "의정부부대찌개",
    summary: "육수 맛이 일품, 찌개 맛집!",
    category: ["모두", "회식", "가성비", "해장"],
    menuImg:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190115_174%2F1547540183545AQQRD_JPEG%2Fo6-lFX61nNqkNjA2aOgA-zlZ.jpeg.jpg",
    locationImg:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190115_174%2F1547540183545AQQRD_JPEG%2Fo6-lFX61nNqkNjA2aOgA-zlZ.jpeg.jpg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2618-3685",
    location: "서울 구로구 온수동 52-1",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "부대찌개",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "동태찌개",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "된장찌개",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "쭈삼불고기",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "청국장",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "돼지고기김치찜",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "조기매운탕",
        price: "7500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "갈치조림",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "닭볶음탕",
        price: "23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "닭한마리칼국수",
        price: "23000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "코다리조림",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "순두부찌개",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "제육볶음",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "김치고등어조림",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "불고기전골",
        price: "20000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "삼겹살",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 21,
    name: "꼼사모꼼장어숯불구이",
    summary: "꼼장어를 사랑하는 모임",
    category: ["모두", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/157050486-2728d877-a32e-413c-a84b-e86e1d1a7cd6.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/157050486-2728d877-a32e-413c-a84b-e86e1d1a7cd6.png",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "010-8964-7026",
    location: "서울 구로구 경인로3길 69",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "직화구이삼겹",
        price: "14000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "꼼장어양념구이",
        price: "24000원 (2인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "꼼장어소금구이",
        price: "24000원 (2인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "닭발구이",
        price: "24000원 (2인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "삼겹살",
        price: "14000원 (1인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "왕갈비",
        price: "14000원 (1인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "돼지껍데기",
        price: "16000원 (2인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "돼지막창",
        price: "14000원 (1인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "소막창구이",
        price: "15000원 (1인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "갈비살",
        price: "14000원 (1인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "주물럭",
        price: "15000원 (1인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "쭈꾸미",
        price: "26000원 (2인분)",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "된장찌개",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "잔치국수",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "계란찜",
        price: "2000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 22,
    name: "이삭토스트",
    summary: "가성비 최고! 한 끼 뚝딱!",
    category: ["모두", "가성비", "혼밥"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187130757-3d95294d-c5bc-4052-9f09-217262297dd3.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187130757-3d95294d-c5bc-4052-9f09-217262297dd3.jpeg",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "베이컨 베스트",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "감자",
        price: "3300원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "딥치즈 베이컨",
        price: "3700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "햄치즈 포테이토",
        price: "3500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "허니갈릭 햄치즈",
        price: "3200원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "햄 스페셜",
        price: "3100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "햄치즈",
        price: "2800원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "그릴드 불갈비",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "베이컨 포테이토 피자",
        price: "4700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "트리플 소세지",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "더블 소세지",
        price: "4000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "딥치즈 베이컨 포테이토",
        price: "4400원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "베이컨 치즈 베이글",
        price: "3900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "새우",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "칠리 새우",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "피자",
        price: "4100원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "레드 치킨 토스트",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "크리미 치킨 토스트",
        price: "4500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "콘치즈 토스트",
        price: "3900원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 21,
        name: "그릴드 불고기",
        price: "3700원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 23,
    name: "학사마을",
    summary: "전메뉴 8000원, 가성비 마을",
    category: ["모두", "가성비", "회식"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187145292-4767524f-3198-4fcb-a067-40cd46426ba6.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187145095-64d39b92-de94-4ee2-a77e-847c70dc357c.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2615-3083",
    location: "서울 구로구 경인로3길 86 1층",
    time: ["정보 없음"],
    menu: [
      {
        id: 1,
        name: "곱창전골",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "쭈꾸미",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "낙지볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "오징어볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "곱창볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 6,
        name: "순대볶음",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 7,
        name: "닭갈비",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 8,
        name: "불고기",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 9,
        name: "순두부 찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 10,
        name: "홍합탕",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 11,
        name: "참치김치찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 12,
        name: "부대찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 13,
        name: "골뱅이무침",
        price: "10000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 14,
        name: "돼지김치찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 15,
        name: "참치김치찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 16,
        name: "삼겹살",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 17,
        name: "닭발",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 18,
        name: "닭똥집",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 19,
        name: "오징어불고기",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 20,
        name: "오징어삼겹살",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 21,
        name: "계란찜",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 22,
        name: "계란말이",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 23,
        name: "동태찌개",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 24,
        name: "오뎅탕",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 24,
    name: "이천성모메존칼국수",
    summary: "칼국수 하나로 유명세를 탄 맛집",
    category: ["모두", "회식", "가성비", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156108906-e412fb2b-0101-4d54-8668-bd539437cee1.png",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156108906-e412fb2b-0101-4d54-8668-bd539437cee1.png",
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
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "시원한 해물 수제비",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "담백한 미역 수제비",
        price: "9000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 25,
    name: "섬진강추어탕",
    summary: "섬진강에서 먹는 듯한 시원함!",
    category: ["모두", "혼밥", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/187151632-8ff52cf6-dd5c-41ea-b367-80363a1958c8.jpeg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/187151632-8ff52cf6-dd5c-41ea-b367-80363a1958c8.jpeg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2614-5577",
    location: "서울 구로구 경인로 23 (온수동) 1층 섬진강추어탕",
    time: [
      "월 10:30 ~ 21:00",
      "화 10:30 ~ 21:00",
      "수 10:30 ~ 21:00",
      "목 10:30 ~ 21:00",
      "금 10:30 ~ 21:00",
      "토 10:30 ~ 21:00",
      "일 11:00 ~ 14:30, 15:30 ~ 19:30",
    ],
    menu: [
      {
        id: 1,
        name: "추어탕",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "다슬기추어탕",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "우렁추어탕",
        price: "13000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "추어튀김 중",
        price: "11000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "추어튀김 대",
        price: "15000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
  },
  {
    id: 26,
    name: "본가칡냉면",
    summary: "여름의 더위는 여기서 달래자!",
    category: ["모두", "혼밥", "가성비", "해장"],
    menuImg:
      "https://user-images.githubusercontent.com/63100352/156920608-0ba6a5d5-f971-4d50-b48b-e7241bbca762.jpg",
    locationImg:
      "https://user-images.githubusercontent.com/63100352/156920608-0ba6a5d5-f971-4d50-b48b-e7241bbca762.jpg",
    thumbnailImg:
      "https://user-images.githubusercontent.com/63100352/182155975-6f4f5413-e9a5-4429-8aae-22c38e0c1825.jpeg",
    phone: "02-2615-1331",
    location: "서울 구로구 오류2동 108-75",
    time: [
      "월 11:00 ~ 20:00",
      "화 11:00 ~ 20:00",
      "수 11:00 ~ 20:00",
      "목 11:00 ~ 20:00",
      "금 11:00 ~ 20:00",
      "토 정기 휴무 (매주 토요일)",
      "일 11:00 ~ 20:00",
    ],
    menu: [
      {
        id: 1,
        name: "물냉면",
        price: "8000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 2,
        name: "비빔냉면",
        price: "8500원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 3,
        name: "바지락칼국수",
        price: "7000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 4,
        name: "녹두빈대떡",
        price: "12000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
      {
        id: 5,
        name: "물만두",
        price: "3000원",
        menuImg:
          "https://user-images.githubusercontent.com/63100352/187132555-e062fc82-24c2-4319-a1f9-300e5af936d1.png",
      },
    ],
    reviewLink: "https://www.onsuyum.com/Review",
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
