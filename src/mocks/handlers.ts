import { mockBabfuls } from "./data/babfuls";
import { MOCK_TIMESTAMP } from "./data/common";
import { mockAllMenus, mockMenusByRestaurantId } from "./data/menus";
import {
  mockRestaurantIdsByCategory,
  mockRestaurants,
} from "./data/restaurants";

const DEFAULT_PAGE_SIZE = 12;

interface IMockResponse {
  status: number;
  body: unknown;
}

function envelope<T>(data: T) {
  return {
    timestamp: MOCK_TIMESTAMP,
    status: 200,
    statusDetail: "OK",
    code: "SUCCESS",
    message: "요청에 성공했습니다. (mock)",
    data,
  };
}

function sort(): ISort {
  return { empty: true, unsorted: true, sorted: false };
}

function pageable(page: number, size: number): IPage {
  return {
    sort: sort(),
    offset: page * size,
    pageNumber: page,
    pageSize: size,
    paged: true,
    unpaged: false,
  };
}

function paginate<T>(items: T[], page: number, size: number) {
  const content = items.slice(page * size, page * size + size);
  const totalPages = Math.max(1, Math.ceil(items.length / size));

  return {
    content,
    pageable: pageable(page, size),
    totalPage: totalPages,
    totalPages,
    totalElements: items.length,
    last: page >= totalPages - 1,
    number: page,
    sort: sort(),
    size,
    numberOfElements: content.length,
    first: page === 0,
    empty: content.length === 0,
  };
}

function toNumber(value: string | null, fallback: number) {
  const parsed = Number(value);
  return value !== null && Number.isFinite(parsed) ? parsed : fallback;
}

function findRestaurant(id: number) {
  return mockRestaurants.find((restaurant) => restaurant.id === id);
}

function notFound(message: string): IMockResponse {
  return {
    status: 404,
    body: {
      timestamp: MOCK_TIMESTAMP,
      status: 404,
      statusDetail: "NOT_FOUND",
      code: "NOT_FOUND",
      message,
      data: null,
    },
  };
}

function parseUrl(rawUrl: string) {
  const [rawPath, rawQuery = ""] = rawUrl.trim().split("?");
  const path = `/${rawPath.trim().replace(/^\/+/, "").replace(/\/+$/, "")}`;
  const query = new URLSearchParams(rawQuery.trim());

  return { path, query };
}

export function resolveMock(rawUrl: string): IMockResponse | null {
  const { path, query } = parseUrl(rawUrl);

  if (path === "/api/babfuls") {
    const page = toNumber(query.get("page"), 0);
    const size = toNumber(query.get("size"), mockBabfuls.length);
    return { status: 200, body: envelope(paginate(mockBabfuls, page, size)) };
  }

  if (path === "/api/restaurants/random") {
    const random =
      mockRestaurants[Math.floor(Math.random() * mockRestaurants.length)];
    return { status: 200, body: envelope(random) };
  }

  if (path === "/api/restaurants/menus") {
    const minPrice = toNumber(query.get("price"), 0);
    const size = toNumber(query.get("size"), DEFAULT_PAGE_SIZE);
    const page = toNumber(query.get("page"), 0);

    const menus = mockAllMenus
      .filter((menu) => menu.price >= minPrice)
      .sort((a, b) => a.price - b.price || a.id - b.id)
      .map((menu) => ({
        ...menu,
        restaurantName: findRestaurant(menu.restaurantId)?.name ?? "",
      }));

    return { status: 200, body: envelope(paginate(menus, page, size)) };
  }

  const menusMatch = path.match(/^\/api\/restaurants\/(\d+)\/menus$/);
  if (menusMatch) {
    const restaurantId = Number(menusMatch[1]);
    if (!findRestaurant(restaurantId)) {
      return notFound("존재하지 않는 식당입니다.");
    }
    return {
      status: 200,
      body: envelope(mockMenusByRestaurantId[restaurantId] ?? []),
    };
  }

  const restaurantMatch = path.match(/^\/api\/restaurants\/(\d+)$/);
  if (restaurantMatch) {
    const restaurant = findRestaurant(Number(restaurantMatch[1]));
    if (!restaurant) {
      return notFound("존재하지 않는 식당입니다.");
    }
    return { status: 200, body: envelope(restaurant) };
  }

  if (path === "/api/restaurants") {
    const keyword = query.get("keyword")?.trim() ?? "";
    const page = toNumber(query.get("page"), 0);
    const size = toNumber(query.get("size"), DEFAULT_PAGE_SIZE);

    const filtered = keyword
      ? mockRestaurants.filter(
          (restaurant) =>
            restaurant.name.includes(keyword) ||
            restaurant.summary.includes(keyword)
        )
      : mockRestaurants;

    return {
      status: 200,
      body: envelope(
        keyword
          ? paginate(filtered, 0, Math.max(filtered.length, 1))
          : paginate(filtered, page, size)
      ),
    };
  }

  const categoryMatch = path.match(
    /^\/api\/categories\/([^/]+)\/restaurants$/
  );
  if (categoryMatch) {
    const ids = mockRestaurantIdsByCategory[categoryMatch[1]] ?? [];
    const restaurants = ids
      .map(findRestaurant)
      .filter((restaurant): restaurant is IGetRestaurantDataContent =>
        Boolean(restaurant)
      );

    return {
      status: 200,
      body: envelope(
        paginate(restaurants, 0, Math.max(restaurants.length, 1))
      ),
    };
  }

  return null;
}
