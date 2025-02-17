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
import { MoneyDepositWithRelations, PaymentStatus } from '@/models/MoneyDeposite';
import { updateDepositeRequestApi } from '@/lib/api/moneyDeposte';
import { toast } from 'react-toastify';
// import { Input } from '@/components/ui/input';
type ProbsParam = {
    withdraw?: boolean,
    depositeReqest?: MoneyDepositWithRelations,
    setDepositeReqState?: (
        depositeReqId: number,
        status: PaymentStatus,
        workerId?: number,
    ) => Promise<void>;
}

const RejectDailouge = (probs: ProbsParam) => {

    const handleSubmitRejectRequest = async () => {
        if (!probs.depositeReqest) return;
        const isRejected = await updateDepositeRequestApi({
            id: probs.depositeReqest.id,
            payment_status: PaymentStatus.REJECT 
        })
        if (!isRejected) return;
        toast.success(`Deposite request is with id ${probs.depositeReqest.id} reject`)
        probs.setDepositeReqState 
            ? probs.setDepositeReqState(probs.depositeReqest.id, PaymentStatus.REJECT,) 
            : undefined
    }
    
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger className='m-0 w-full p-0'>
                    <Button className="bg-red-500 rounded-none rounded-r-lg m-0 hover:bg-red-700 w-full" variant={"destructive"}>
                        Rejected
                    </Button>
                </AlertDialogTrigger>

                {/*  --- Transfer ---  */}
                <AlertDialogContent className='p-0 sm:w-[470px] w-full'>
                    <div className="flex flex-col w-full ">

                        <div className="flex px-4 py-2 justify-start items-center bg-[#ffe3e5]">
                            <span className="font-medium pr-6 text-[#ac0713]">
                                Enter Transaction ID
                            </span>
                            {/* <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                            <div className="grow"></div>
                            <AlertDialogCancel className="bg-[#fc7371] text-white">
                                <IoMdClose className="font-bold" />
                            </AlertDialogCancel>
                        </div>

                        {/* ----------- search result ----------- */}
                        <div className="flex flex-col w-full px-4  my-3 mt-10 items-center justify-start gap-3">
                            <div className="flex w-[70%]">
                                <Select>
                                    <SelectTrigger className="w-full rounded-full h-11 focus:out">
                                        <SelectValue defaultValue={"Today"} placeholder="Select a reason" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            rejectedReason.map((value, index) => {
                                                return <SelectItem key={index} value={value}>{value}</SelectItem> 
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                            { probs.withdraw &&
                                <div className="flex w-[70%]">
                                    <Input
                                        type="file"
                                        placeholder="Upload QR code"
                                    />
                                </div>
                            }
                        </div>

                        <div className="flex justify-center my-5">
                            <Button onClick={e=> handleSubmitRejectRequest()} className="bg-[#fc7371] w-[68%] hover:bg-[#fc7371] rounded-full">Sumbit</Button>
                        </div>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

const rejectedReason = [
    "Invalid payment method",
    "Insufficient balance in sender's account",
    "Transaction limit exceeded",
    "Suspicious or fraudulent activity detected",
    "Incorrect payment screenshot",
    "Deposit amount does not meet the minimum requirement",
    "Duplicate deposit request detected",
    "Third-party payment service failure",
    "Regulatory or compliance restrictions",
    "Technical error during transaction processing",
    "User account under review or restricted"
];


export default RejectDailouge
