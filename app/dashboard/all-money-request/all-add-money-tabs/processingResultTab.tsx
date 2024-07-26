import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { CiCreditCard2 } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa6";
import { MdSmartphone } from "react-icons/md";
import TransferDailouge from "../DialogeBoxes/transfer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Drawer, Image } from "antd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { TbReload } from "react-icons/tb";
("");
import { Input, Tag } from "antd";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SwitchThumb } from "@radix-ui/react-switch";
import { FaMoneyBill } from "react-icons/fa6";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IoMdClose } from "react-icons/io";
import ApproveDailouge from "../DialogeBoxes/approve";
import RejectDailouge from "../DialogeBoxes/reject";

type Players = {
  userId: number;
  bidAmount: number;
  winAmount: number;
};

const players = [
  {
    userId: 0,
    bidAmount: 231,
    winAmount: 34234,
  },
  {
    userId: 2,
    bidAmount: 231,
    winAmount: 34234,
  },
  {
    userId: 3,
    bidAmount: 231,
    winAmount: 34234,
  },
  {
    userId: 4,
    bidAmount: 231,
    winAmount: 34234,
  },
];

const ProcessingResult = () => {
  return (
    <>
      <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
          <Input
            className="h-full  rounded-none rounded-l-md placeholder:font-semibold"
            type="text"
            placeholder="All"
          />
          <Button
            className="h-full bg-blue-500  rounded-none rounded-r-md w-40"
            type="submit"
          >
            Search
          </Button>
        </div>
        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
          <Input
            className="h-full  rounded-none rounded-l-md placeholder:font-semibold"
            type="text"
            placeholder="User I'd"
          />
          <Button
            className="h-full bg-blue-500  rounded-none rounded-r-md w-40"
            type="submit"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
        {players.map((user: Players, index: number) => {
          return (
            <div
              key={index}
              className="flex bg-gray-50 shadow-md flex-col justify-start items-center w-[360px] p-0 rounded-lg"
            >
              <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                <span className="mx-1">Processing</span>
                (
                <Image
                  preview={false}
                  height={50}
                  width={50}
                  alt="NextUI hero Image"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                />
                )<div className="grow"></div>
                <TransferDailouge />
              </div>

              {/* Payment infomation */}
              <div className="flex justify-between px-4 py-2 w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    {" "}
                    <MdSmartphone /> <span>+91 **********</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <BiSolidUser />{" "}
                    <span className="font-semibold text-sm "> User Id: </span>{" "}
                    234
                  </div>
                  <div className="flex gap-3 items-center">
                    {" "}
                    <FaMoneyBill />{" "}
                    <span className="font-semibold text-sm">
                      {" "}
                      23,490 INR{" "}
                    </span>{" "}
                  </div>
                  <div className="flex gap-3 items-center">
                    {" "}
                    <CiCreditCard2 />{" "}
                    <span className="font-semibold text-sm">
                      {" "}
                      TXN ID:{" "}
                    </span>{" "}
                    A7238912IDA
                  </div>
                  <div className="flex gap-3 items-center">
                    {" "}
                    <FaRegCalendar />{" "}
                    <span className="font-semibold text-sm"> 29/05/2005 </span>
                  </div>
                </div>
                <img
                  className="w-20 "
                  src="https://www.hackinclude.com/wp-content/uploads/2018/06/fake-paytm-receipt.jpg"
                  alt=""
                />
              </div>

              {/* ... ... Seprator ... ... */}
              <div className="h-[0.5px] w-[70%] bg-gray-300 my-5 "></div>

              {/* ... ... Admin info ... ... */}

              <div className="flex px-4 items-center mb-3 w-full justify-between">
                <span className="font-semibold text-lg">Admin Info</span>
                {/* <Tag className="px-4 py-[2px]" color="green">Online</Tag> */}
              </div>

              <div className="px-4 py-2 w-full justify-between items-center flex ">
                <div className="flex flex-col justify-between items-start gap-2 ">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">
                      <MdSmartphone />
                    </span>
                    <span>+91 **********</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">
                      <MdEmail />
                    </span>
                    <span>exampl@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">
                      <BiSolidUser />
                    </span>
                    <span>Name of admin</span>
                  </div>
                </div>

                {/* <div className="flex flex-col my-2 gap-2 justify-between ">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm">Last approved:-</span>
                                        <span> one minute ago </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm">Last rejected:-</span>
                                        <span> one minute ago </span>
                                    </div>
                                </div> */}
              </div>

              {/* ... ... Action buttons ... ... */}
              <div className="flex justify-around pb-4 px-3 gap-0 mt-5 w-full">
                <ApproveDailouge />
                {/* <Button className="bg-blue-500 py-2  hover:bg-blue-700 text-white w-full hover:text-white" variant={"outline"}>
                                    processing
                                </Button> */}
                <RejectDailouge />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProcessingResult;
