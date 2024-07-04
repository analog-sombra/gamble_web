"use client";

import SimpleCard from "@/components/Dashboard/SimpleCard";
import { MaterialSymbolsPerson } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  return (
    <>
      <section className="flex gap-3 flex-col-reverse lg:flex-row ">
        <div className="lg:w-96 bg-white p-3 rounded-md flex flex-col gap-2 w-full">
          <h2>Submit Result</h2>
          <Divider />
          <div className="flex  gap-3 items-center ">
            <p className="text-sm font-normal w-20">Update number: </p>
            <Popover>
              <PopoverTrigger asChild className="w-full">
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex  gap-3 items-center">
            <p className="text-sm font-normal w-20">Win number: </p>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Game" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="0">Monday Mania</SelectItem>
                  <SelectItem value="1">Blazing buster</SelectItem>
                  <SelectItem value="2">Tuesday thunder</SelectItem>
                  <SelectItem value="3">pine plate</SelectItem>
                  <SelectItem value="4">gold selectiion</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex  gap-3 items-center">
            <p className="text-sm font-normal w-20">Win number: </p>
            <Input
              type="text"
              placeholder="enter Number"
              className="max-w-sm"
            />
          </div>

          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={showWinners}
          >
            Show Winner
          </Button>
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
