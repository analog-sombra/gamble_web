import { Button } from "@/components/ui/button";
import { Image } from "antd";
import { Input, Tag } from "antd";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { FaCopy, FaMoneyBill, FaRegCalendar } from "react-icons/fa6";
import { MdSmartphone, MdEmail } from "react-icons/md";
import ApproveDailouge from "../DialogeBoxes/approve";
import RejectDailouge from "../DialogeBoxes/reject";
import TransferDailouge from "../DialogeBoxes/transfer";

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
              className="flex bg-gray-50 shadow-md flex-col w-full justify-start items-center sm:w-[360px] p-0 rounded-lg">

              <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                <span className="mx-1">Processing request</span>
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
              <div className="flex justify-between pb-4 px-3 gap-0 mt-5 w-full">
                <Button
                  className="bg-green-500 w-full  rounded-md hover:bg-green-700 text-white "
                  variant={"default"}
                >
                  Approve
                </Button>
                <Button
                  className="bg-red-500 w-full  rounded-md hover:bg-red-700 text-white "
                  variant={"default"}
                >
                  Rejected
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProcessingResult;
