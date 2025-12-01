import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const points = [
  { id: 1, coords: [55.751244, 37.618423] }, 
  { id: 2, coords: [55.765, 37.61] },
  { id: 3, coords: [55.73, 37.6] },
  { id: 4, coords: [55.74, 37.67] },
  { id: 5, coords: [55.78, 37.7] },
  { id: 6, coords: [55.72, 37.55] },
];

export const MapComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <YMaps>
        <Map
          defaultState={{
            center: [55.751244, 37.618423], 
            zoom: 10,
          }}
          options={{
            suppressMapOpenBlock: true, 
            yandexMapDisablePoiInteractivity: true,
            copyrightLogoVisible: false,
            copyrightProvidersVisible: false,
            copyrightUaVisible: false,
          }}
          width="100%"
          height="100%"
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {points.map((p) => (
            <Placemark
              key={p.id}
              geometry={p.coords}
              options={{
                preset: "islands#blueCircleIcon", 
                iconColor: "#2563eb",
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
