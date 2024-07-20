"use client";

import { IoMdClose } from "react-icons/io";
import { Tag } from "antd";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "antd";
import React from "react";
import CreateAccount from "./create_account";

const ManageAccount = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white rounded-md">
      <div className="flex w-full justify-between">
        <div className=" md:gap-8 gap-1 flex flex-col md:flex-row justify-start items-start mb-5 border-none">
          <div className="flex items-end text-sm">
            <span className=" font-bold ">Acconut record: </span>
            <div className="mx-2">12</div>
          </div>
        </div>

        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-blue-600">Create account</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <CreateAccount />
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="flex w-full my-3 justify-between">
        {/* <Input className='w-[350px]' placeholder='All' /> */}
        <Select>
          <SelectTrigger className="w-[180px] rounded-none rounded-l-md focus:out">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Paytm</SelectItem>
              <SelectItem value="banana">Phone pe</SelectItem>
              <SelectItem value="blueberry">Google pay</SelectItem>
              <SelectItem value="blueberry">UPI</SelectItem>
              <SelectItem value="blueberry">Bank AC</SelectItem>
              <SelectItem value="blueberry">Paytm QR</SelectItem>
              <SelectItem value="blueberry">Phone pe QR</SelectItem>
              <SelectItem value="blueberry">Google pay QR</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex h-10 w-auto mb-1 max-w-sm items-center">
          <Input
            className="h-full  rounded-none rounded-l-md placeholder:font-semibold"
            type="text"
            placeholder="User I'd"
          />
          <Button
            className="h-full bg-blue-500  rounded-none rounded-r-md w-40"
            type="submit"
          >
            Search
          </Button>
        </div>
      </div>

      <Table className="">
        <TableHeader>
          <TableRow className=" bg-zinc-100">
            <TableHead className="font-bold text-base text-left">No.</TableHead>
            <TableHead className="font-bold text-base text-center">
              Id details/Status
            </TableHead>
            <TableHead className="font-bold text-base text-center">
              Account holder
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              Account number
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              Mobile
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              Gateway
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              Bank details
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              UPI details
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              QR code
            </TableHead>
            <TableHead className="font-bold text-base text-left">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableValues.map((value, index) => (
            <TableRow className="" key={index}>
              <TableCell className="text-left">{++index}.</TableCell>
              <TableCell className="flex gap-2 items-center flex-col">
                <div>{value.idOrStatus?.email}</div>
                <div>{value.idOrStatus?.number}</div>
                <div className="font-semibold text-sm">
                  User Id:{value.idOrStatus?.userId}
                </div>
                {value.idOrStatus?.status === "Active" ? (
                  <Tag className="w-20 flex justify-center" color="green">
                    Active
                  </Tag>
                ) : (
                  <Tag className="w-20 flex justify-center" color="red">
                    Inactive
                  </Tag>
                )}
              </TableCell>
              <TableCell className="items-right">{value.name}</TableCell>
              <TableCell className=" pl-12">{value.accountNumber}</TableCell>
              <TableCell>{value.mobile}</TableCell>
              <TableCell className="">
                <div>{value.gateway}</div>
              </TableCell>
              <TableCell>
                {value.bankDetails.show ? (
                  <>
                    <div className="text-sm font-semibold">
                      Bank: {value.bankDetails.bankName}
                    </div>
                    <div className="text-sm font-semibold">
                      AC: {value.bankDetails.accountAc}
                    </div>
                    <div className="text-sm font-semibold">
                      AC holder: {value.bankDetails.accountHolderName}
                    </div>
                    <div className="text-sm font-semibold">
                      IFCE: {value.bankDetails.ifce}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </TableCell>
              <TableCell>{value.upiDetails}</TableCell>
              <TableCell>{value.qr}</TableCell>
              <TableCell>
                <Button
                  onClick={value.action}
                  className="bg-green-500 hover:bg-green-900 py-1 px-2 text-xs"
                >
                  Gateways
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageAccount;

const tableValues = [
  {
    no: 1,
    idOrStatus: {
      email: "example@gmail.com",
      number: "+91 ********",
      userId: "23",
      status: "Active",
    },
    name: "name",
    accountNumber: "2348123854",
    mobile: "+91 ********",
    gateway: "Phone pe",
    bankDetails: {
      show: false,
      bankName: "icici",
      accountAc: "234234234",
      ifce: "AD5234C",
      accountHolderName: "anmol",
    },
    upiDetails: "",
    qr: "",
    action: function () {},
  },
  {
    no: 1,
    idOrStatus: {
      email: "example@gmail.com",
      number: "+91 ********",
      userId: "23",
      status: "Active",
    },
    name: "",
    accountNumber: "",
    mobile: "",
    gateway: "QR code",
    bankDetails: {
      show: false,
      bankName: "icici",
      accountAc: "234234234",
      ifce: "AD5234C",
      accountHolderName: "anmol",
    },
    upiDetails: "name@okicici",
    qr: (
      <img
        className="w-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
        alt=""
      />
    ),
    action: function () {},
  },
  {
    no: 1,
    idOrStatus: {
      email: "example@gmail.com",
      number: "+91 ********",
      userId: "23",
      status: "Active",
    },
    name: "",
    accountNumber: "",
    mobile: "",
    gateway: "Bank AC",
    bankDetails: {
      show: true,
      bankName: "icici",
      accountAc: "234234234",
      ifce: "AD5234C",
      accountHolderName: "anmol",
    },
    upiDetails: "",
    qr: <img className="w-10" src="" alt="" />,
    action: function () {},
  },
];
