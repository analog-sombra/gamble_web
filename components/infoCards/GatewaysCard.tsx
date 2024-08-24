import React from 'react'
import { Image } from 'antd';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '../ui/alert-dialog'
import { Button } from '../ui/button';
import { IoMdClose } from 'react-icons/io';
import { Switch } from '../ui/switch';

const UpiGatewaysCard = (probs: any) => {

    const height = probs.height ? probs.height : 43;

    return (
        <div className="flex flex-col  gap-3 items-center">
            <Switch ></Switch>
            <AlertDialog>
                <AlertDialogTrigger>
                    <div className="border text-center flex items-center flex-col justify-start py-1 px-3 h-24 rounded-md w-20">
                        <Image
                            width={probs.width}
                            height={height}
                            preview={false}
                            className="my-2 flex"
                            src={probs.img}
                            alt=""
                        />
                        <div className="grow"></div>
                        <div className="h-[0.5px] w-full bg-black my-1"></div>
                        <span className="text-center mb-1">UPI id</span>
                    </div>
                </AlertDialogTrigger>

                {/* Gpay upi options  */}
                <AlertDialogContent>
                    <div className="flex flex-col m-0 p-0">
                        <div className="flex justify-start items-center">
                            <span className="font-medium pr-6">
                                Payment gateway details (GPay)
                            </span>
                            {/* Imageg className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                            <div className="grow"></div>

                            <Button className="rounded-md py-1 px-4 bg-red-500 mr-4 text-white">
                                Clear
                            </Button>
                            <AlertDialogCancel>
                                <IoMdClose />
                            </AlertDialogCancel>
                        </div>

                        <div className="flex justify-start my-7 border border-x-white">
                            <span className=" pr-12">No.</span>
                            <div className="grow">UPI I&apos;d</div>
                            <div className="grow"></div>
                            <div>Status</div>
                        </div>

                        <div className="flex mb- justify-start border-x-white">
                            <span className=" pr-12"> 1.</span>
                            <div className="grow">paytm@okici</div>
                            <div className="grow"></div>
                            <div>Active</div>
                        </div>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}


const QRGatewaysCard = (probs: any) => {
    return (
        <div>
            <div className="flex flex-col gap-3 items-center">
                <Switch></Switch>
                <AlertDialog>
                    <AlertDialogTrigger>
                        <div className="border text-center flex items-center flex-col justify-start py-1 px-3 h-24 rounded-md w-20">
                            <Image
                                width={probs.width}
                                height={probs.width}
                                preview={false}
                                className="my-2 flex"
                                src={probs.img}
                                alt=""
                            />
                            <div className="grow"></div>
                            <div className="h-[0.5px] w-full bg-black my-1"></div>
                            <span className="text-center text-sm mb-1">QR code</span>
                        </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <div className="flex flex-col m-0 p-0">
                            <div className="flex justify-start items-center">
                                <span className="font-medium pr-6">
                                    Payment gateway details (GPay)
                                </span>
                                {/* Imageg className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="" /> */}
                                <div className="grow"></div>

                                <Button className="rounded-md py-1 px-4 bg-red-500 mr-4 text-white">
                                    Clear
                                </Button>
                                <AlertDialogCancel>
                                    <IoMdClose />
                                </AlertDialogCancel>
                            </div>

                            <div className="flex justify-start my-7 border border-x-white">
                                <span className=" pr-12">No.</span>
                                <div className="grow">UPI I&apos;d</div>
                                <div className="grow"></div>
                                <div>Status</div>
                            </div>

                            <div className="flex mb-3 justify-start items-center border-x-white">
                                <span className=" pr-12"> 1.</span>
                                {/* <div className="grow"></div> */}
                                <Image
                                    width={50}
                                    className=" w-20"
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                    alt=""
                                />
                                <div className="grow"></div>
                                <div>Active</div>
                            </div>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}

export { QRGatewaysCard, UpiGatewaysCard };
