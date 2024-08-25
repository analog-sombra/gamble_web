import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from 'react'

//  icons...
import { IoCloseCircleSharp, IoTimeSharp } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import SearchFiedls from "@/components/Dashboard/SearchFiedls";
import PendingRequestCard from "@/components/infoCards/PendingResultCard";
import ProcessingResultCard from "@/components/infoCards/ProcessingResultCard";
import ApproveRequestCard from "@/components/infoCards/ApproveRequestCard";
import FilterField from "@/components/Dashboard/FilterField";
import EnteriesRequestCard from "@/components/infoCards/EnteriesRequestCard";
import RejetedRequestCard from "@/components/infoCards/RejetedRequestCard";

export default function AddMoney() {
    const [currentTab, setTab] = useState("add");

    return (
        <div>
            <div className="flex gap-5 justify-between items-center">

                <div className="flex gap-2 items-center my-5 flex-row justify-center md:flex-row">
                </div>

                {/* <div className="p-2 text-center">
                    <div className=" text-[12px]  sm:text-medium"> Add limit: 234</div>
                </div> */}

            </div>


            <Tabs defaultValue="pending" className="w-full flex flex-col mt-0 ">
                {/* ---- navigation buttons ---- */}
                <TabsList className=" mx-auto bg-transparent sm:mb-0 mb-12 flex flex-wrap">
                    <TabsTrigger value="pending" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-orange-700 font-semibold text-sm shadow-sm ">
                        <IoTimeSharp className="text-base mr-1" />
                        <span className="pb-[2px]">Pending</span>
                    </TabsTrigger>
                    <TabsTrigger value="processing" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-blue-400 font-semibold  text-sm shadow-sm ">
                        < FaCircleExclamation className="mr-1" />
                        <span className="pb-[2px]">Processing</span>
                    </TabsTrigger>
                    <TabsTrigger value="approved" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-green-400 font-semibold text-sm shadow-sm ">
                        <FaCheckCircle className="mr-1" />
                        <span className="pb-[2px]">Approved</span>
                    </TabsTrigger>
                    <TabsTrigger value="entries" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-red-400 font-semibold  text-sm shadow-sm ">
                        < MdPlaylistAddCheckCircle className="text-lg mr-1" />
                        Entries
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-sm shadow-sm ">
                        <IoCloseCircleSharp className="text-base mr-1" />
                        Rejected
                    </TabsTrigger>
                </TabsList>

                {/* ---- pending content ---- */}
                <TabsContent value="pending" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <SearchFiedls placeholder="All" />
                        <SearchFiedls placeholder="User Id" />
                    </div>

                    <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
                        {Array.from([1, 2, 3, 4, 5, 6]).map(() => {
                            return (
                                <PendingRequestCard showAdminInfo={false} />
                            );
                        })
                        }
                    </div>
                </TabsContent>

                {/* ---- Processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                    <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
                        {Array.from([1, 2, 3, 4, 5, 6]).map(() => {
                            return (
                                <ProcessingResultCard showAdminInfo={false} />
                            );
                        })
                        }
                    </div>
                </TabsContent>

                {/* ---- approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full m-0 justify-center items-center">
                    <div className="w-[250px] sm:w-[400px] flex flex-col gap-2 m-2 sm:mt-10 items-center">
                        <SearchFiedls placeholder="Enter UTR" />
                        <FilterField />
                        <SearchFiedls placeholder="User id" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 my-5 items-center">
                        {Array.from([1, 2, 3, 4, 5, 6]).map(() => {
                            return (
                                <ApproveRequestCard showAdminInfo={false} />
                            );
                        })}
                    </div>
                </TabsContent>

                {/* ---- entries content ---- */}
                <TabsContent value="entries" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <SearchFiedls placeholder="All" />
                        <SearchFiedls placeholder="User id" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 my-9">
                        {Array.from([1, 2, 3, 4, 5, 6]).map(() => {
                            return (
                                <EnteriesRequestCard showAdminInfo={false} />
                            );
                        })}
                    </div>
                </TabsContent>

                {/* ---- Rejected content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <SearchFiedls placeholder="All" />
                        <SearchFiedls placeholder="User Id" />6
                    </div>

                    <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
                        {Array.from([1, 2, 3, 4, 5, 6]).map(() => {
                            return (
                                <RejetedRequestCard />
                            );
                        })}
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

