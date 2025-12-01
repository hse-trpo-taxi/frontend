import type { Point } from "../../../entities/map/model/map-type";
import { MapComponent } from "../../../shared/ui/map"

export const DriversMap = () => {
  const points: Point[] = [
    { id: 1, coords: [55.751244, 37.618423] },
    { id: 2, coords: [55.765, 37.61] },
    { id: 3, coords: [55.73, 37.6] },
  ];
  return (
    <div className="flex flex-col h-full min-h-0">
      <h2 className="mb-[10px]">Карта водителей</h2>
      <div className="flex-1 min-h-0">
        <MapComponent mode="points" points={points} />
      </div>
    </div>
  );
};
