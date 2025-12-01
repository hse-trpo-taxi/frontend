import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import type { Coord, Point } from "../../../entities/map/model/map-type";

type RouteProps = {
  start: Coord;
  end: Coord;
  carCoords?: Coord;
};

type MapComponentProps = {
  mode: "points" | "route";
  points?: Point[];
  route?: RouteProps;
  center?: Coord;
  zoom?: number;
};

export const MapComponent = ({
  mode,
  points = [],
  route,
  center = [55.751244, 37.618423],
  zoom = 10,
}: MapComponentProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <YMaps
        query={{
          apikey: '0ab81fca-790d-4c04-a89b-8b4e60094e4d',
          lang: "ru_RU"
        }}>
        <Map
          defaultState={{
            center,
            zoom,
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
          {mode === "points" &&
            points.map((p) => (
              <Placemark
                key={p.id}
                geometry={p.coords}
                options={{
                  preset: "islands#blueCircleIcon",
                  iconColor: "#2563eb",
                }}
              />
            ))}

          {mode === "route" && route && (
            <>
              <Polyline
                geometry={[route.start, route.end]}
                options={{
                  strokeColor: "#0D162D",
                  strokeWidth: 3,
                  strokeOpacity: 0.8,
                  strokeStyle: "solid",
                }}
              />

              <Placemark
                geometry={route.start}
                options={{
                  preset: "islands#circleIcon",
                  iconColor: "#0D162D",
                }}
              />

              <Placemark
                geometry={route.end}
                options={{
                  preset: "islands#circleIcon",
                  iconColor: "#1049D9",
                }}
              />

              {route.carCoords && (
                <Placemark
                  geometry={route.carCoords}
                  options={{
                    iconColor: "#0D162D",
                  }}
                />
              )}
            </>
          )}
        </Map>
      </YMaps>
    </div>
  );
};
