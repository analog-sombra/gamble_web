"use client";

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


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <div className="w-full flex bg-[#efefef] h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebar={setSidebar} />
      <div className="w-full p-5 flex flex-col  bg-white">


        <div className=" mb-3 flex flex-col bg-[#341c8c] p-4 px-6 rounded-md">

          <div className="flex mb-4 justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="toggle-add" className="text-white">Add</Label>
              <Switch className="" id="toggle-add" />
            </div>
            <div className="grow"></div>

            <div className="grow"></div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="toggle-withdraw" className="text-white">Withdraw</Label>
              <Switch id="toggle-withdraw" />
            </div>
          </div>

          <div className="w-full mb-3 bg-white h-[0.5px]"></div>
          <div className="flex justify-between items-center ">
            <IoMenu className=" text-3xl text-white" />
            <div className="px-2 text-center">
              <div className=" text-[12px] font-semibold sm:text-medium text-white"> Wd limit: 234</div>
            </div>
            <div className="flex justify-between gap-3 items-center ">
              {/* <div>
                <h1 className="text-end font-semibold text-sm">
                  Welcome Back, Ronak
                </h1>
                <p className="text-xs text-end">{new Date().toDateString()}</p>
              </div> */}
              <button className="w-full md:w-32 mr-2 text-black font-semibold h-8 text-sm bg-white hover:bg-zinc-100 py-1 px-2 rounded-md">
                Log out
              </button>
              {/* <Avatar src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg" /> */}
            </div>
          </div>

        </div>

        <div>{children}</div>
      </div>


    </div>
  );
}
