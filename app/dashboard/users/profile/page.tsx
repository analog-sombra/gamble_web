"use client";

import { DataTable } from "@/components/Dashboard/DataTable";
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
      <div className="shadow bg-white p-4 rounded-md mt-2">
        <DataTable columns={columns} data={users}></DataTable>
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

const users: Transaction[] = [
  {
    amount: 23,
    number: 1234567890,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 1234567890,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
];
