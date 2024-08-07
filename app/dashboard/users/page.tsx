"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Divider, Select } from "@nextui-org/react";
import { Tag } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Users() {
  const route = useRouter();
  const [open, setOpen] = useState(false);

  const [passwordBox, setPasswordBox] = useState(false);
  const [amountBox, setAmountBox] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <main>
      <div className="shadow bg-white p-4 rounded-md">
        <h2 className="mx-auto text-lg font-medium text-left">Users</h2>
        <Divider className="my-2" />
        <div className="flex gap-2 md:flex-row flex-col">
          <Input placeholder="User Id" className="w-full md:w-60" />
          <Input placeholder="Mobile number" className="w-full md:w-60" />
          <button className="w-full md:w-32 text-white text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
            Search
          </button>
          <div className="grow"></div>
        </div>
      </div>
      <div className="shadow bg-white p-4 rounded-md mt-4">
        <Table className="border mt-2">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border text-center">Mobile</TableHead>
              <TableHead className="border text-center">
                Wallet Amount (&#x20b9;)
              </TableHead>
              <TableHead className="w-28 border text-center">
                Cash deducation
              </TableHead>
              <TableHead className="w-28 border text-center">
                Set Password
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="p-2 border text-center">
                <div className="pb-1">+91 943882391</div>
                <span className="font-bold">{"UserID: \n12377"}</span>
              </TableCell>
              <TableCell className="p-2 border text-center">15,000</TableCell>
              <TableCell className="p-2 border text-center">
                <Input className="Enter Amount" />
                <button className="w-full md:w-32 mt-1 text-white h-8 text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
                  Submit
                </button>
              </TableCell>
              <TableCell className="p-2 border text-center">
                <Input className="Enter new passwordS" />
                <button className="w-full md:w-32 mt-1 text-white h-8 text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
                  Submit
                </button>
              </TableCell>

              {/* <TableCell className="p-2 border text-center">
                <Popover
                  content={
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setOpen(false);
                          setAmountBox(true);
                        }}
                        className="text-sm bg-white border hover:border-rose-500 hover:text-rose-500 text-[#172e57] py-1 px-4"
                      >
                        Cash Deduction
                      </button>
                      <button
                        className="text-sm bg-white border hover:border-blue-500 hover:text-blue-500 text-[#172e57] py-1 px-4"
                        onClick={() => {
                          setOpen(false);
                          setPasswordBox(true);
                        }}
                      >
                        Set Password
                      </button>
                      <button className="text-sm bg-white border hover:border-blue-500 hover:text-blue-500 text-[#172e57] py-1 px-4">
                        View Profile
                      </button>
                    </div>
                  }
                  title="Actions"
                  trigger="click"
                  open={open}
                  onOpenChange={handleOpenChange}
                >
                  <button className="text-sm bg-white border hover:border-blue-500 hover:text-blue-500 text-[#172e57] py-1 px-4">
                    Actions
                  </button>
                </Popover>
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>

        <div className="w-full flex justify-start items-center">
          <button
            onClick={() => { route.push("/dashboard/users/profile"); }}
            className="sm:w-full mt-2 md:w-32 text-white h-8 text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
            Statement option
          </button>
          <div className="grow"></div>
          <div className="flex flex-col font-semibold mr-1 sm:mr-4 gap-2 ">Status:</div>
          <Tag className='w-20 flex justify-center' color="green">Active</Tag>
          {/* <div className="bg-green-500 py-1 min-h-1 px-3 rounded-md text-white">Active</div> */}
        </div>

      </div>

    </main>
  );
}
