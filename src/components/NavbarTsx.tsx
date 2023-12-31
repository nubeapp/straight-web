import { useState } from "react";
import { NavbarItem } from "./NavbarItem";
import { GetStartedButton } from "./GetStartedButton";
export function NavbarTsx({ pathname }: { pathname: string }) {

    return (
        <nav className="m-2">
            <div className="flex flex-row items-center justify-between px-4 w-full min-h-[50px]">
                <a href="/" className="text-center text-blue-600 text-3xl italic font-medium">
                    straight<span className="text-zinc-900">.</span>
                </a>
                <div className="flex flex-row gap-6">
                    <NavbarItem label="Products" href="/products" active={pathname === "/products"} />
                    <NavbarItem label="Company" href="/company" active={pathname === "/company"} />
                    <NavbarItem label="Developers" href="/developers" active={pathname === "/developers"} />
                    <NavbarItem label="Pricing" href="/pricing" active={pathname === "/pricing"} />
                </div>
                <div className="flex flex-row gap-6 justify-center items-center">
                    <div className="hover:cursor-pointer py-1 px-3 rounded-xl border border-zinc-600 hover:border-blue-600 text-md text-zinc-600 hover:text-blue-600 hover:scale-[1.03] transition duration-200">
                        <a href="/login">Sign in</a>
                    </div>
                    <GetStartedButton />
                </div>
            </div>
        </nav>
    );
}