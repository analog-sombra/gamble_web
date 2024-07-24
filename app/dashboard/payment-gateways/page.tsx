"use client"

import { Image } from 'antd'
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; import { Tag } from "antd";
import React from 'react'

const PaymentGatewayPage = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-between px-4 py-2'>
            <h1 className='text-xl font-bold text-gray-800 uppercase tracking-wide leading-normal whitespace-pre-wrap break-words'>Payment Gateways</h1>'



            <Table className="border-2">
                <TableHeader>
                    <TableRow className=" bg-zinc-100">
                        <TableHead className="font-bold text-base text-center border-r-2">No.</TableHead>
                        <TableHead className="font-bold text-base text-center border-r-2">
                            Name
                        </TableHead>
                        <TableHead className="font-bold text-base text-center border-r-2">
                            Image
                        </TableHead>
                        <TableHead className="font-bold text-base text-left border-r-2">
                            Status
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {tableValues.map((value, index) => (
                        <TableRow className="" key={index}>
                            <TableCell className="border-r-2 text-center">{++index}.</TableCell>
                            <TableCell className="gap-2 border-r-2 text-center flex justify-center items-center">

                                <span className='font-semibold text-lg'>{value.gatewayName}</span>
                            </TableCell>
                            <TableCell className=" text-center border-r-2">
                                <Image
                                    preview={false}
                                    width={value.width}
                                    // height={value.height}
                                    src={value.imagePath}
                                />
                            </TableCell>
                            <TableCell className="text-center border-r-2">
                                <Tag color={`${value.status === "Active" ? "green" : "red"}`}>
                                    {value.status}
                                </Tag>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    )
}

export default PaymentGatewayPage


const tableValues = [
    {
        gatewayName: 'Paytm',
        logoPath: "",
        imagePath: "https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256",
        width: 40,
        height: 40,
        status: "Active"
    },
    {
        gatewayName: 'Phone pe',
        logoPath: "",
        imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s",
        width: 40,
        height: 40,
        status: "Active"
    },
    {
        gatewayName: 'Google pay',
        logoPath: "",
        imagePath: "https://cdn-icons-png.flaticon.com/128/6124/6124998.png",
        width: 50,
        height: 50,
        status: "Active"
    },
    {
        gatewayName: 'UPI',
        logoPath: "",
        imagePath: "https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png",
        width: 60,
        height: 40,
        status: "Active"
    },
    {
        gatewayName: 'Paytm qr',
        logoPath: "",
        imagePath: "/paytm qr.png",
        width: 160,
        status: "Active"
    },
    {
        gatewayName: 'Phone pe qr',
        logoPath: "",
        imagePath: "/phone pe qr.png",
        width: 160,
        height: 40,
        status: "Inactive"
    },
    {
        gatewayName: 'Google pay qr',
        logoPath: "",
        imagePath: "/gpay qr.png",
        width: 160,
        height: 40,
        status: "Active"
    },
    {
        gatewayName: 'QR code',
        logoPath: "",
        imagePath: "/all qr.jpeg",
        width: 160,
        height: 40,
        status: "Active"
    },
    {
        gatewayName: 'Bank account',
        logoPath: "",
        imagePath: "https://www.clipartkey.com/mpngs/m/84-841013_bank-png-blue-bank-icon.png",
        width: 40,
        height: 40,
        status: "InActive"
    },

];
