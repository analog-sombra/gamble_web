"use client"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from 'react'

import PendingResult from "./all-add-money-tabs/pendingResultTab";
import ProcessingResult from "./all-add-money-tabs/processingResultTab";
import ApproveResult from "./all-add-money-tabs/approveResultTab";
import RejectResult from "./all-add-money-tabs/rejectResultTab";
import EnteriesResult from "./all-add-money-tabs/enteriesResultTab";
import PendingEnteriesResult from "./all-add-money-tabs/pendingEntriesResultTab";
import HighToLowResult from "./all-add-money-tabs/highToLowResultTab";

// Icons ....
import { IoTimeSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";



export default function AddMoney() {
    const [currentTab, setTab] = useState("pending");

    return (
        <div>

            <Tabs value={currentTab} className="w-full  flex flex-col sm:mt-2">
                <TabsList className=" mx-auto sm:mb-0 mb-24 bg-transparent w-full flex flex-wrap">
                    <TabsTrigger
                        onClick={e => setTab("pending")}
                        value="pending" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-orange-700 flex items-center gap-1 font-semibold text-xs sm:text-sm shadow-sm ">
                        <IoTimeSharp className="text-base" />
                        <span className="pb-[2px]">Pending</span>
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={e => setTab("processing")}
                        value="processing" className="bg-gray-100 px-5 flex items-center gap-1  mx-0 py-2 rounded-sm text-blue-400 font-semibold  text-xs sm:text-sm shadow-sm ">
                        < FaCircleExclamation />
                        <span className="pb-[2px]">Processing</span>
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={e => setTab("approved")}
                        value="approved"
                        className="bg-gray-100 px-5  mx-0 py-2 flex items-center gap-1 rounded-sm  text-green-400 font-semibold text-xs sm:text-sm shadow-sm ">
                        <FaCheckCircle />
                        <span className="pb-[2px]">Approved</span>
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={e => setTab("entries")}
                        value="entries" className="bg-gray-100 px-5  flex items-center gap-1 mx-0 py-2 rounded-sm text-zinc-600 font-semibold  text-xs sm:text-sm shadow-sm ">
                        < MdPlaylistAddCheckCircle className="text-lg" />
                        Entries
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={e => setTab("pending entries")}
                        value="pending entries" className="bg-gray-100 px-5 flex items-center gap-1  mx-0 py-2 rounded-sm text-purple-400 font-semibold  text-xs sm:text-sm shadow-sm ">
                        <MdOutlinePendingActions className="text-lg" />
                        Pending entries
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={e => setTab("rejected")}
                        value="rejected" className="bg-gray-100 px-5  flex items-center gap-1 mx-0 py-2 rounded-sm  text-red-500 font-semibold text-xs sm:text-sm shadow-sm ">
                        <IoCloseCircleSharp className="text-base" />
                        Rejected
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={e => setTab("hight to low")}
                        value="hight to low" className="bg-gray-100 px-5  flex items-center gap-1 mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-xs sm:text-sm shadow-sm ">
                        <GoGraph className="text-base" />
                        High to low
                    </TabsTrigger>
                </TabsList>

                {/* ---- pending content ---- */}
                <TabsContent value="pending" className="flex flex-col w-full justify-center items-center">
                    <PendingResult />
                </TabsContent>

                {/* ---- Processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                    <ProcessingResult />
                </TabsContent>

                {/* ---- approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full m-0 justify-center items-center">
                    <ApproveResult />
                </TabsContent>

                {/* ---- entries content ---- */}
                <TabsContent value="entries" className="flex flex-col w-full justify-center items-center">
                    <EnteriesResult />
                </TabsContent>

                {/* ---- pending entries content ---- */}
                <TabsContent value="pending entries" className="flex flex-col w-full justify-center items-center">
                    <PendingEnteriesResult />
                </TabsContent>

                {/* ---- rejected content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <RejectResult />
                </TabsContent>

                {/* ---- hight to low content ---- */}
                <TabsContent value="hight to low" className="flex flex-col w-full justify-center items-center">
                    <HighToLowResult />
                </TabsContent>
            </Tabs>

        </div>
    )
}

