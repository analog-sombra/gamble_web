"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FluentWalletCreditCard16Regular,
  MaterialSymbolsBubbleChartOutlineRounded,
  MaterialSymbolsDashboard,
  MaterialSymbolsHeadsetMicOutlineRounded,
  MaterialSymbolsLightFeatureSearchOutline,
  MaterialSymbolsManageHistory,
  SystemUiconsBell,
  SystemUiconsBook,
  SystemUiconsUserAdd,
  SystemUiconsUserMale,
} from "../Icon";

import { Image } from "@nextui-org/react";

const navLinks = [
  {
    name: "Dashboard",
    url: "/dashboard/home",
    icon: <MaterialSymbolsDashboard />,
  },
  {
    name: "Games",
    url: "/dashboard/games",
    icon: <MaterialSymbolsBubbleChartOutlineRounded />,
  },
  {
    name: "Submit Result",
    url: "/dashboard/submit-result",
    icon: <SystemUiconsBook />,
  },
  {
    name: "Cancle Result Number",
    url: "/dashboard/cancle-result",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Total bid amount",
    url: "/dashboard/total-bid",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Excel Record",
    url: "/dashboard/excel-record",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Total winner",
    url: "/dashboard/total-winner",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Set Amount",
    url: "/dashboard/set-amount",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Create User",
    url: "/dashboard/create-user",
    icon: <SystemUiconsUserAdd />,
  },
  {
    name: "Customer care direct chat",
    url: "/dashboard/customer-care-chat",
    icon: <MaterialSymbolsHeadsetMicOutlineRounded />,
  },
  { name: "Users", url: "/dashboard/users", icon: <SystemUiconsUserMale /> },
  {
    name: "Payment Gateways",
    url: "/dashboard/payment-gateways",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Withdraw Record",
    url: "/dashboard/withdraw-record",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "All money Request",
    url: "/dashboard/all-money-request",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "All withdraw Request",
    url: "/dashboard/all-withdraw-request",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Admin panel",
    url: "/dashboard/admin-panel",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Manage account",
    url: "/dashboard/manage-account",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Automatic approval",
    url: "/dashboard/automatic-approval",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "status",
    url: "/dashboard/status",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Statement",
    url: "/dashboard/statement",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Notification and Updates",
    url: "/dashboard/notification-and-updates",
    icon: <SystemUiconsBell />,
  },
  {
    name: "Direct Add Cash",
    url: "/dashboard/direct-add-cash",
    icon: <FluentWalletCreditCard16Regular />,
  },
  {
    name: "P&L record",
    url: "/dashboard/p-and-l-record",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Create Game",
    url: "/dashboard/create-game",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Approve gateway",
    url: "/dashboard/approve-gateway",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "Daily in record bonus",
    url: "/dashboard/daily-in-record-bonus",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "OCR",
    url: "/dashboard/ocr",
    icon: <MaterialSymbolsLightFeatureSearchOutline />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Navigation */}
      <div className=" flex-col flex min-w-64">
        <h1 className="ml-5 my-4 text-center flex w-full justify-center">
          <Image
            height={50}
            width={50}
            alt="NextUI hero Image"
            src="https://static.vecteezy.com/system/resources/thumbnails/031/768/202/small/bird-feathers-logo-template-image-free-png.png"
          />
        </h1>

        {navLinks.map((item, index) => {
          const route = item.url;
          const isActive = pathname === route;

          return (
            <div
              key={index}
              className={`flex gap-2 items-center justify-start cursor-pointer py-2 pr-2 pl-4 rounded-r-md ${
                isActive
                  ? "text-black bg-white border-blue-500 border-l-4"
                  : "text-gray-500  hover:text-black "
              }`}
            >
              {/*  */}
              <span
                className={`${
                  isActive ? "text-[#3f2632]" : "text-black"
                } text-xl`}
              >
                {item.icon}
              </span>
              <Link className="text-md" href={item.url}>
                {item.name}
              </Link>
            </div>
          );
        })}
        <div className="flex-1 py-8"></div>
        <div className="mx-2">
          <button className="text-white bg-red-500 w-full mb-4 rounded py-2">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
