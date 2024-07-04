"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import {
  FluentHome12Regular,
  MaterialSymbolsLightMenu,
} from "@/components/Icon";
import { Avatar } from "antd";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <div className="w-full flex bg-[#efefef] h-full">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebar={setSidebar} />
      <div className="w-full p-5 flex flex-col h-full">
        <div className="mb-3 flex bg-white p-4 rounded-md items-center justify-between ">
          <MaterialSymbolsLightMenu
            className="block lg:hidden text-2xl cursor-pointer"
            onClick={() => setSidebar((val) => !val)}
          />
          <Link href="/dashboard/home" className="lg:block hidden ">
            <FluentHome12Regular className="text-2xl cursor-pointer" />
          </Link>
          <div className="flex justify-between gap-3 items-center">
            <div>
              <h1 className="text-end font-semibold text-sm">
                Welcome Back, Ronak
              </h1>
              <p className="text-xs text-end">{new Date().toDateString()}</p>
            </div>
            <Avatar src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg" />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
