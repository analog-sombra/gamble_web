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
import PendingResult from "./all-withraw-money-tabs/pendingResultTab";
import ProcessingResult from "./all-withraw-money-tabs/processingResultTab";
import ApprovedResult from "./all-withraw-money-tabs/approvedResultTab";
import RejectedResult from "./all-withraw-money-tabs/rejectedResultTab";
import PendingExcelResult from "./all-withraw-money-tabs/pendingExceelResultTab";
import RefundedResult from "./all-withraw-money-tabs/refundedResultTab";

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
                        Pending
                    </TabsTrigger>
                    <TabsTrigger value="processing" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-blue-400 font-semibold  text-xs sm:text-sm shadow-sm ">
                        Processing
                    </TabsTrigger>
                    <TabsTrigger value="approved" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-green-400 font-semibold text-xs sm:text-sm shadow-sm ">
                        Approved
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-red-400 font-semibold  text-xs sm:text-sm shadow-sm ">
                        Rejected
                    </TabsTrigger>
                    <TabsTrigger value="refunded" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-xs sm:text-sm shadow-sm ">
                        Refunded
                    </TabsTrigger>
                    <TabsTrigger value="pending excel" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-red-400 font-semibold text-xs sm:text-sm shadow-sm ">
                        Pending excel
                    </TabsTrigger>
                </TabsList>


                {/* ---- pending content ---- */}
                <TabsContent value="pending" className="flex flex-col w-full justify-center items-center">
                   <PendingResult/>
                </TabsContent>

                {/* ---- processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                 <ProcessingResult/>
                </TabsContent>

                {/* ---- Approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full justify-center items-center" >
                  <ApprovedResult/>
                </TabsContent>

                {/* ---- Rejcted content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                   <RejectedResult/>
                </TabsContent>

                {/* ---- Refunded content ---- */}
                <TabsContent value="refunded" className="flex flex-col w-full justify-center items-center">
                  <RefundedResult/>
                </TabsContent>

                {/* ---- Pending excel content ---- */}
                <TabsContent value="pending excel" className="flex flex-col w-full justify-center items-center">
                   <PendingExcelResult/>
                </TabsContent>
            </Tabs>


        </div>
    )
}


