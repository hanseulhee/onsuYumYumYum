import { MOCK_CREATED_DATE, MOCK_MODIFIED_DATE } from "./common";

type IBabfulSeed = [
  menuDate: string,
  foods: string[],
  deliciousFood: string
];

const seeds: IBabfulSeed[] = [
  [
    "2024-07-01 (월)",
    ["쌀밥", "돈까스", "우동국물", "양배추 샐러드", "깍두기"],
    "돈까스",
  ],
  [
    "2024-07-02 (화)",
    ["잡곡밥", "제육볶음", "된장국", "콩나물무침", "배추김치"],
    "제육볶음",
  ],
  [
    "2024-07-03 (수)",
    ["쌀밥", "닭갈비", "미역국", "감자조림", "배추김치"],
    "닭갈비",
  ],
  [
    "2024-07-04 (목)",
    ["짜장밥", "군만두", "계란국", "단무지", "배추김치"],
    "짜장밥",
  ],
  [
    "2024-07-05 (금)",
    ["쌀밥", "생선까스", "김치찌개", "숙주나물", "깍두기"],
    "김치찌개",
  ],
  [
    "2024-06-24 (월)",
    ["쌀밥", "불고기", "청국장", "시금치나물", "배추김치"],
    "불고기",
  ],
  [
    "2024-06-25 (화)",
    ["카레라이스", "치킨너겟", "미소된장국", "피클", "배추김치"],
    "카레라이스",
  ],
  [
    "2024-06-26 (수)",
    ["쌀밥", "고등어구이", "북엇국", "무생채", "깍두기"],
    "고등어구이",
  ],
  [
    "2024-06-27 (목)",
    ["비빔밥", "만둣국", "야채튀김", "간장", "배추김치"],
    "비빔밥",
  ],
  [
    "2024-06-28 (금)",
    ["쌀밥", "탕수육", "짬뽕국물", "브로콜리 무침", "단무지"],
    "탕수육",
  ],
];

export const mockBabfuls: IGetBabfulsMenuDataContent[] = seeds.map(
  ([menuDate, foods, deliciousFood], index) => ({
    id: index + 1,
    menuDate,
    foods,
    deliciousFood,
    createdDate: MOCK_CREATED_DATE,
    modifiedDate: MOCK_MODIFIED_DATE,
  })
);
