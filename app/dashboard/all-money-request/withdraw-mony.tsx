import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from 'react'
// import { Input } from "@/components/ui/input";
import PendingResult from "./all-withraw-money-tabs/pendingResultTab";
import ProcessingResult from "./all-withraw-money-tabs/processingResultTab";
import ApprovedResult from "./all-withraw-money-tabs/approvedResultTab";
import RejectedResult from "./all-withraw-money-tabs/rejectedResultTab";
import PendingExcelResult from "./all-withraw-money-tabs/pendingExceelResultTab";
import RefundedResult from "./all-withraw-money-tabs/refundedResultTab";

//  icons...
import { FaArrowsRotate } from "react-icons/fa6";
import { IoCloseCircleSharp, IoTimeSharp } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";

export default function WithdrawMoney() {
    const [currentTab, setTab] = useState("add");

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-5 justify-between">
                {/* <div className="flex gap-5">
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="toggle-add">Add</Label>
                        <Switch id="toggle-add" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="toggle-withdraw">Withdraw</Label>
                        <Switch id="toggle-withdraw" />
                    </div>
                </div> */}
            </div>

            <Tabs defaultValue="pending" className="w-full flex flex-col mt-6 ">
                {/* ---- navigation buttons ---- */}
                <TabsList className=" m-auto bg-transparent sm:mb-0 mb-12 flex flex-wrap">

                    <TabsTrigger value="pending" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-orange-700 font-semibold text-xs sm:text-sm shadow-sm ">
                        <IoTimeSharp className="text-base mr-1" />
                        <span className="pb-[2px]">Pending</span>
                    </TabsTrigger>
                    <TabsTrigger value="processing" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-blue-400 font-semibold  text-xs sm:text-sm shadow-sm ">
                        < FaCircleExclamation className="mr-1" />
                        <span className="pb-[2px]">Processing</span>
                    </TabsTrigger>
                    <TabsTrigger value="approved" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-green-400 font-semibold text-xs sm:text-sm shadow-sm ">
                        <FaCheckCircle className="mr-1" />
                        <span className="pb-[2px]">Approved</span>
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-red-400 font-semibold  text-xs sm:text-sm shadow-sm ">
                        <IoCloseCircleSharp className="text-base mr-1" />
                        Rejected
                    </TabsTrigger>
                    <TabsTrigger value="refunded" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-xs sm:text-sm shadow-sm ">
                        <FaArrowsRotate className="text-sm mr-1" />
                        Refunded
                    </TabsTrigger>
                    <TabsTrigger value="pending excel" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-red-400 font-semibold text-xs sm:text-sm shadow-sm ">
                        <FaFileExcel className="mr-1"/>
                        Pending excel
                    </TabsTrigger>
                </TabsList>


                {/* ---- pending content ---- */}
                <TabsContent value="pending" className="flex flex-col w-full justify-center items-center">
                    <PendingResult />
                </TabsContent>

                {/* ---- processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                    <ProcessingResult />
                </TabsContent>

                {/* ---- Approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full justify-center items-center" >
                    <ApprovedResult />
                </TabsContent>

                {/* ---- Rejcted content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <RejectedResult />
                </TabsContent>

                {/* ---- Refunded content ---- */}
                <TabsContent value="refunded" className="flex flex-col w-full justify-center items-center">
                    <RefundedResult />
                </TabsContent>

                {/* ---- Pending excel content ---- */}
                <TabsContent value="pending excel" className="flex flex-col w-full justify-center items-center">
                    <PendingExcelResult />
                </TabsContent>
            </Tabs>


        </div>
    )
}


