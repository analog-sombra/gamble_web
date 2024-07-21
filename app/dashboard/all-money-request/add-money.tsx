"use client"

import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
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
                                return <div className="flex bg-gray-50 shadow-md flex-col justify-start items-center w-[360px] p-0 rounded-lg">

                                    <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                                        <span className="mx-1">Pending Request </span>
                                        (<Image
                                            preview={false}
                                            height={50}
                                            width={50}
                                            alt="NextUI hero Image"
                                            src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                                        />)

                                        <div className="grow"></div>

                                        <AlertDialog>
                                            <AlertDialogTrigger>
                                                <Button className="bg-transparent text-red-500 hover:bg-transparent hover:text-red-700 ">
                                                    {"-> Transfer"}
                                                </Button>
                                            </AlertDialogTrigger>

                                            {/* Gpay upi options  */}
                                            <AlertDialogContent>
                                                <div className="flex flex-col m-0 p-0">
                                                    <div className="flex justify-start items-center">
                                                        <span className="font-medium pr-6 text-[#4ca091]">
                                                            Transfer Request
                                                        </span>
                                                        {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                                                        <div className="grow"></div>
                                                        <AlertDialogCancel className="hover:bg-[#4ca091] hover:text-white">
                                                            <IoMdClose className="" />
                                                        </AlertDialogCancel>
                                                    </div>

                                                    <div className="grid w-full my-3 mt-10 max-w-sm items-center gap-3.5">
                                                        <Label htmlFor="picture">Search</Label>
                                                        <div className="flex w-full">
                                                            <Input className="rounded-r-none rounded-l-2xl" id="picture" type="text" placeholder="Search here" />
                                                            <Button className="rounded-l-none rounded-r-2xl  flex justify-self-start bg-[#4ca091] px-8">< FaSearch /></Button>
                                                        </div>
                                                    </div>

                                                    {/* ----------- search result ----------- */}
                                                    <div className="flex flex-col w-full my-3 mt-10 max-w-sm items-start justify-start gap-3">
                                                        
                                                        <div className="flex justify-start items-center">
                                                            <Input type="checkbox" />
                                                            
                                                        </div>

                                                    </div>

                                                </div>
                                            </AlertDialogContent>
                                        </AlertDialog>

                                    </div>

                                    {/* Payment infomation */}
                                    <div className="flex justify-between px-4 py-2 w-full">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex gap-3 items-center"> <MdSmartphone />  <span>+91 **********</span></div>
                                            <div className="flex gap-3 items-center"><BiSolidUser /> <span className="font-semibold text-sm ">  User Id: </span> 234</div>
                                            <div className="flex gap-3 items-center" > <FaMoneyBill /> <span className="font-semibold text-sm">  23,490 INR </span> </div>
                                            <div className="flex gap-3 items-center" > <CiCreditCard2 /> <span className="font-semibold text-sm">  TXN ID: </span> A7238912IDA</div>
                                            <div className="flex gap-3 items-center" > <FaRegCalendar /> <span className="font-semibold text-sm">  29/05/2005 </span></div>
                                        </div>
                                        <img className="w-20 " src="https://www.hackinclude.com/wp-content/uploads/2018/06/fake-paytm-receipt.jpg" alt="" />
                                    </div>

                                    {/* ... ... Seprator ... ... */}
                                    <div className="h-[0.5px] w-[70%] bg-gray-300 my-5 "></div>

                                    {/* ... ... Admin info ... ... */}

                                    <div className="flex px-4 items-center mb-3 w-full justify-between">
                                        <span className="font-semibold text-lg">Admin Info</span>
                                        <Tag className="px-4 py-[2px]" color="green">Online</Tag>
                                    </div>

                                    <div className="px-4 py-2 w-full justify-between items-center flex ">

                                        <div className="flex flex-col justify-between items-start gap-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-sm"><MdSmartphone /></span>
                                                <span>+91 **********</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-sm"><MdEmail /></span>
                                                <span>exampl@gmail.com</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-sm"><BiSolidUser /></span>
                                                <span>Name of admin</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col my-2 gap-2 justify-between ">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm">Last approved:-</span>
                                                <span> one minute ago </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm">Last rejected:-</span>
                                                <span> one minute ago </span>
                                            </div>
                                        </div>

                                    </div>


                                    {/* ... ... Action buttons ... ... */}
                                    <div className="flex justify-between pb-4 px-3 gap-0 mt-5 w-full">
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


