import { BASE_URL } from '@/lib/const'
import { dateTimeFormatter } from '@/lib/utilsMethod'
import { AddMoneyProbParams } from '@/models/MoneyDeposite'
import { Tag, Image } from 'antd'
import React from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { CiCreditCard2 } from 'react-icons/ci'
import { FaMoneyBill, FaRegCalendar, FaArrowRight } from 'react-icons/fa6'
import { MdSmartphone, MdEmail } from 'react-icons/md'

const RejetedRequestCard = (probs: AddMoneyProbParams) => {
    const { depositeMoney } = probs;
    return (
        <div
            className="flex bg-gray-50 shadow-md flex-col justify-start w-full items-center sm:w-[360px] p-0 rounded-lg"
        >
            <div className="min-h-7 bg-zinc-200 w-full flex items-center px-2 justify-start">
                <span className="mx-1">Rejected request</span>
                (
                <Image
                    preview={false}
                    height={50}
                    width={50}
                    alt="NextUI hero Image"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256"
                />
                )
                {/* <div className="grow"></div>
                    <TransferDailouge /> */
                }
            </div>

            {/* Payment infomation */}
            <div className="flex justify-between px-4 py-2 w-full">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center">
                        <MdSmartphone /> <span>+91 {depositeMoney.user.mobile ?? ""}</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <BiSolidUser />
                        <span className="font-semibold text-sm "> User Id: </span>
                        {depositeMoney.user.id}
                    </div>

                    <div className="flex gap-3 items-center">
                        <FaMoneyBill />
                        <span className="font-semibold text-sm">
                            {depositeMoney.amount} INR
                        </span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <CiCreditCard2 />
                        <span className="font-semibold text-sm">
                            Ref no:
                        </span>
                        A7238912IDA
                    </div>

                    <div className="flex gap-3 items-center">
                        <FaRegCalendar />
                        <span className="font-semibold text-sm"> {dateTimeFormatter(depositeMoney.created_at)} </span>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3 text-sm items-center">
                        <FaArrowRight />
                        <span className="font-semibold  text-red-500">
                            reason of rejection:
                        </span>
                        *Reaseon*
                    </div>
                </div>
                <Image
                    // width={80}
                    height={130}
                    className="w-20 h-32 max-w-28" 
                    src={`${BASE_URL}/${depositeMoney.payment_screen_shot}`}
                    alt=""
                />
            </div>

            { probs.showAdminInfo &&
                <>
                    {/* ... ... Seprator ... ... */}
                    <div className="h-[0.5px] w-[70%] bg-gray-300 my-5 "></div>

                    {/* ... ... Admin info ... ... */}

                    <div className="flex px-4 items-center mb-3 w-full justify-between">
                        <span className="font-semibold text-lg">Admin Info</span>
                        {/* <Tag className="px-4 py-[2px]" color="green">Online</Tag> */}
                    </div>

                    <div className="px-4 py-2 w-full justify-between items-center flex ">
                        <div className="flex flex-col justify-between items-start gap-2 ">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">
                                    <MdSmartphone />
                                </span>
                                <span>+91 **********</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">
                                    <MdEmail />
                                </span>
                                <span>exampl@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">
                                    <BiSolidUser />
                                </span>
                                <span>Name of admin</span>
                            </div>
                        </div>
                    </div>
                </>
            }

            {/* ... ... Action buttons ... ... */}
            <div className="  w-full flex items-center justify-end">
                <Tag
                    className="w-full  text-center p-0 m-0 py-[2px]"
                    color="red"
                >
                    Rejected
                </Tag>
            </div>
        </div>
    )
}

export default RejetedRequestCard
