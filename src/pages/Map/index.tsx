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

    window.Kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.Kakao.maps.LatLng(37.4905969, 126.8246811),
        level: 4,
      };

      const map = new window.Kakao.maps.Map(mapContainer, mapOption);
      const storePosition = positions.map((store: IPosition) => {
        return {
          title: store.title,
          latlng: new window.Kakao.maps.LatLng(store.lat, store.lng),
        };
      });

      storePosition.forEach((store) => {
        const marker = new window.Kakao.maps.Marker({
          map: map,
          position: store.latlng,
          clickable: true,
        });

        const iwContent = `<div style="width:10rem;font-size:0.7rem;font-weight:800;text-align:center;padding:6px 0;">${store.title}</div>`,
          iwRemoveable = true;
        const infowindow = new window.Kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        window.Kakao.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
        // window.Kakao.maps.event.addListener(
        //   marker,
        //   "click",
        //   makeOverListener(map, marker, infowindow)
        // );
        // window.Kakao.maps.event.addListener(
        //   marker,
        //   "mouseout",
        //   makeOutListener(infowindow)
        // );

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
