"use client"

import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { CiCreditCard2 } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa6";
import { MdSmartphone } from "react-icons/md";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Drawer, Image } from "antd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { TbReload } from "react-icons/tb"; ''
import { Input, Tag } from "antd";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SwitchThumb } from "@radix-ui/react-switch";
import { FaMoneyBill } from "react-icons/fa6";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { IoMdClose } from "react-icons/io";
import PendingResult from "./all-add-money-tabs/pendingResultTab";
import ProcessingResult from "./all-add-money-tabs/processingResultTab";
import ApproveResult from "./all-add-money-tabs/approveResultTab";
import RejectResult from "./all-add-money-tabs/rejectResultTab";
import EnteriesResult from "./all-add-money-tabs/enteriesResultTab";
import PendingEnteriesResult from "./all-add-money-tabs/pendingEntriesResultTab";
import HighToLowResult from "./all-add-money-tabs/highToLowResultTab";

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

            <Tabs defaultValue="pending" className="w-full  flex flex-col sm:mt-2">
                <TabsList className=" mx-auto sm:mb-0 mb-24 bg-transparent w-full flex flex-wrap">
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
                    <TabsTrigger value="pending entries" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm text-red-400 font-semibold  text-sm shadow-sm ">
                        Pending entries
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-sm shadow-sm ">
                        Rejected
                    </TabsTrigger>
                    <TabsTrigger value="hight to low" className="bg-gray-100 px-5  mx-0 py-2 rounded-sm  text-purple-500 font-semibold text-sm shadow-sm ">
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

