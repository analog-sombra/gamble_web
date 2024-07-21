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


            <Tabs defaultValue="pending" className="w-full flex flex-col mt-6 ">
                {/* ---- navigation buttons ---- */}
                <TabsList className=" m-auto bg-transparent sm:mb-0 mb-12 flex flex-wrap">

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
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* ---- Processing content ---- */}
                <TabsContent value="processing" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>

                    </div>
                </TabsContent>

                {/* ---- approved content ---- */}
                <TabsContent value="approved" className="flex flex-col w-full m-0 justify-center items-center">
                    <div className="w-[250px] sm:w-[400px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>

                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="Enter UTR" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Select>
                                <SelectTrigger className="w-[180px] rounded-none rounded-l-md focus:out">
                                    <SelectValue defaultValue={"Today"} placeholder="Time" />
                                </SelectTrigger>
                                <SelectContent>
                                    {/* <SelectLabel>Date</SelectLabel> */}
                                    <SelectItem value="Today">Today</SelectItem>
                                    <SelectItem value="Yesterday">Yesterday</SelectItem>
                                    <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                                    <SelectItem value="Last 30 days">Last 30 days</SelectItem>
                                    <SelectItem value="This month">This month</SelectItem>
                                    <SelectItem value="Last month">Last month</SelectItem>
                                    <SelectItem value="Custom range">Custom range</SelectItem>
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
                    <div className="flex flex-wrap justify-start gap-5 my-9 items-center">
                        {
                            players.map((user: Players) => {
                                return <div className="flex bg-gray-50 shadow-md flex-col justify-start items-center w-[360px] py-4 px-4 rounded-lg">
                                    
                                    {/* Payment infomation */}
                                    <div className="flex justify-between w-full">
                                        <div className="">
                                            <div><span className="font-semibold text-sm"> phone number:  </span> +91 ********</div>
                                            <div><span className="font-semibold text-sm"> User Id: </span> 234</div>
                                            <div><span className="font-semibold text-sm"> amount: </span> 23,490</div>
                                            <div><span className="font-semibold text-sm"> txn ID: </span> A7238912IDA</div>
                                            <div><span className="font-semibold text-sm"> date: </span>29/05/2005</div>
                                        </div>
                                        <img className="w-20 " src="https://www.hackinclude.com/wp-content/uploads/2018/06/fake-paytm-receipt.jpg" alt="" />
                                    </div>

                                    {/* ... ... Seprator ... ... */}
                                    <div className="h-[0.5px] w-full bg-gray-300 my-5"></div>

                                    {/* ... ... Admin info ... ... */}
                                    <div className="flex items-center mb-5 w-full justify-between">
                                        <span className="font-semibold text-lg">Admin Info</span>
                                        <Tag className="px-4 py-[2px]" color="green">Online</Tag>
                                    </div>

                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Phone number:-</span>
                                            <span>+91 **********</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Last approved:-</span>
                                            <span> one minute ago </span>
                                        </div>
                                    </div>

                                    <div className="flex my-2 justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Gmail:-</span>
                                            <span>exampl@gmail.com</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Last rejected:-</span>
                                            <span> one minute ago </span>
                                        </div>
                                    </div>

                                    {/* ... ... Action buttons ... ... */}
                                    <div className="flex justify-between gap-0 mt-5 w-full">
                                        <Button className="bg-green-500 py-2  hover:bg-green-700 text-white w-full" variant={"default"}>
                                            Approve
                                        </Button>
                                        <Button className="bg-blue-500 py-2  hover:bg-blue-700 text-white w-full hover:text-white" variant={"outline"}>
                                            processing
                                        </Button>
                                        <Button className="bg-red-500  hover:bg-red-700 w-full" variant={"destructive"}>
                                            Rejected
                                        </Button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </TabsContent>

                {/* ---- entries content ---- */}
                <TabsContent value="entries" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* ---- pending entries content ---- */}
                <TabsContent value="pending entries" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* ---- rejected content ---- */}
                <TabsContent value="rejected" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* ---- hight to low content ---- */}
                <TabsContent value="hight to low" className="flex flex-col w-full justify-center items-center">
                    <div className="w-[250px] sm:w-[350px] flex flex-col gap-2 mt-10 items-center">
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="All" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
                            <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold"
                                type="text"
                                placeholder="User I'd" />
                            <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

type Players = {
    userId: number,
    bidAmount: number,
    winAmount: number,
}


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


