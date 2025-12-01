import { MapComponent } from "../../../shared/ui/map"

export const DriversMap = () => {
  return (
    <div className="flex flex-col h-full min-h-0">
      <h2 className="mb-[10px]">Карта водителей</h2>
      <div className="flex-1 min-h-0">
        <MapComponent />
      </div>
    </div>
  );
};
