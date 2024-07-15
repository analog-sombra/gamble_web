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
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        pending
                    </div>
                </TabsContent>

                {/* ---- processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        processing
                    </div>
                </TabsContent>

                {/* ---- Approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full justify-center items-center" >
                    <div className="w-[250px] sm:w-[400px] flex flex-col gap-2 mt-10 items-center">
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
                        <div className="flex h-10 w-full mb-3 max-w-sm items-center">
                            <Select>
                                <SelectTrigger className="w-[180px] rounded-none rounded-l-md focus:out">
                                    <SelectValue placeholder="ACC" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">Account number</SelectItem>
                                        <SelectItem value="banana">Account holder name</SelectItem>
                                        <SelectItem value="blueberry">Amount</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Input className="h-full  rounded-none placeholder:font-semibold" type="text" placeholder="Enter" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-56" type="submit">Search</Button>
                        </div>

                    </div>
                </TabsContent>

                {/* ---- Rejcted content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        Rejected
                    </div>
                </TabsContent>

                {/* ---- Refunded content ---- */}
                <TabsContent value="refunded" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        Refunded
                    </div>
                </TabsContent>

                {/* ---- Pending excel content ---- */}
                <TabsContent value="pending excel" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        Pending excl content
                    </div>
                </TabsContent>
            </Tabs>


        </div>
    )
}


