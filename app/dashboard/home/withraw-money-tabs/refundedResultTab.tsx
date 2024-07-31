import { Button } from "@/components/ui/button";
import { Input, Image, Tag } from "antd";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaMoneyBill, FaRegCalendar, FaCopy } from "react-icons/fa";
import { MdSmartphone, MdEmail } from "react-icons/md";

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

const RefundedResult = () => {
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
              className="flex bg-gray-50 shadow-md flex-col w-full justify-start items-center sm:w-[360px] p-0 rounded-lg">

              <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                <span className="mx-1">Refunded request</span>
                (
                <Image
                  preview={false}
                  height={50}
                  width={50}
                  alt="NextUI hero Image"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                />
                )
                {/* <div className="grow"></div>
                                <TransferDailouge /> */}
              </div>

              {/* Payment infomation */}
              <div className="flex justify-between px-4 py-2 pb-6 w-full">
                <div className="flex flex-col gap-1 justify-between  min-h-36">
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
                    <FaRegCalendar />{" "}
                    <span className="font-semibold text-sm"> 29/05/2005 </span>
                  </div>
                  <Image
                    className="w-20 mt-5 ml-3"
                    width={80}
                    height={80}
                    src="https://www.hackinclude.com/wp-content/uploads/2018/06/fake-paytm-receipt.jpg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-2 ">
                  <div className="flex flex-col items-start">
                    <span className=" font-bold">Bank name:-</span>
                    <div className="flex w-full gap-3 item-center justify-between">
                      <div className="text-sm">ICIC</div>
                      <FaCopy className="text-gray-500 text-sm my-auto" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <span className=" font-bold">AC holder:-</span>
                    <div className="flex w-full gap-3 item-center justify-between">
                      <div className="text-sm">name of holder</div>
                      <FaCopy className="text-gray-500 text-sm my-auto" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <span className=" font-bold">AC number:-</span>
                    <div className="flex w-full gap-3 item-center justify-between">
                      <div className="text-sm">num of AC</div>
                      <FaCopy className="text-gray-500 text-sm my-auto" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <span className=" font-bold">IFSC:-</span>
                    <div className="flex w-full gap-3 item-center justify-between">
                      <div className="text-sm">ACDEW23345</div>
                      <FaCopy className="text-gray-500 text-sm my-auto" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex item-start px-6 mb-0 mt-6 w-full justify-center gap-1 flex-col">
                <span className="text-start  justify-self-end text-yellow-600 font-bold">
                  Refunded 7/23/2024:-
                </span>
              </div>

              {/* ... ... Action buttons ... ... */}
              <div className="min-h-7 mt-5 w-full flex items-center justify-end">
                <Tag
                  className="w-full text-center p-0 m-0 py-[2px]"
                  color="gold"
                >
                  Refunded
                </Tag>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RefundedResult;
