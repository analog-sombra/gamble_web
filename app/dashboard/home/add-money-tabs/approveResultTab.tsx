import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { CiCreditCard2 } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa6";
import { MdSmartphone } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input, Tag, Image } from "antd";
import { FaMoneyBill } from "react-icons/fa6";

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

const ApproveResult = () => {
  return (
    <>
      <div className="w-[250px] sm:w-[400px] flex flex-col gap-2 m-2 sm:mt-10 items-center">

        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
          <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="Enter UTR" />
          <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
        </div>
        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
          <Select>
            <SelectTrigger className="w-[180px] rounded-none rounded-l-md focus:out">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectLabel>Date</SelectLabel> */}
              <SelectItem value="apple">Today</SelectItem>
              <SelectItem value="banana">Yesterday</SelectItem>
              <SelectItem value="blueberry">Last 7 days</SelectItem>
              <SelectItem value="blueberry">Last 30 days</SelectItem>
              <SelectItem value="blueberry">This month</SelectItem>
              <SelectItem value="blueberry">Last month</SelectItem>
              <SelectItem value="blueberry">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Input className="h-full  rounded-none placeholder:font-semibold" type="date" />
          <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-56" type="submit">Filter</Button>
        </div>
        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
          <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
          <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-5 my-5 items-center">
        {players.map((user: Players, index: number) => {
          return (
            <div
              key={index}
              className="flex bg-gray-50 shadow-md flex-col w-full justify-start items-center sm:w-[360px] p-0 rounded-lg">

              <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                <span className="mx-1">Approved request</span>
                (
                  <Image
                    preview={false}
                    height={50}
                    width={50}
                    alt="NextUI hero Image"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                  />
                )
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
                      Ref no:{" "}
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

            </div>
          );
        })}
      </div>
    </>
  );
};

export default ApproveResult;
