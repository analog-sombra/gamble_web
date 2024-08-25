"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HttpMethodType, makeApiRequeest } from "@/lib/api/untils";
import { BASE_URL } from "@/lib/const";
import { PaymentGateway } from "@/models/paymentGatewayModel";
import { Tag, Image, Skeleton } from "antd";
import axios, { AxiosError } from "axios";
import { List } from "postcss/lib/list";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PaymentGatewayPage = () => {
  const [paymentGateways, setPaymentGateways] = useState<[PaymentGateway] | []>([])
  const [isLoading, setIsLoading] = useState(false)

  // const query = useQuery({
  //   queryKey: ["payment-gateways"],
  //   queryFn: async () => {


  //   },
  //   retry: false,
  //   refetchOnMount: false,
  //   retryOnMount: false,
  // })

  async function init() {
    setIsLoading(true);

    try {
      
      const responseData = await makeApiRequeest(
        `${BASE_URL}/api/payment_gateway/get`,
        HttpMethodType.GET,
        {
          queryParam: { skip: 0, take: 10 },
          includeToke: true
        }
      )
      console.log(responseData);
      
      setPaymentGateways(responseData?.data.data)
      setIsLoading(false);
      
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data.message)
    } finally {
    }
  }

  useEffect(() => {
    init();
  }, []);

  console.log(paymentGateways);


  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-4 py-2">
      <h1 className="text-xl font-bold text-gray-800 uppercase tracking-wide leading-normal whitespace-pre-wrap break-words">
        Payment Gateways
      </h1>

      <Table className="border-2">
        <TableHeader>
          <TableRow className=" bg-zinc-100">
            <TableHead className="font-bold text-base text-center border-r-2">
              No.
            </TableHead>
            <TableHead className="font-bold text-base text-center border-r-2">
              Name
            </TableHead>
            <TableHead className="font-bold text-base text-center border-r-2">
              Image
            </TableHead>
            <TableHead className="font-bold text-base text-center border-r-2">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            isLoading
              ? <>
                {
                  Array.from([1, 2, 3, 4, 5]).map(() => {
                    return <TableRow>
                      <TableCell className="text-center border-r">
                        <Skeleton.Input className="w-52 rounded-full" active />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Skeleton.Input className="w-52 rounded-full" active />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Skeleton.Input className="w-52 rounded-full" active />
                      </TableCell>
                      <TableCell className="text-center border-r">
                        <Skeleton.Input className="w-52 rounded-full" active />
                      </TableCell>
                    </TableRow>
                  })
                }
              </>
              :

              paymentGateways.map((gateway: PaymentGateway, index) => (
                <TableRow className="" key={index}>
                  <TableCell className="border-r text-center">
                    {++index}.
                  </TableCell>
                  <TableCell className="gap-2 border-r text-center ">
                    <span className="font-semibold text-lg">
                      {gateway.name}
                    </span>
                  </TableCell>
                  <TableCell className=" text-center border-r">
                    <Image
                      width={gateway.paymentType === "UPI" ? 80 : 40}
                      preview={false}
                      src={`${BASE_URL}/${gateway.image}`}
                    />
                  </TableCell>
                  <TableCell className="text-center border-r">
                    <Tag color={`${gateway.status === "ACTIVE" ? "green" : "red"}`}>
                      {gateway.status}
                    </Tag>
                  </TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentGatewayPage;

const tableValues = [
  {
    gatewayName: "Paytm",
    logoPath: "",
    imagePath:
      "https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256",
    width: 40,
    height: 40,
    status: "Active",
  },
  {
    gatewayName: "Phone pe",
    logoPath: "",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s",
    width: 40,
    height: 40,
    status: "Active",
  },
  {
    gatewayName: "Google pay",
    logoPath: "",
    imagePath: "https://cdn-icons-png.flaticon.com/128/6124/6124998.png",
    width: 50,
    height: 50,
    status: "Active",
  },
  {
    gatewayName: "UPI",
    logoPath: "",
    imagePath:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png",
    width: 60,
    height: 40,
    status: "Active",
  },
  {
    gatewayName: "Paytm qr",
    logoPath: "",
    imagePath: "/paytm qr.png",
    width: 160,
    status: "Active",
  },
  {
    gatewayName: "Phone pe qr",
    logoPath: "",
    imagePath: "/phone pe qr.png",
    width: 160,
    height: 40,
    status: "Inactive",
  },
  {
    gatewayName: "Google pay qr",
    logoPath: "",
    imagePath: "/gpay qr.png",
    width: 160,
    height: 40,
    status: "Active",
  },
  {
    gatewayName: "QR code",
    logoPath: "",
    imagePath: "/all qr.jpeg",
    width: 160,
    height: 40,
    status: "Active",
  },
  {
    gatewayName: "Bank account",
    logoPath: "",
    imagePath:
      "https://www.clipartkey.com/mpngs/m/84-841013_bank-png-blue-bank-icon.png",
    width: 40,
    height: 40,
    status: "InActive",
  },
];
