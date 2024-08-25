import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input, Tag } from "antd";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { FaCopy } from "react-icons/fa6";
import { MdSmartphone, MdEmail } from "react-icons/md";
import { Image } from "antd";
import ApproveDailouge from "../DialogeBoxes/approve";
import RejectDailouge from "../DialogeBoxes/reject";
import TransferDailouge from "../DialogeBoxes/transfer";
import { FaMoneyBill, FaRegCalendar, FaSearch } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import SearchFiedls from "@/components/Dashboard/SearchFiedls";
import FilterField from "@/components/Dashboard/FilterField";

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

const ApprovedResult = () => {
  return (
    <>
      

      <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
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

              <div className="flex justify-end w-center">
                <span className="text-start ml-[150px] justify-self-end text-green-500 font-bold ">
                  Approved
                </span>
              </div>
              <div className="flex w-full px-5 mt-4 justify-start gap-4">
                <Input
                  className="rounded-3xl "
                  id="picture"
                  type="text"
                  placeholder="Type refund"
                />
                <Button className="rounded-3xl text-xs flex justify-self-start bg-[#4ca091] px-3 ">
                  Refund now
                </Button>
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
              <div className="min-h-7  w-full flex items-center justify-end">
                <Tag
                  className="w-full text-center p-0 m-0 py-[2px]"
                  color="green"
                >
                  Approved
                </Tag>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ApprovedResult;
