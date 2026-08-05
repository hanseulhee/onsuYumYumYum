import { MOCK_CREATED_DATE, MOCK_MODIFIED_DATE } from "./common";

type IMenuSeed = [name: string, price: number, description: string | null];

const seeds: Record<number, IMenuSeed[]> = {
  1: [
    ["삼겹살 (200g)", 12000, "국내산 생삼겹살"],
    ["목살 (200g)", 12000, null],
    ["된장찌개", 3000, "고기 주문 시 3,000원"],
    ["볶음밥", 3000, null],
    ["소주", 4000, null],
  ],
  2: [
    ["제육볶음 백반", 8000, "밑반찬 무한 리필"],
    ["김치찌개 백반", 7500, null],
    ["고등어구이 백반", 9000, null],
    ["계란말이", 6000, null],
    ["공기밥", 1000, null],
  ],
  3: [
    ["후라이드 치킨", 16000, null],
    ["양념 치킨", 17000, null],
    ["반반 치킨", 17000, "후라이드 반 양념 반"],
    ["치즈볼", 5000, "5조각"],
    ["생맥주 500cc", 4500, null],
  ],
  4: [
    ["순두부찌개", 8000, "직접 만든 손두부"],
    ["두부전골 (2인)", 20000, null],
    ["콩비지찌개", 8000, null],
    ["모두부", 7000, null],
    ["도토리묵", 9000, null],
  ],
  5: [
    ["짜장면", 6000, null],
    ["짬뽕", 8000, "해장에 좋은 얼큰한 국물"],
    ["탕수육 (소)", 15000, null],
    ["볶음밥", 7500, null],
    ["군만두", 5000, "6개"],
  ],
  6: [
    ["규동", 8500, null],
    ["가츠동", 9000, null],
    ["연어덮밥", 12000, null],
    ["우동", 6500, null],
    ["미니 우동 세트", 3500, "덮밥 주문 시 추가"],
  ],
  7: [
    ["쌀도우 고구마 피자", 15000, "라지 사이즈"],
    ["쌀도우 불고기 피자", 16000, null],
    ["페퍼로니 피자", 14000, null],
    ["감자튀김", 4000, null],
    ["콜라 1.25L", 3200, null],
  ],
  8: [
    ["모둠 사시미", 35000, "2~3인용"],
    ["연어 카르파초", 18000, null],
    ["닭꼬치 모둠", 12000, "5종"],
    ["명란 계란말이", 11000, null],
    ["하이볼", 7000, null],
  ],
  9: [
    ["냉동 삼겹살 (180g)", 9000, null],
    ["항정살 (150g)", 13000, null],
    ["김치찌개", 6000, null],
    ["계란찜", 4000, null],
    ["막국수", 5500, null],
  ],
  10: [
    ["닭불덮밥", 7500, "매콤한 직화 닭불"],
    ["치즈닭불덮밥", 8500, null],
    ["닭불 비빔면", 7000, null],
    ["미니 덮밥", 5500, "1인 소량"],
    ["음료수", 1500, null],
  ],
  11: [
    ["잔치국수", 5500, null],
    ["비빔국수", 6000, null],
    ["칼국수", 7000, null],
    ["손만두", 5000, "8개"],
    ["만둣국", 7500, "해장으로 인기"],
  ],
  12: [
    ["부대찌개 (1인)", 9000, null],
    ["햄사리 추가", 3500, null],
    ["라면사리", 1500, null],
    ["볶음밥", 3000, null],
    ["치즈 추가", 2000, null],
  ],
  13: [
    ["고바우 정식", 11000, "메인 + 반찬 8종"],
    ["불고기 전골", 13000, null],
    ["된장찌개", 8000, null],
    ["돌솥비빔밥", 9500, null],
    ["해물파전", 12000, null],
  ],
  14: [
    ["햄치즈 토스트", 3500, null],
    ["베이컨 에그 토스트", 4500, null],
    ["새우 토스트", 5000, null],
    ["감자 토스트", 4000, null],
    ["아메리카노", 2000, null],
  ],
  15: [
    ["골뱅이 소면", 22000, null],
    ["오돌뼈 볶음", 18000, null],
    ["나초 치즈", 12000, null],
    ["마른안주 모둠", 15000, null],
    ["생맥주 1000cc", 7000, null],
  ],
  16: [
    ["오리 백숙 (2인)", 45000, "예약 권장"],
    ["닭한마리", 28000, null],
    ["삼계탕", 16000, "보양식"],
    ["들깨 수제비", 9000, null],
    ["동동주", 6000, null],
  ],
  17: [
    ["숯불 바베큐 치킨", 18000, null],
    ["간장 치킨", 17000, null],
    ["매운 바베큐 치킨", 18500, null],
    ["치킨 무", 1000, null],
    ["떡사리", 3300, null],
  ],
  18: [
    ["불고기 피자 (L)", 13900, null],
    ["콤비네이션 피자 (L)", 12900, null],
    ["1인 피자", 6900, "혼밥용 미니 사이즈"],
    ["치즈 스틱", 4500, null],
    ["갈릭 디핑소스", 1200, null],
  ],
  19: [
    ["칡냉면", 8000, "쫄깃한 면발"],
    ["비빔냉면", 8500, null],
    ["왕만두", 6000, "4개"],
    ["수육", 18000, null],
    ["온면", 8000, null],
  ],
  20: [
    ["사케동", 13000, null],
    ["텐동", 11000, null],
    ["가케우동", 7000, null],
    ["새우튀김 (3P)", 6500, null],
    ["미소시루", 3200, null],
  ],
  21: [
    ["생목살 (200g)", 13000, null],
    ["갈매기살 (180g)", 14000, null],
    ["학사 정식", 9000, "학생 할인 적용"],
    ["된장찌개", 3500, null],
    ["공기밥", 1000, null],
  ],
  22: [
    ["추어탕", 11000, "속 풀리는 진한 국물"],
    ["추어튀김", 15000, null],
    ["산채비빔밥", 9000, null],
    ["더덕구이", 14000, null],
    ["공기밥", 1500, null],
  ],
};

type IMenuWithRestaurantId = Omit<IGetMenuCostRankContent, "restaurantName">;

function buildMenus() {
  const byRestaurantId: Record<number, IMenuData[]> = {};
  const all: IMenuWithRestaurantId[] = [];
  let menuId = 1;

  Object.keys(seeds)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((restaurantId) => {
      byRestaurantId[restaurantId] = seeds[restaurantId].map(
        ([name, price, description]) => {
          const menu: IMenuData = {
            id: menuId++,
            name,
            price,
            description,
            menuImage: null,
            createdDate: MOCK_CREATED_DATE,
            modifiedDate: MOCK_MODIFIED_DATE,
          };
          return menu;
        }
      );
      all.push(
        ...byRestaurantId[restaurantId].map((menu) => ({
          ...menu,
          description: menu.description ?? "",
          restaurantId,
        }))
      );
    });

  return { byRestaurantId, all };
}

const built = buildMenus();

export const mockMenusByRestaurantId = built.byRestaurantId;

export const mockAllMenus = built.all;
