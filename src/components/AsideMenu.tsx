import { AsideMenuItem } from "./AsideMenuItem";
import { Settings, User, Home, Library } from "../icons/Icons";

export function AsideMenu({ pathname }: { pathname: string }) {

    return (
        <nav className="flex flex-col justify-between min-h-full border-r-2 border-zinc-200">
            <div className="">
                <AsideMenuItem label="Dashboard" href="/dashboard" active={pathname === "/dashboard"} icon={<Home />} />
                <AsideMenuItem label="Users" href="/users" active={pathname === "/users"} icon={<User />} />
                <AsideMenuItem label="Roles" href="/roles" active={pathname === "/roles"} icon={<Library />} />
            </div>
            <div className="">
                <AsideMenuItem label="Settings" href="/" active={pathname === "/settings"} icon={<Settings />} />
            </div>
        </nav>
    );
}