"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { Divider, Input, Modal, Pagination, Popover, Select } from "antd";
import { useState } from "react";

export default function Users() {
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
        <div className="flex gap-2 lg:flex-row flex-col">
          <Input placeholder="User Id" className="w-60" />
          <Input placeholder="Mobile number" className="w-60" />
          <button className="w-60 text-white text-sm bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-md">
            Search
          </button>
          <div className="grow"></div>
          <Select
            placeholder="User Filter"
            className="w-40"
            onChange={(value: string) => {}}
            options={[
              { value: "all", label: "All Users" },
              { value: "block", label: "Blocked User" },
              { value: "minus", label: "Minus Wallet" },
            ]}
          />
        </div>
      </div>
      <div className="shadow bg-white p-4 rounded-md mt-4">
        <Table className="border mt-2">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border text-center">Id</TableHead>
              <TableHead className="border text-center">Name</TableHead>
              <TableHead className="border text-center">Phone Number</TableHead>
              <TableHead className="border text-center">
                Wallet Amount (&#x20b9;)
              </TableHead>
              <TableHead className="w-28 border text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="p-2 border text-center">1</TableCell>
              <TableCell className="p-2 border text-center">
                Ekichi San
              </TableCell>
              <TableCell className="p-2 border text-center">
                9876875385
              </TableCell>
              <TableCell className="p-2 border text-center">15,000</TableCell>

              <TableCell className="p-2 border text-center">
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
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mt-2">
          <Pagination
            total={85}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `${total} items`}
          />
        </div>
      </div>
      <Modal
        title="Change Password"
        open={passwordBox}
        onOk={() => setPasswordBox(false)}
        onCancel={() => setPasswordBox(false)}
      >
        <Input placeholder="Enter New Password" />
      </Modal>
      <Modal
        title="Cash Deduction"
        open={amountBox}
        onOk={() => setAmountBox(false)}
        onCancel={() => setAmountBox(false)}
      >
        <Input className="Enter Amount" />
      </Modal>
    </main>
  );
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "number",
    header: "No.",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return (
        <div className="flex flex-col gap-1">
          <p>{amount}</p>
          <p>
            <HoverCard>
              <HoverCardTrigger className="text-blue-700 cursor-pointer">
                View Details
              </HoverCardTrigger>
              <HoverCardContent>
                <p>Game: Moday dhamaka</p>
                <p>Bet number: 2, 34</p>
                <p>Winning Number: 99</p>
                <p>Bet amount: 2334</p>
              </HoverCardContent>
            </HoverCard>
          </p>
          <p>closing balance: {Math.ceil(amount * 2 - 5 / 3)}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "transactionId",
    header: "Transaction Id",
  },
];

type Transaction = {
  number: number;
  status:
    | "Add money successful"
    | "withdraw successul"
    | "withdraw processing"
    | "withdraw failed";
  amount: number;
  transactionId: string;
};
