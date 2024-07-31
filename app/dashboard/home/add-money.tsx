import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";
import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { TbReload } from "react-icons/tb"; ''
import { Input } from "antd";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import PendingEnteriesResult from "./add-money-tabs/pendingEntriesResultTab";
import ProcessingResult from "./add-money-tabs/processingResultTab";
import ApproveResult from "./add-money-tabs/approveResultTab";
import PendingResult from "./add-money-tabs/pendingResultTab";
import RejectResult from "./add-money-tabs/rejectResultTab";

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
                        Pending
                    </TabsTrigger>
                    <TabsTrigger value="processing" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-blue-400 font-semibold  text-sm shadow-sm ">
                        Processing
                    </TabsTrigger>
                    <TabsTrigger value="approved" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-green-400 font-semibold text-sm shadow-sm ">
                        Approved
                    </TabsTrigger>
                    <TabsTrigger value="entries" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-red-400 font-semibold  text-sm shadow-sm ">
                        Entries
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-sm shadow-sm ">
                        Rejected
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
                    <PendingEnteriesResult />
                </TabsContent>

                {/* ---- Rejected content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <RejectResult />
                </TabsContent>
            </Tabs>

        </div>
    )
}


