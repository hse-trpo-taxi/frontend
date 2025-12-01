import { DriversMap } from "../../../widgets/drivers-map/ui"
import { DriversPieChart } from "../../../widgets/drivers-pie-chart/ui"
import { DriversScore } from "../../../widgets/drivers-score/ui"
import { OrderChart } from "../../../widgets/order-chart/ui"
import { Supports } from "../../../widgets/supports/ui"
import { WelcomeCard } from "../../../widgets/welcome-card/ui"

export const HomePage = () => {
  return (
    <div className="p-[20px] flex gap-[40px] h-full min-h-0">
      <div className="w-[600px] flex-none flex flex-col gap-[10px]">
        <WelcomeCard />
        <Supports />
        <OrderChart />
      </div>

      <div className="flex-1 flex flex-col min-h-0 mt-[20px]">
        <div className="flex gap-[10px] h-[220px]">
          <div className="flex-1">
            <DriversPieChart />
          </div>
          <div className="flex-1">
            <DriversScore />
          </div>
        </div>

        <div className="flex-1 min-h-0 mt-[120px]">
          <DriversMap />
        </div>
      </div>
    </div>
  );
};
