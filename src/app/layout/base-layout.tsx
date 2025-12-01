import { Outlet } from "react-router-dom"
import { Menu } from "../../widgets/menu/ui"
import { Profile } from "../../widgets/profile/ui"

export const BaseLayout = () => {
    return (
        <div className="flex h-screen p-[25px]">
            <div className="flex-none">
                <Menu />
            </div>

            <div className="flex-1 overflow-hidden">
                <Outlet />
            </div>

            <div className="flex-none">
                <Profile />
            </div>
        </div>
    )
}
