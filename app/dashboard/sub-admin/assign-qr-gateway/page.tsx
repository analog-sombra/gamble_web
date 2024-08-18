"use client"

import { Input } from '@/components/ui/input'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Image } from 'antd'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const AssignQRGateWaysPage = () => {

    
    
    return (
        <div className='flex flex-col items-start justify-start w-full'>

            <h1 className='text-2xl font-bold text-black'>Assign QR Gateway</h1>

            <div className='my-6 w-[400px] '>
                <Label htmlFor="picture">Assign limit</Label>
                <Input id="picture" type="text" placeholder="Enter limit" />
            </div>

            <h1 className='text-base font-bold text-gray-700'>Add Money Gateway</h1>
            <div className="flex sm:flex-row  flex-col items-start justify-start">
                <Accordion type="single" collapsible className="">
                    {/* ........ Paytm ..........*/}
                    <AccordionItem value="item-1" className='mt-5'>
                        <AccordionTrigger className='bg-slate-100 w-full rounded-lg p-0 m-0 min-h-[55px] px-5 flex items-center justify-between'>
                            <div className='mr-10'>
                                <Image
                                    className=""
                                    preview={false}
                                    width={80}
                                    src="/paytm qr.png"
                                    alt=""
                                />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='w-[30%] rounded-sm'>
                            {/* ----------- search result ----------- */}
                            <div className="flex flex-col  px-4  my-3 mt-3 items-center justify-start gap-3">
                                {/* ...... input ..... */}
                                <div className="flex w-full">
                                    <Input placeholder="Enter Details" className="rounded-full h-11" id="picture" type="text" />
                                </div>
                                <div className="flex w-full">
                                    <Input placeholder="Enter admin / sub admin name" className="rounded-full h-11" id="picture" type="text" />
                                </div>

                                {/* ...... Range between ..... */}
                                <div className="flex w-full gap-3 my-6 flex-wrap items-center justify-start">
                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>300.00 - 500.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>400.00 - 499.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>300.00 - 4000.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>1000.00 - 4999.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>5000.00 - 8000.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>300.00 - 4999.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>300.00 - 80000.00</span>
                                    </div>

                                    <div className="py-3 px-4 shadow-md bg-zinc-100 rounded-md text-sm min-w-36 text-center font-semibold">
                                        <span>00.00 - 00.00</span>
                                    </div>
                                </div>

                            </div>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
                {/* Phone pe */}
                {/* <div className='m-3 min-h-[55px] px-10 bg-slate-100 flex flex-col justify-center shadow-md'>
                    <Image
                        className="w-13 "
                        preview={false}
                        width={90}
                        src="https://w7.pngwing.com/pngs/345/591/png-transparent-phonepe-hd-logo.png"
                        alt=""
                    />
                </div> */}

                {/* Gpay */}
                {/* <div className='m-3 min-h-[55px] px-10 bg-slate-100 flex flex-col justify-center shadow-md'>
                    <Image
                        className="w-13 "
                        preview={false}
                        width={50}
                        src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png"
                        alt=""
                    />
                </div> */}

                {/* Upi */}
                {/* <div className='m-3 min-h-[55px] px-10 bg-slate-100 flex flex-col justify-center shadow-md'>
                    <Image
                        className="w-13"
                        preview={false}
                        width={50}
                        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"
                        alt=""
                    />
                </div> */}

                {/* Bank */}
                {/* <div className='m-3 min-h-[55px] px-10 bg-slate-100 flex flex-col justify-center shadow-md'>
                    <Image
                        className="w-13 "
                        preview={false}
                        width={30}
                        src="https://www.clipartkey.com/mpngs/m/84-841013_bank-png-blue-bank-icon.png"
                        alt=""
                    />
                </div> */}

            </div>

        </div>
    )
}

export default AssignQRGateWaysPage
