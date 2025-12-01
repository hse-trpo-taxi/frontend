import { useGetDriversCoordQuery } from "../../../entities/map/api/map-api";
import type { Point } from "../../../entities/map/model/map-type";
import { MapComponent } from "../../../shared/ui/map"

export const DriversMap = () => {
  const { data } = useGetDriversCoordQuery({});

  if (!data) return;

  const points: Point[] = data.map((d) => ({
    id: d.id,
    coords: [d.y, d.x], 
  }));

  return (
    <div className="flex flex-col h-full min-h-0">
      <h2 className="mb-[10px]">Карта водителей</h2>
      <div className="flex-1 min-h-0">
        <MapComponent mode="points" points={points} />
      </div>
    </div>
  );
};
