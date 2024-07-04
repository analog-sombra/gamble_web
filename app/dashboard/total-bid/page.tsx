"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function TotalBidAmount() {
  const [date, setDate] = useState<Date>();
  const [sumbit, setSumbit] = useState(false);
  let counter = 1;

  const array = [...Array(10)];

  return (
    <>
      <div className="flex bg-white p-3 rounded-md lg:items-end flex-col lg:flex-row gap-3 ">
        <div className="relative  flex flex-col items-start gap-3 ">
          <p>Select Date: </p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "lg:w-[280px] w-full justify-start text-left font-normal",
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

        <div className="flex gap-3 flex-col items-start">
          <p>Select Game: </p>
          <Select>
            <SelectTrigger className="w-full lg:w-[180px]">
              <SelectValue placeholder="Select a Game" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Games</SelectLabel>
                {gamesData.map((game) => (
                  <SelectItem value={game.key} key={game.key}>
                    {game.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => setSumbit(true)}
        >
          Submit
        </Button>
      </div>

      {sumbit && (
        <div className="bg-white p-3 rounded-md mt-3 flex items-center justify-center">
          <table className="border">
            {array.map((value, index) => (
              <tr key={index}>
                {array.map((value, index) => (
                  <td key={index} className="border w-24 text-center">
                    <div>
                      <p className="bg-indigo-600 text-white">{counter++}</p>
                      <p>{Math.round(Math.random() * 2342342)}</p>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </table>
        </div>
      )}
    </>
  );
}

type GameType = {
  key: string;
  name: string;
  participant: number;
  totalBet: number;
  winners: number;
};

const gamesData: GameType[] = [
  {
    key: "1",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "2",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "3",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "4",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "5",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "6",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "7",
    name: "Monday Mania",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
];
