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
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        pending
                    </div>
                </TabsContent>

                {/* ---- Processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        pending
                    </div>
                </TabsContent>

                {/* ---- approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full m-0 justify-center items-center">
                    <div className="w-[250px] sm:w-[400px] flex flex-col gap-2 m-2 sm:mt-10 items-center">

                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="Enter UTR" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Select>
                                <SelectTrigger className="w-[180px] rounded-none rounded-l-md focus:out">
                                    <SelectValue placeholder="Time" />
                                </SelectTrigger>
                                <SelectContent>
                                    {/* <SelectLabel>Date</SelectLabel> */}
                                    <SelectItem value="apple">Today</SelectItem>
                                    <SelectItem value="banana">Yesterday</SelectItem>
                                    <SelectItem value="blueberry">Last 7 days</SelectItem>
                                    <SelectItem value="blueberry">Last 30 days</SelectItem>
                                    <SelectItem value="blueberry">This month</SelectItem>
                                    <SelectItem value="blueberry">Last month</SelectItem>
                                    <SelectItem value="blueberry">Custom range</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input className="h-full  rounded-none placeholder:font-semibold" type="date" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-56" type="submit">Filter</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>

                    </div>
                </TabsContent>

                {/* ---- pending content ---- */}
                <TabsContent value="entries" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* ---- pending content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        pending
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}


