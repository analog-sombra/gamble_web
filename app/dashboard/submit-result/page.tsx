"use client";

import SimpleCard from "@/components/Dashboard/SimpleCard";
import { MaterialSymbolsPerson } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
  const route = useRouter()

  type Players = {
    userId: number,
    bidAmount: number,
    winAmount: number,
  }

  const players = [
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
      <section className="flex w-full gap-3 flex-col-reverse justify-center lg:flex-row ">
        <div className="lg:w-96 bg-white p-3 rounded-md flex flex-col justify-center gap-2 w-full">
          <h2>Submit Result</h2>
          <Divider />
          <div className="">
            {/* <p className="text-sm font-normal">Select date: </p> */}
            <DatePicker onChange={onChange} className="w-full" />
          </div>

          <div className="">
            {/* <p className="text-sm font-normal">Select Game: </p> */}
            <Select
              placeholder="Select a game"
              className="w-full"
              onChange={handleChange}
              options={[
                { value: "1", label: "Desawar" },
                { value: "2", label: "Silver guru" },
                { value: "3", label: "Faridabad" },
                { value: "4", label: "Gaziabad" },
                { value: "5", label: "Gali" },
              ]}
            />
          </div>

          <div className="">
            {/* <p className="text-sm font-normal">Win number: </p> */}
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
          {/* {cardData.map((item) => (
            <SimpleCard
              count={item.count.toString()}
              title={item.name}
              key={item.name}
            >
              {item.icon}
            </SimpleCard>
          ))} */}
        </div>
      </section>

      <section className="bg-white p-3 mt-3">
        <div className=" gap-8 flex justify-start items-start mb-9 border-none">
          <div className="flex items-end">
            <span className=" font-semibold" >Winning Number: </span>
            <div className="mx-2">55</div>
          </div>
          <div className="flex items-end">
            <span className=" font-semibold " >Total Amonut: </span>
            <div className="mx-2">234,23</div>
          </div>
          <div className="flex items-end">
            <span className=" font-semibold " >Total Winning Amount: </span>
            <div className="mx-2">234,123,5</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-5 items-center">
          {
            players.map((user: Players) => {
              return <div className="flex bg-gray-50 shadow-md flex-col justify-start items-center w-40 py-4 px-2 rounded-lg">
                <img className="w-14 rounded-full" src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="" />
                <div className="flex items-center my-2 text-base font-semibold gap-1">
                  <p className="">User Id: </p>
                  <div>{user.userId}</div>
                </div>

                <div className="flex flex-wrap justify-center my-1 text-gray-400 text-xs gap-1">
                  <div className="  font-bold">Bidding Amt:</div>
                  <span className="font-semibold">{user.bidAmount}</span>
                </div>

                <div className="flex flex-wrap justify-center text-gray-400 text-xs gap-1">
                  <div className="  font-bold">Credit Amt:</div>
                  <span className="font-semibold">{user.winAmount}</span>
                </div>
              </div>
            })
          }
        </div>

        <Button onClick={() => route.push("/dashboard/result-securite-page")} className="my-8 bg-blue-700 px-7">
          Next
        </Button>

        {/* <Table>
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
          </Table> */}
      </section>
    </>
  );
}

