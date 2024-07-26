"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { create } from "domain";


const ExcelRecord = () => {

    const [currentTab, setCurrentTab] = useState("pending")


    return (
        <div className='flex flex-col w-full justify-start item-center'>
            <Tabs
                defaultValue={currentTab}
                className="w-full flex flex-col mt-7 sm:mt-14 mb-0 sm:mb-12"
            >
                <TabsList className=" m-auto mb-0  ">
                    <TabsTrigger
                        className=" text-lg"
                        value="pending"
                        onClick={() => setCurrentTab("pending")}
                    >
                        Pending
                    </TabsTrigger>

                    <TabsTrigger
                        className=" text-lg"
                        value="approve"
                        onClick={() => setCurrentTab("approv")}
                    >
                        Approve
                    </TabsTrigger>

                    <TabsTrigger
                        className=" text-lg"
                        value="delete"
                        onClick={() => setCurrentTab("delete")}
                    >
                        Delete
                    </TabsTrigger>
                </TabsList>

                {/* ............ Pending ............ */}
                <TabsContent className="m-0 p-0  w-full flex flex-col items-center" value="pending">
                    <h1 className='font-bold text-xl mt-5'>Pending excel record (1)</h1>

                    <Table className="mt-4">
                        <TableHeader>
                            <TableRow className=" bg-zinc-100">
                                <TableHead className="font-bold text-base text-center">
                                    No.
                                </TableHead>
                                <TableHead className="font-bold text-base text-center">
                                    Sheet name / Create name
                                </TableHead>
                                <TableHead className="font-bold text-base text-center">
                                    Total Amount
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    No. of request
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Transfer
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Benificery
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Status
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Approve excel
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Delete excel
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pendingExcelInfoList.map((excelInfo: any, index: number) => (
                                <TableRow className="" key={index}>
                                    <TableCell className="text-center">{++index}</TableCell>
                                    <TableCell className="text-center">{excelInfo.sheeNameOrDate}</TableCell>
                                    <TableCell className="text-center">{excelInfo.totalAmount}</TableCell>
                                    <TableCell className="text-center">
                                        {excelInfo.noOfReqests}
                                    </TableCell>
                                    <TableCell className="text-left pl-12">
                                        {excelInfo.transfer}
                                    </TableCell>
                                    <TableCell className="text-left">{excelInfo.benificery}</TableCell>
                                    <TableCell className="text-left">{excelInfo.status}</TableCell>
                                    <TableCell className="text-left">{excelInfo.approveExcel}</TableCell>
                                    <TableCell className="text-left">{excelInfo.deleteExcel}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>

                {/* ............ approve ............ */}
                <TabsContent className="m-0 p-0  w-full flex flex-col items-center" value="approve">
                    <h1 className='font-bold text-xl mt-5'>Approve excel record (1)</h1>

                    <Table className="mt-4">
                        <TableHeader>
                            <TableRow className=" bg-zinc-100">
                                <TableHead className="font-bold text-base text-center">
                                    No.
                                </TableHead>
                                <TableHead className="font-bold text-base text-center">
                                    Sheet name
                                </TableHead>
                                <TableHead className="font-bold text-base text-center">
                                    Total Amount
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    No. of request
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Transfer
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Benificery
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Status
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Remarks
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Create date
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Delete date
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {approveExcelInfoList.map((excelInfo: any, index: number) => (
                                <TableRow className="" key={index}>
                                    <TableCell className="text-center">{++index}</TableCell>
                                    <TableCell className="text-center">{excelInfo.sheetname}</TableCell>
                                    <TableCell className="text-center">{excelInfo.totalAmount}</TableCell>
                                    <TableCell className="text-center">
                                        {excelInfo.noOfReqests}
                                    </TableCell>
                                    <TableCell className="text-left pl-12">
                                        {excelInfo.transfer}
                                    </TableCell>
                                    <TableCell className="text-left">{excelInfo.benificery}</TableCell>
                                    <TableCell className="text-left">{excelInfo.status}</TableCell>
                                    <TableCell className="text-left">{excelInfo.remarks}</TableCell>
                                    <TableCell className="text-left">{excelInfo.createdAt}</TableCell>
                                    <TableCell className="text-left">{excelInfo.deletedAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>

                {/* ............ delete ............ */}
                <TabsContent className="m-0 p-0 my-6 w-full flex flex-col items-center" value="delete">
                    <h1 className='font-bold text-xl '>Delete excel record (1)</h1>

                    <Table className="mt-4">
                        <TableHeader>
                            <TableRow className=" bg-zinc-100">
                                <TableHead className="font-bold text-base text-center">
                                    No.
                                </TableHead>
                                <TableHead className="font-bold text-base text-center">
                                    Sheet name
                                </TableHead>
                                <TableHead className="font-bold text-base text-center">
                                    Total Amount
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    No. of request
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Transfer
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Benificery
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Status
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Create date
                                </TableHead>
                                <TableHead className="font-bold text-base text-left">
                                    Delete date
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {deleteExcelInfoList.map((excelInfo: any, index: number) => (
                                <TableRow className="" key={index}>
                                    <TableCell className="text-center">{++index}</TableCell>
                                    <TableCell className="text-center">{excelInfo.sheetname}</TableCell>
                                    <TableCell className="text-center">{excelInfo.totalAmount}</TableCell>
                                    <TableCell className="text-center">
                                        {excelInfo.noOfReqests}
                                    </TableCell>
                                    <TableCell className="text-left pl-12">
                                        {excelInfo.transfer}
                                    </TableCell>
                                    <TableCell className="text-left">{excelInfo.benificery}</TableCell>
                                    <TableCell className="text-left">{excelInfo.status}</TableCell>
                                    <TableCell className="text-left">{excelInfo.createdAt}</TableCell>
                                    <TableCell className="text-left">{excelInfo.deletedAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ExcelRecord

const deleteExcelInfoList: any = [
    {
        sheetname: "",
        totalAmount: 2,
        noOfReqests: 5,
        transfer: 5,
        benificery: "",
        status: "Approve",
        createdAt: "",
        deletedAt: ""
    }
]

const approveExcelInfoList: any = [
    {
        sheetname: "",
        totalAmount: 2,
        noOfReqests: 5,
        transfer: 5,
        benificery: "",
        status: "Approve",
        remarks: "",
        createdAt: "",
        deletedAt: ""
    }
]

const pendingExcelInfoList: any = [
    {
        sheeNameOrDate: "",
        totalAmount: "",
        noOfReqests: 5,
        transfer: "",
        benificery: "",
        status: "Approve",
        approveExcel: "",
        deleteExcel: ""
    },

]
