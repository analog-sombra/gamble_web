"use client"


import { AlertDialogCancel } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const CreateAccount = () => {

    const [accountType, setAccountType] = useState("normal upi")
    const [gateways, setGateways] = useState("paytm")
    const [gmail, setGmail] = useState("admin")

    return (
        <div>
            <div className="flex flex-col m-0 p-0 gap-5">
                <div className="flex justify-start items-center">
                    <span className="font-medium pr-6">Create Account</span>
                    {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                    <div className="grow"></div>

                    <AlertDialogCancel>
                        <IoMdClose />
                    </AlertDialogCancel>
                </div>

                <div className='flex flex-col gap-2'>
                    <Label htmlFor="picture">Name </Label>
                    <Input id="picture" type="text" placeholder="Enter name" />
                </div>

                <div className='flex flex-col gap-2'>
                    <Label htmlFor="picture">Account type </Label>
                    <Select value={accountType} onValueChange={e => setAccountType(e)} >
                        <SelectTrigger defaultValue={"normal upi"} className="w-full rounded-none rounded-l-md focus:out">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="qr code">QR code</SelectItem>
                                <SelectItem value="bank account">Bank account</SelectItem>
                                <SelectItem value="normal upi">Normal UPI</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {
                    accountType !== "bank account"
                    && <div className='flex flex-col gap-2'>
                        <Label htmlFor="picture">Gateway </Label>
                        <Select defaultValue={gateways} onValueChange={e => setGateways(e)}>
                            <SelectTrigger className="w-full rounded-none rounded-l-md ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        accountType === "qr code"
                                            ? <SelectItem value="paytm qr">Paytm QR</SelectItem>
                                            : <SelectItem value="paytm">Paytm</SelectItem>
                                    }
                                    {
                                        accountType === "qr code"
                                            ? <SelectItem value="phone pe qr">Phone pe QR</SelectItem>
                                            : <SelectItem value="phone pe">Phone pe</SelectItem>
                                    }
                                    {
                                        accountType === "qr code"
                                            ? <SelectItem value="google pay qr">Google pay QR</SelectItem>
                                            : <SelectItem value="google pay">Google pay</SelectItem>
                                    }
                                    {
                                        accountType === "normal upi"
                                        && <SelectItem value="upi">UPI</SelectItem>
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                }

                {
                    accountType === "bank account" &&
                    <>
                        <div>
                            <Label htmlFor="picture">Bank </Label>
                            <Input id="picture" type="text" placeholder="Enter bank number" />
                        </div>
                        <div>
                            <Label htmlFor="picture">Account holder </Label>
                            <Input id="picture" type="text" placeholder="Enter holder name" />
                        </div>
                        <div>
                            <Label htmlFor="picture">Account number </Label>
                            <Input id="picture" type="text" placeholder="Enter account number" />
                        </div>
                        <div>
                            <Label htmlFor="picture">IFSC </Label>
                            <Input id="picture" type="text" placeholder="Enter IFSC" />
                        </div>
                    </>
                }

                {
                    accountType === "normal upi" &&
                    <>
                        <div>
                            <Label htmlFor="picture">Mobile/UPI</Label>
                            <Input id="picture" type="text" placeholder="Enter mobile/UPI" />
                        </div>
                    </>
                }

                {
                    accountType === "qr code" &&
                    <>
                        <div>
                            <Label htmlFor="picture">Upload QR image</Label>
                            <Input id="picture" type="file" />
                        </div>
                        <div>
                            <Label htmlFor="text">UPI address</Label>
                            <Input id="picture" type="text" placeholder='Enter upi address' />
                        </div>
                    </>
                }


                <div>
                    <Label htmlFor="picture">Select gmail</Label>
                    <Select value={gmail} onValueChange={e => setGmail(e)}>
                        <SelectTrigger defaultValue={"admin"} className="w-full rounded-none rounded-l-md focus:out">
                            <SelectValue defaultValue={"admin"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="admin">example1@gmail.com</SelectItem>
                                <SelectItem value="worker">example2@gmail.com</SelectItem>
                                <SelectItem value="useer">example3@gmail.com</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </div>

        </div>
    )
}

export default CreateAccount
