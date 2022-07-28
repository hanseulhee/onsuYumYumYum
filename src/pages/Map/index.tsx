import { css } from "@emotion/react";
import { IPosition, positions } from "assets/stores/position";
import { useEffect, useState } from "react";

function Map() {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.4905969, 126.8246811),
        level: 4,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      const storePosition = positions.map((store: IPosition) => {
        return {
          title: store.title,
          latlng: new window.kakao.maps.LatLng(store.lat, store.lng),
        };
      });

      storePosition.forEach((store) => {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: store.latlng,
          clickable: true,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: store.title,
        });

        window.kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );
        window.kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );

        marker.setMap(map);
        map.relayout();
      });
    }, [mapLoaded]);
  });

  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  return (
    <main css={itemWrapper}>
      <div id="map" css={mapWrapper}></div>
    </main>
  );
}

export default Map;

const itemWrapper = css`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const mapWrapper = css`
  position: absolute;
  width: 100%;
  height: 100%;
`;
