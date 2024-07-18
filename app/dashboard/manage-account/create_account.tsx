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
import React from 'react'
import { IoMdClose } from 'react-icons/io'

const CreateAccount = () => {
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

                <div>
                    <Label htmlFor="picture">Name </Label>
                    <Input id="picture" type="text" placeholder="Enter name" />
                </div>

                <div>
                    <Label htmlFor="picture">Account type </Label>
                    <Select>
                        <SelectTrigger defaultValue={"Normal UPI"} className="w-full rounded-none rounded-l-md focus:out">
                            <SelectValue placeholder="Normal UPI" defaultValue={"Normal UPI"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">QR code</SelectItem>
                                <SelectItem value="banana">Bank account</SelectItem>
                                <SelectItem value="banana">Normal UPI</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="picture">Gateway </Label>
                    <Select>
                        <SelectTrigger defaultValue={"Normal UPI"} className="w-full rounded-none rounded-l-md focus:out">
                            <SelectValue placeholder="select UPI" defaultValue={"Normal UPI"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="banana">Paytm</SelectItem>
                                <SelectItem value="apple">Phone pe</SelectItem>
                                <SelectItem value="banana">Google pay</SelectItem>
                                <SelectItem value="banana">UPI</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>


                <div>
                    <Label htmlFor="picture">Account number </Label>
                    <Input id="picture" type="text" placeholder="Enter account number" />
                </div>

                <div>

                    <Label htmlFor="picture">Mobile/UPI</Label>
                    <Input id="picture" type="text" placeholder="Enter mobile/UPI" />
                </div>

                <div>
                    <Label htmlFor="picture">Select gmail</Label>
                    <Select >
                        <SelectTrigger defaultValue={"Normal UPI"} className="w-full rounded-none rounded-l-md focus:out">
                            <SelectValue placeholder="select UPI" defaultValue={"Normal UPI"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="banana">example1@gmail.com</SelectItem>
                                <SelectItem value="banana">example2@gmail.com</SelectItem>
                                <SelectItem value="banana">example3@gmail.com</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </div>

        </div >
    )
}

export default CreateAccount
