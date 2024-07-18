"use client"

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Input, Tag } from 'antd';


const SubAdminPage = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full h-full bg-white rounded-md">
                <h1 className="m-auto font-bold text-2xl my-3">Sub Admin</h1>

                <div className="flex justify-between w-full items-center">

                    <div className="flex gap-3 my-10 w-full justify-start items-center">
                        <div className="border px-4 py-0  bg-slate-100 shadow-md flex flex-col justify-center items-center">
                            <span className="font-semibold">Total Withdrawal Balance</span>
                            <span className="">23,000</span>
                        </div>
                    </div>

                    <div className="flex h-10 w-[400px] mb-1 max-w-sm items-center">
                        <Input className="h-full  rounded-none rounded-l-md placeholder:font-semibold" type="text" placeholder="User I'd" />
                        <Button className="h-full bg-blue-500  rounded-none rounded-r-md w-40" type="submit">Search</Button>
                    </div>
                </div>

                <div className="w-full flex-1 rounded-lg p-3">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='text-center'>No</TableHead>
                                <TableHead className='text-center'>Online/Offline</TableHead>
                                <TableHead className='text-center'>Name</TableHead>
                                <TableHead className='text-center'>Email</TableHead>
                                <TableHead className='text-center'>Level</TableHead>
                                <TableHead className='text-center'>Status</TableHead>
                                <TableHead className='text-center'>Direct add money</TableHead>
                                <TableHead className='text-center'>Withdrawal limit (₹)</TableHead>
                                <TableHead className='text-center'>Add money limit (₹)</TableHead>
                                <TableHead className='text-center'>Assign gateways</TableHead>
                                <TableHead className='text-center'>gateways detail</TableHead>
                                <TableHead className='text-center'>Assign QR</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="">
                            {games.map((game) => (
                                <TableRow className="" key={game.no}>
                                    <TableCell className="min-w-15">{game.no}</TableCell>
                                    <TableCell className="min-w-32 flex flex-col items-center  gap-2">

                                        <>
                                            <Tag className='w-20 flex justify-center' color="green">{"Add money"}</Tag>
                                            <Tag className='w-20 flex justify-center' color="green">{"Widthrawal"}</Tag>
                                            <Tag className='w-20 flex justify-center' color="green">{"Urgent"}</Tag>
                                        </>

                                    </TableCell>
                                    <TableCell className="  font-medium">{game.gameName}</TableCell>
                                    <TableCell className="flex flex-col">
                                        {game.openTime}
                                        <div>+91 ********</div>
                                        <div className='font-semibold text-sm'>User Id: 1</div>
                                    </TableCell>
                                    <TableCell className="min-w-28">
                                        <Tag className='w-20 flex justify-center' color="gold">Admin</Tag>
                                    </TableCell>
                                    <TableCell>
                                        <Tag className='w-20 flex justify-center' color="green">Actived</Tag>
                                    </TableCell>
                                    <TableCell>
                                        <div className='text-green-600 font-semibold'>₹ 7,000</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className='text-green-600 font-semibold'>₹ 7,000</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className='text-green-600 font-semibold'>₹ 7,000</div>
                                    </TableCell>
                                    <TableCell>
                                        <Button className='bg-blue-500 hover:bg-blue-900 py-1 px-2 text-xs'>Assign gateway</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button className='bg-blue-500 hover:bg-blue-900 py-1 px-2 text-xs'>Gateways</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button className='bg-blue-500 hover:bg-blue-900 py-0 px-2 text-xs'>Assign QR</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                    <Button className="w-full mt-4">View All</Button>
                </div>
            </div>
        </>
    )
}

export default SubAdminPage


const games = [
    {
        no: 1,
        gameName: "admin",
        openTime: "example@gmail.com",
        closeTime: "open",
        status: "open",
    },
    {
        no: 2,
        gameName: "Silver guru",
        openTime: "05:30 am",
        closeTime: "03:50pm",
        status: "open",
    },
    {
        no: 3,
        gameName: "Faridabad",
        openTime: "05:30 am",
        closeTime: "05:30 pm",
        status: "close",
    },
    {
        no: 4,
        gameName: "Gaziabad",
        openTime: "5:30 am",
        closeTime: "8:00 pm",
        status: "open",
    },
    {
        no: 5,
        gameName: "Gali",
        openTime: "5:30 am",
        closeTime: "11:10 pm",
        status: "close",
    },
];