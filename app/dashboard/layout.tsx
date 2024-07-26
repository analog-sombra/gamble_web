"use client";
import { useTab } from "@/state/tabState";
import Sidebar from "@/components/Dashboard/Sidebar";
import { IoReload } from "react-icons/io5";
import { TbReload } from "react-icons/tb";
import {
  FluentHome12Regular,
  MaterialSymbolsLightMenu,
} from "@/components/Icon";
// import { Avatar } from "antd";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import LoadingPageIndicator from "@/components/LoadingPageIndicator";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebar] = useState(false);
  const pathname = usePathname();
  const { currentTab, setCurrentTab } = useTab();

  console.log(pathname)

  return (
    <div className="w-full flex bg-[#efefef] h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebar={setSidebar} />

      <div className="w-full p-1 sm:p-5 py-0 flex flex-col h-full overflow-auto bg-white m-0">
        <div className=" bg-white sticky top-0 z-50 py-4 pb-1 ">

          <div className=" mb-3 flex flex-col bg-[#341c8c] xp-4 px-6 py-3 rounded-md">
            <div className="flex mb-4 justify-between">
              <div className="flex items-center  space-x-2">
                <Label htmlFor="toggle-add" className="text-sm sm:text-base text-white ">
                  Add
                </Label>
                <Switch className="" id="toggle-add" />
              </div>
              <div className="grow"></div>

              <div className="grow"></div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="toggle-withdraw" className="text-sm sm:text-base text-white">
                  Withdraw
                </Label>
                <Switch id="toggle-withdraw" />
              </div>
            </div>

            <div className="w-full mb-3 bg-white h-[0.5px]"></div>

            <div className="flex justify-between items-center ">
              <button
                className="bg-transparent sm:px-2 rounded-md hover:bg-[#4b30b0]"
                onClick={(e) => setSidebar(!isSidebarOpen)}
              >
                <IoMenu className=" text-3xl text-white" />
              </button>

              {currentTab !== "add" || pathname !== '/dashboard/home' ? (
                <div className=" text-sm font-semibold sm:text-medium text-white">
                  {" "}
                  WD limit: 234
                </div>
              ) : (
                <div className=" text-sm font-semibold sm:text-medium text-white">
                  {" "}
                  Add limit: 234
                </div>
              )}
              <button className="md:w-32 sm:mr-2 text-black font-semibold h-8 text-sm bg-white hover:bg-zinc-100 py-1 px-2 rounded-md">
                Log out
              </button>
            </div>

          </div>
        </div>
        <div className="">{children}</div>
      </div>

    </div >
  );
}
