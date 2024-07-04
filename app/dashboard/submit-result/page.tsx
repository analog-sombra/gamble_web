"use client";

import SimpleCard from "@/components/Dashboard/SimpleCard";
import { MaterialSymbolsPerson } from "@/components/Icon";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Divider } from "@nextui-org/react";
import { DatePicker, DatePickerProps, Input, Select } from "antd";
import { format } from "date-fns";

import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function SubmitResult() {
  const [date, setDate] = useState<Date>();
  const [winningNumber, setWinningNumber] = useState(0);
  const [totalWinner, setTotalWinner] = useState(0);
  const [totalWinningAmount, setTotalWinningAmount] = useState(0);

  const cardData = [
    {
      name: "Total Winner",
      count: totalWinner,
      icon: (
        <span className="text-red-500 bg-red-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
          <MaterialSymbolsPerson />
        </span>
      ),
    },
    {
      name: "Winning Number",
      count: winningNumber,
      icon: (
        <span className="text-red-500 bg-red-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
          <MaterialSymbolsPerson />
        </span>
      ),
    },
    {
      name: "Total Winning Amount",
      count: totalWinningAmount,
      icon: (
        <span className="text-red-500 bg-red-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
          <MaterialSymbolsPerson />
        </span>
      ),
    },
  ];

  const showWinners = () => {
    setWinningNumber(5);
    setTotalWinner(23);
    setTotalWinningAmount(9284923);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <section className="flex gap-3 flex-col-reverse lg:flex-row ">
        <div className="lg:w-96 bg-white p-3 rounded-md flex flex-col gap-2 w-full">
          <h2>Submit Result</h2>
          <Divider />
          <div className="">
            <p className="text-sm font-normal">Update number: </p>
            <DatePicker onChange={onChange} className="w-full" />
          </div>

          <div className="">
            <p className="text-sm font-normal">Select Game: </p>
            <Select
              placeholder="Select a game"
              className="w-full"
              onChange={handleChange}
              options={[
                { value: "0", label: "Monday Mania" },
                { value: "1", label: "Blazing buster" },
                { value: "2", label: "Tuesday thunder" },
                { value: "3", label: "gold selectiion" },
              ]}
            />
          </div>

          <div className="">
            <p className="text-sm font-normal">Win number: </p>
            <Input type="text" placeholder="enter Number" className="w-full" />
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-white text-sm"
            onClick={showWinners}
          >
            Show Winner
          </button>
        </div>

        <div className="bg-white p-3 rounded-md flex flex-wrap gap-6 justify-between flex-1">
          {cardData.map((item) => (
            <SimpleCard
              count={item.count.toString()}
              title={item.name}
              key={item.name}
            >
              {item.icon}
            </SimpleCard>
          ))}
        </div>
      </section>

      <section className="bg-white p-3 mt-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Id</TableHead>
              <TableHead>Bid Amount</TableHead>
              <TableHead>Win Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.bidAmount}</TableCell>
                <TableCell>{user.winAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}

const users = [
  {
    userId: 0,
    bidAmount: 231,
    winAmount: 34234,
  },
  {
    userId: 2,
    bidAmount: 231,
    winAmount: 34234,
  },
  {
    userId: 3,
    bidAmount: 231,
    winAmount: 34234,
  },
  {
    userId: 4,
    bidAmount: 231,
    winAmount: 34234,
  },
];
