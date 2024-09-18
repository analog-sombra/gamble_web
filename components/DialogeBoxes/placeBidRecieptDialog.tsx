import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Input } from "antd";
import { Input as input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-select';


const PlaceBidReciept = (probs: any) => {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger className='w-full m-0 p-0'>
                    <span className="text-blue-500 text-md hover:text-blue-700 cursor-pointer">View Detail</span>

                </AlertDialogTrigger>

                {/*  --- Transfer ---  */}
                <AlertDialogContent className='p-0 pb-12 sm:w-[470px] max-h-[75%] overflow-auto'>
                    <div className="flex flex-col w-full ">

                        <div className="flex px-4 py-2 justify-start items-center bg-[#e3ffde]">
                            <span className="font-medium pr-6 text-[#7cb673]">
                                Bid Placed Raciept
                            </span>
                            {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                            <div className="grow"></div>
                            <AlertDialogCancel className="bg-[#9ad897] text-white">
                                <IoMdClose className="font-bold" />
                            </AlertDialogCancel>
                        </div>

                        <div className="flex w-full my-3  mt-7 items-center justify-center  gap-3.5">
                            <Label className='text-xl' htmlFor="picture">Silver guru play</Label>
                        </div>

                        <div className='flex  justify-between mx-8 items-center'>
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Game name:</span>
                                <span>Silver guru</span>
                            </div>
                            <div className='flex flex-col items-end'>
                                <span className='font-semibold '>Total bidding ammount:</span>
                                <span>2,000</span>
                            </div>
                        </div>

                        <div className="w-full h-[0.4px] my-3 bg-zinc-300"></div>
                        <div className='flex  justify-between mx-8 items-center'>
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Playe Date:</span>
                                <span>09 sept 2024</span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='font-semibold'>Txn ID:</span>
                                <span>3248732342</span>
                            </div>
                        </div>



                        <div className="flex w-full  text-md my-3  mt-7 items-center justify-center  gap-3.5">
                            <Label className='text-md font-semibold' htmlFor="picture">Numbers</Label>
                        </div>
                        <div className="grid grid-cols-5 grid-rows-5 gap-1 p-1">
                            {Array.from({ length: 25 }, (_, i) => (
                                <div key={i} className="flex items-center text-sm justify-center p-2  bg-zinc-100" >
                                    {`${++i} = `}
                                    <span className='text-green-500'>  10 ₹</span>
                                </div>
                            ))}
                        </div>

                        {/*  -------- Game title: Ander ---------- */}
                        <div className="flex w-full font-semibold text-md my-3 mt-5 items-center justify-center  gap-3.5">
                            <Label className='text-md font-semibold' htmlFor="picture">Ander A</Label>
                        </div>
                        <div className="grid grid-cols-5 gap-1 p-1">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="flex items-center text-sm justify-center p-2  bg-zinc-100" >
                                    {`${++i} = `}
                                    <span className='text-green-500'>  10 ₹</span>
                                </div>
                            ))}
                        </div>

                        {/*  -------- Game title: Bahar ---------- */}
                        <div className="flex w-full  text-md my-2 mt-5 items-center justify-center  gap-3.5">
                            <Label className='text-md font-semibold' htmlFor="picture">Bahar B</Label>
                        </div>
                        <div className="grid grid-cols-5 gap-1 p-1">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="flex items-center text-sm justify-center p-2  bg-zinc-100" >
                                    {`${++i} = `}
                                    <span className='text-green-500'>  10 ₹</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default PlaceBidReciept
