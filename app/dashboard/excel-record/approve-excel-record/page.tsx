"use client"

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input, Tag, Image } from "antd";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { FaCopy } from "react-icons/fa6";
import { MdEmail, MdSmartphone } from "react-icons/md";
import ApproveDailouge from '../../all-money-request/DialogeBoxes/approve';
import RejectDailouge from '../../all-money-request/DialogeBoxes/reject';

const ApproveExcelReq = () => {
  return (
    <div>
      <div className="flex h-10 w-full mb-3 max-w-sm items-center">
        <Select>
          <SelectTrigger className="w-[180px] rounded-none rounded-l-md focus:out">
            <SelectValue placeholder="ACC" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Account number</SelectItem>
              <SelectItem value="banana">Account holder name</SelectItem>
              <SelectItem value="blueberry">Amount</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          className="h-full  rounded-none placeholder:font-semibold"
          type="text"
          placeholder="Enter"
        />
        <Button
          className="h-full bg-blue-500  rounded-none rounded-r-md w-56"
          type="submit"
        >
          Search
        </Button>
      </div>

      <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
        {players.map((user: Players, index: number) => {
          return (
            <div
              key={index}
              className="flex bg-gray-50 shadow-md flex-col w-full justify-start items-center sm:w-[360px] p-0 rounded-lg">
              <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                <span className="mx-1">Pending excel Request </span>
                ( <BsBank className="mx-1" /> )<div className="grow"></div>
                <Button className="bg-blue-600 hover:bg-blue-700 ">
                  {"Excel"}
                </Button>
              </div>

              {/* User profile and details */}
              <div className="flex flex-col justify-between rounded-md p-5 items-center px-4 py-2 w-full">
                <Image
                  alt="icon"
                  preview={false}
                  width={80}
                  height={80}
                  className=""
                  src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                />
                <div className="flex flex-col gap-1 my-5 mb-2 w-full items-center">
                  <div className="flex gap-2 items-center">
                    {" "}
                    <span className="font-semibold text-sm"> Phone no:</span>
                    <span>+91 **********</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    {" "}
                    <span className="font-semibold text-sm ">
                      {" "}
                      User Id:{" "}
                    </span>{" "}
                    234
                  </div>
                  <div className="flex gap-2 items-center">
                    {" "}
                    22 jul 2024, 4:10pm
                  </div>
                </div>
              </div>

              {/* ... ... User bank details ... ... */}
              <div className="flex flex-col my-5 gap-[3px] justify-center items-start w-full px-5">
                <div className="flex gap-3 items-center w-full">
                  <span className="font-bold text-sm">Bank name:</span>
                  <span> ICIC Bank </span>
                  <div className="grow"></div>
                  <FaCopy className="text-gray-500" />
                </div>

                <div className="h-[0.5px] w-full bg-gray-300 my-1 "></div>

                <div className="flex gap-3 items-center w-full">
                  <span className="font-bold text-sm">Account holder:</span>
                  <span> Name of holder </span>
                  <div className="grow"></div>
                  <FaCopy className="text-gray-500" />
                </div>

                <div className="h-[0.5px] w-full bg-gray-300 my-1 "></div>

                <div className="flex gap-3 items-center w-full">
                  <span className="font-bold text-sm">Account number:</span>
                  <span> number of account</span>
                  <div className="grow"></div>
                  <FaCopy className="text-gray-500" />
                </div>

                <div className="h-[0.5px] w-full bg-gray-300 my-1 "></div>

                <div className="flex gap-3 items-center w-full">
                  <span className="font-bold text-sm">IFSC code:</span>
                  <span> ACWE45345D </span>
                  <div className="grow"></div>
                  <FaCopy className="text-gray-500" />
                </div>

                <div className="h-[0.5px] w-full bg-gray-300 my-1 "></div>

                <div className="flex gap-3 items-center w-full">
                  <span className="font-bold text-sm text-zinc-500">
                    Amount:
                  </span>
                  <span> 23,000</span>
                  <div className="grow"></div>
                  <FaCopy className="text-gray-500" />
                </div>
                <div className="h-[0.5px] w-full bg-gray-300 my-1 "></div>
                <div className="flex w-full item-center justify-center">
                  (Twenty three thousand)
                </div>
              </div>

              {/* ... ... Admin info ... ... */}
              <div className="flex px-4 items-center mb-3 w-full justify-between">
                <span className="font-semibold text-lg">Admin Info</span>
                <Tag className="px-4 py-[2px]" color="green">
                  Online
                </Tag>
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

                <div className="flex flex-col my-2 gap-2 justify-between ">
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      Last approved:-
                    </span>
                    <span> one minute ago </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      Last rejected:-
                    </span>
                    <span> one minute ago </span>
                  </div>
                </div>
              </div>

              {/* ... ... Action buttons ... ... */}
              <div className="flex justify-between pb-4 px-3 gap-0 mt-5 w-full">
                <ApproveDailouge />
                <RejectDailouge />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default ApproveExcelReq

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