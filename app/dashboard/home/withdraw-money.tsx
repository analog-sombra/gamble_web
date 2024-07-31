import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch";
import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Input } from "antd";
import ProcessingResult from "./withraw-money-tabs/processingResultTab";
import PendingResult from "./withraw-money-tabs/pendingResultTab";
import ApprovedResult from "./withraw-money-tabs/approvedResultTab";
import RejectedResult from "./withraw-money-tabs/rejectedResultTab";
import RefundedResult from "./withraw-money-tabs/refundedResultTab";
import PendingExcelResult from "./withraw-money-tabs/pendingExceelResultTab";

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
                    <TabsTrigger value="excel" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-grey-400 font-semibold text-sm shadow-sm ">
                        Excel
                    </TabsTrigger>
                    <TabsTrigger value="pending" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-orange-700 font-semibold text-sm shadow-sm ">
                        Pending
                    </TabsTrigger>
                    <TabsTrigger value="processing" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-blue-400 font-semibold  text-sm shadow-sm ">
                        Processing
                    </TabsTrigger>
                    <TabsTrigger value="approved" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-green-400 font-semibold text-sm shadow-sm ">
                        Approved
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-red-400 font-semibold  text-sm shadow-sm ">
                        Rejected
                    </TabsTrigger>
                    <TabsTrigger value="refunded" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-sm shadow-sm ">
                        Refunded
                    </TabsTrigger>
                    <TabsTrigger value="pending excel" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-red-400 font-semibold text-sm shadow-sm ">
                        Pending excel
                    </TabsTrigger>
                </TabsList>


                {/* ---- Excel  content ---- */}
                <TabsContent value="excel" className="flex flex-col w-full justify-center items-center" >
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <Input className="" placeholder="Minimum Amount"></Input>
                        <Input className="" placeholder="Maximum Amount"></Input>

                        <div className="h-2 "></div>
                        <button className="w-full bg-green-500 py-1 rounded-md  text-white font-normal">  Sumbit</button>
                        <button className="w-full bg-zinc-400  py-1 rounded-md text-white font-normal">  Cancel</button>

                        <div className="h-2"></div>
                        <div className="w-full flex justify-between items-start">
                            <button className="bg-blue-400 text-white py-1 px-2 rounded-md">Generate</button>
                            <span className="">Total amount: 230</span>
                        </div>
                    </div>
                </TabsContent>

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


