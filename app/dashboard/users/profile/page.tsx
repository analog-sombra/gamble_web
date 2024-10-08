"use client";

import { DataTable } from "@/components/Dashboard/DataTable";
import SearchFiedls from "@/components/Dashboard/SearchFiedls";
import AddMoneyRecpiet from "@/components/DialogeBoxes/AddMoneyRecpiet";
import MoneyDeductedRepeit from "@/components/DialogeBoxes/MoneyDeductedRepiet";
import PlaceBidReciept from "@/components/DialogeBoxes/placeBidRecieptDialog";
import ProcessingRecpiet from "@/components/DialogeBoxes/ProcessingRecpiet";
import RecieptDialoge from "@/components/DialogeBoxes/RecieptDialogBox";
import RefferalRacpiet from "@/components/DialogeBoxes/ReferralRacpiet";
import RejectMoneyrecpiet from "@/components/DialogeBoxes/RejectMoneyRecpiet";
import WithrawalMoneyRecpiet from "@/components/DialogeBoxes/WithrawalMoneyRacpiet";
import WithrawalReffundedMoneyrecpiet from "@/components/DialogeBoxes/WithrawalRefundedRecpiet";
import WithrawalRejectMoneyrecpiet from "@/components/DialogeBoxes/WithrawalRejectedRecpiet";
import { Button } from "@/components/ui/button";
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
import { user } from "@nextui-org/react";
import { ColumnDef } from "@tanstack/react-table";
import { Divider, Input, Modal, Pagination, Popover, Select, Tag } from "antd";
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
      <div className="shadow bg-white p-4 w-full h-full rounded-md mt-2">

        <div className="w-full flex items-end mb-9 justify-between">
          <div className="w-[30%] flex gap-2 flex-col">
            <h1 className=" font-bold text-lg ">Transication History (transactionId)</h1>
            <span className="font-semibold">User Id: 23 </span>
            <span className="font-semibold">Available balance: 23,000 </span>
            <Input type="date" className="" />
            <Button className='bg-blue-600 hover:bg-blue-700'>Submit</Button>
          </div>
          <SearchFiedls placeholder="Search" />
        </div>

        <Table className="mb-5">
          <TableHeader>
            <TableRow className="bg-zinc-100">
              <TableHead className="text-center">No</TableHead>
              <TableHead className="text-center">{"Statement /Status"}</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              {/* <TableHead className="text-center">Status</TableHead> */}
              <TableHead className="text-center">Txn id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">

            
            <TableRow className="">
              <TableCell className="text-center min-w-15">{1}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-green-600">Silver guru win</div>
                <div> 03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-green-600 font-semibold">+₹ 200.00</div>
                <RecieptDialoge />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{2}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-green-600 ">Silver guru Play</div>
                <div> 03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-green-600 font-semibold">-₹ 300.00</div>
                <PlaceBidReciept />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{3}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-green-600">Add money successful</div>
                <div> 03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-green-600 font-semibold">+ ₹ 500.00</div>
                <AddMoneyRecpiet />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{4}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-yellow-600">Add money processing</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-yellow-600 font-semibold">* ₹ 500.00</div>
                <ProcessingRecpiet />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-red-600 ">Add money rejected</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-red-600 font-semibold">₹ 500.00</div>
                <RejectMoneyrecpiet />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-purple-500 ">Referral Amount</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-purple-500 font-semibold">₹ 500.00</div>
                <RefferalRacpiet />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-red-500 ">Money deducted</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-red-500 font-semibold">₹ 500.00</div>
                <MoneyDeductedRepeit />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-yellow-500 ">Withdraw money processing</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-yellow-500 font-semibold">* ₹ 500.00</div>
                <ProcessingRecpiet Withdrawl={true} />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-green-500 ">Withdraw money successfull</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-green-500 font-semibold">- ₹ 500.00</div>
                <WithrawalMoneyRecpiet />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-red-500 ">Withdraw money rejected</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-red-500 font-semibold"> ₹ 500.00</div>
                <WithrawalRejectMoneyrecpiet Withdrawl={true} />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


            <TableRow className="">
              <TableCell className="text-center min-w-15">{5}</TableCell>
              <TableCell className="text-center ">
                <div className="font-semibold text-purple-500 ">Withdraw money refunded</div>
                <div>03 sept 2024, 11:22AM</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">
                <div className="text-purple-500 font-semibold">+ ₹ 500.00</div>
                <WithrawalReffundedMoneyrecpiet Withdrawl={true} />
                <div><span className="font-semibold">Closing Bal</span>: ₹ 2,000</div>
              </TableCell>
              <TableCell className="text-center  min-w-28">{"12345678901234"}</TableCell>
            </TableRow>


          </TableBody>
        </Table>

        <div className="mt-2">
          <Pagination
            total={85}
            showSizeChanger
            showQuickJumper
            showTotal={(total: any) => `${total} items`}
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

const columns: ColumnDef<Transaction>[] = [
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
          <p><span className="font-semibold">closing bal</span>ance: {Math.ceil(amount * 2 - 5 / 3)}</p>
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

const users = [
  {
    amount: 23,
    number: 1,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 2,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 3,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 4,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 5,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 6,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
  {
    amount: 23,
    number: 7,
    status: "Add money successful",
    transactionId: "12345678901234",
  },
];
