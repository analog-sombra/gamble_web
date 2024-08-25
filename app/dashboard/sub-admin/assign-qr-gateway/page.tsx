"use client"

import { MdKeyboardArrowUp } from "react-icons/md";
import { Input } from '@/components/ui/input'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Image } from 'antd'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";


const AssignGateWaysPage = () => {

    const [paymentTabs, setPaymentTabs] = useState({
        paytm: false,
        phonePe: false,
        googlePay: false,
        upi: false,
        bank: false,
        withrawlBank: false,
    })


    return (
        <div className='flex flex-col items-center justify-start w-full'>

            <h1 className='text-2xl font-bold text-black'>Assign QR</h1>

            <div className='my-6 w-full '>
                <Label htmlFor="picture">Assign limit</Label>
                <Input className='w-[400px] mt-1' id="picture" type="text" placeholder="Enter limit" />
            </div>


            <div className="flex flex-col items-start w-full gap-5">
                <h1 className='text-lg font-bold text-gray-700'>Add Money Gateway</h1>

                {/* ... Paytm user ...  */}
                <div className='bg-gray-100 pt-1 rounded-lg w-[500px] shadow-md'>
                    <div onClick={e => { setPaymentTabs({ ...paymentTabs, paytm: !paymentTabs.paytm }) }}
                        className='flex px-4 py-3 items-center hover:bg-gray-50 cursor-pointer justify-start'>
                        <Image
                            className=""
                            preview={false}
                            width={90}
                            // height={30}
                            src="/paytm qr.png"
                            alt=""
                        />
                        {/* <p className="font-semibold mx-4">Assign paytm QR</p> */}
                        <div className="grow"></div>
                        {!paymentTabs.paytm
                            ? <MdOutlineKeyboardArrowDown className='text-xl' />
                            : <MdKeyboardArrowUp className='text-xl' />
                        }
                    </div>
                    {paymentTabs.paytm && <AsssignGateWayInput />}

                </div>


                {/* Phone pe */}
                <div className='bg-gray-100 pt-1 rounded-lg w-[500px] shadow-md'>
                    <div onClick={e => { setPaymentTabs({ ...paymentTabs, phonePe: !paymentTabs.phonePe }) }}
                        className='flex px-4 item-center py-2 items-center hover:bg-gray-50 cursor-pointer justify-start'>
                        <Image
                            className=""
                            preview={false}
                            width={120}
                            src="/phone pe qr.png"
                            alt=""
                        />
                        {/* <p className="font-semibold mx-2">Assign phone pe QR</p>*/}
                        <div className="grow"></div>
                        {!paymentTabs.phonePe
                            ? <MdOutlineKeyboardArrowDown className='text-xl' />
                            : <MdKeyboardArrowUp className='text-xl' />
                        }
                    </div>
                    {paymentTabs.phonePe && <AsssignGateWayInput />}

                </div>

                {/* Gpay */}
                <div className='bg-gray-100 pt-1 rounded-lg w-[500px] shadow-md'>
                    <div onClick={e => { setPaymentTabs({ ...paymentTabs, googlePay: !paymentTabs.googlePay }) }}
                        className='flex py-1 px-4 items-center hover:bg-gray-50 cursor-pointer justify-start'>
                        <Image
                            className=""
                            preview={false}
                            width={130}
                            // height={30}
                            src="/gpay qr.png"
                            alt=""
                        />
                        {/* <p className="font-semibold mx-7">Assign Google pay QR</p>*/}
                        <div className="grow"></div>
                        {!paymentTabs.googlePay
                            ? <MdOutlineKeyboardArrowDown className='text-xl' />
                            : <MdKeyboardArrowUp className='text-xl' />
                        }
                    </div>
                    {paymentTabs.googlePay && <AsssignGateWayInput />}
                </div>
            </div>


            <div className="flex justify-start w-full">
                <Button className="bg-blue-600 w-[10%] mt-10" > Assign QR </Button>
            </div>

        </div>
    )
}

export default AssignGateWaysPage



const AsssignGateWayInput = () => {
    return (
        <div className="flex flex-col  px-4  items-center justify-start gap-3">
            <div className="h-[0.5px] w-full bg-gray-300"></div>

            {/* ...... input ..... */}
            <div className="flex w-full pt-4">
                <Input placeholder="Enter Details" className="rounded-full h-11" id="picture" type="text" />
            </div>
            <div className="flex w-full">
                <Input placeholder="Enter admin / sub admin name" className="rounded-full h-11" id="picture" type="text" />
            </div>

            {/* ...... Range between ..... */}
            <div className="flex w-full gap-3 my-6 flex-wrap items-center justify-start">
                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>300.00 - 500.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>400.00 - 499.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>300.00 - 4000.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>1000.00 - 4999.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>5000.00 - 8000.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>300.00 - 4999.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>300.00 - 80000.00</span>
                </div>

                <div className="py-3 px-4 shadow-md bg-white rounded-md text-sm min-w-36 text-center font-semibold">
                    <span>00.00 - 00.00</span>
                </div>
            </div>

        </div>
    )
}



