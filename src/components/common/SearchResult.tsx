import { css } from "@emotion/react";
import PlaceCard from "components/Card/PlaceCard";
import { instance } from "libs/api/api";
import { useEffect, useState } from "react";

interface Props {
  searchField: string;
}

function SearchResult({ searchField }: Props) {
  const [searchItems, setSearchItems] = useState<IGetRestaurantDataContent[]>(
    []
  );

  useEffect(() => {
    const api = async () => {
      const response = await instance.get<{}, IGetRestaurant>(
        `api/restaurants?keyword=${searchField}`
      );
      setSearchItems(response.data?.content);
    };
    api();
  }, [searchField]);

  return (
    <div css={wrapper}>
      {/* {searchItems == undefined ? (
        <span>aj</span>
      ) : (
        searchItems?.map((restaurant) => (
          <PlaceCard
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.name}
            summary={restaurant.summary}
            img={restaurant?.outsideImage.s3Url}
          />
        ))
      )} */}

      {searchItems?.map((restaurant) => (
        <PlaceCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.name}
          summary={restaurant.summary}
          img={restaurant?.outsideImage.s3Url}
        />
      ))}
    </div>
  );
}

export default SearchResult;

const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  min-height: 100vh;
  width: 100%;
`;
