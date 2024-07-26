"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoneyBillTrendUp } from "react-icons/fa6"

import {
  FluentWalletCreditCard16Regular,
  MaterialSymbolsBubbleChartOutlineRounded,
  MaterialSymbolsDashboard,
  MaterialSymbolsHeadsetMicOutlineRounded,
  MaterialSymbolsLightCloseSmallOutlineRounded,
  MaterialSymbolsLightFeatureSearchOutline,
  MaterialSymbolsManageHistory,
  SystemUiconsBell,
  SystemUiconsBook,
  SystemUiconsUserAdd,
  SystemUiconsUserMale,

} from "../Icon";

import { Drawer, Image } from "antd";
import { Dispatch, SetStateAction } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
    name: "X Excel Record",
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
    name: "X Customer care direct chat",
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
    url: "/dashboard/all-money-request/add",
    icon: <FaMoneyBillTrendUp className="text-sm" />,
  },
  {
    name: "All withdraw Request",
    url: "/dashboard/all-money-request/withdraw",
    icon: <BiMoneyWithdraw className="text-xl p-0 m-0" />,
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
    name: "X Automatic approval",
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
    name: "X Create Game",
    url: "/dashboard/create-game",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "X Approve gateway",
    url: "/dashboard/approve-gateway",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "X Daily in record bonus",
    url: "/dashboard/daily-in-record-bonus",
    icon: <MaterialSymbolsManageHistory />,
  },
  {
    name: "OCR",
    url: "/dashboard/ocr",
    icon: <MaterialSymbolsLightFeatureSearchOutline />,
  },
];

type SidebarProps = {
  isSidebarOpen: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ isSidebarOpen, setSidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div>
      {/* Mobile navigation */}
      <Drawer
        closeIcon={false}
        title={
          <div className="flex items-center gap-1 justify-between w-full">
            <div className="flex items-center gap-2">
              <Image
                preview={false}
                height={30}
                width={30}
                alt="NextUI hero Image"
                src="https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
              />
              Gamble Zone
            </div>
            <MaterialSymbolsLightCloseSmallOutlineRounded
              className="text-3xl cursor-pointer"
              onClick={() => setSidebar(false)}
            />
          </div>
        }
        onClose={() => setSidebar(false)}
        open={isSidebarOpen}
        placement="left"
      >
        {/* Nav links */}
        <div className="flex flex-col  gap-2 ">
          {navLinks.map((links: any, index: number) => {
            const route = links.url;
            const isActive = pathname === route;

            return (
              <div
                key={index}
                className={`${isActive ? "bg-slate-100  border-l-4 border-blue-500" : ""}  flex p-2 rounded gap-2`}>
                <span className={`${isActive ? "text-[#3f2632]" : "text-black"} text-xl`}>
                  {links.icon}
                </span>
                <Link onClick={e => setSidebar(false)} href={links.url} className={`${isActive ? "" : ""}`}>
                  {links.name}
                </Link>
              </div>
            );
          })}
          <div className="mx-2">
            <button className="text-white bg-red-500 w-full mb-4 rounded py-2">
              Logout
            </button>
          </div>
        </div>
      </Drawer>

      {/* Desktop navigation */}
      <div className="hidden flex-col lg:flex min-w-64">
        <div className="flex items-center p-4 gap-2 justify-center">
          <Image
            preview={false}
            height={30}
            width={30}
            alt="NextUI hero Image"
            src="https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
          />
          Gamble Zone
        </div>
        <div className=" h-[90vh] overflow-scroll" style={{ scrollbarWidth: "none" }} >
          {navLinks.map((item, index) => {
            const route = item.url;
            const isActive = pathname === route;

            return (
              <div
                key={index}
                className={`flex gap-2 items-center justify-start cursor-pointer py-2 pr-2 pl-4 rounded-r-md ${isActive
                  ? "text-black bg-white border-blue-500 border-l-4"
                  : "text-gray-500  hover:text-black "
                  }`}>
                <span
                  className={`${isActive ? "text-blue-400" : "text-blue-600"} text-xl`}>
                  {item.icon}
                </span>

                {
                  item.url === "/dashboard/admin-panel"
                    ? <Collapsible>
                      <CollapsibleTrigger>{item.name}</CollapsibleTrigger>
                      <CollapsibleContent className=" flex flex-col ">
                        <Link className="text-md my-3" href={`/dashboard/sub-admin`}>Subadmin</Link>
                        <Link className="text-md" href={"/dashboard/blocked"}>
                          Blocked
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    :
                    <Link className="text-md" href={item.url}>
                      {item.name}
                    </Link>
                }
              </div>
            );
          })}

          <div className="flex-1 py-4"></div>
          <div className="mx-2 ">
            <button className="text-white bg-red-500 w-full mb-4 rounded py-2">
              Logout
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

function SidebarLogo() {
  return (
    <h1 className="flex text-center items-center justify-center">
      <Image
        preview={false}
        height={50}
        width={50}
        alt="NextUI hero Image"
        src="https://static.vecteezy.com/system/resources/thumbnails/031/768/202/small/bird-feathers-logo-template-image-free-png.png"
      />
    </h1>
  );
}
