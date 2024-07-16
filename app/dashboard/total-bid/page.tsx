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
  let counter = 0;

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
        <div className="bg-white p-3 rounded-md mt-3 flex flex-col overflow-auto items-center justify-center">
          {/* ......... Main game ....... */}
          <table className="border">
            {array.map((value, index) => (
              <tr key={index}>
                {array.map((value, index) => (
                  <td key={index} className="text-center sm:m-[3px] m-0 md:w-28 sm:w-16 w-12 py-2">
                    <div>
                      <p className="bg-indigo-600 text-white">{++counter == 100 ? "00" : counter}</p>
                      <p className="text-xs text-ellipsis">{Math.round(Math.random() * 1022220)}</p>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </table>

          {/* ......... Ander ....... */}
          <h1 className="flex w-full text-lg justify-center mt-6 font-bold">Ander / A</h1>
          <table className="borde flex">
            {array.map((value, index) => (
              <tr key={index}>
                <td key={index} className="text-center sm:m-[3px]  m-0 md:w-28 sm:w-16 w-12 ">
                  <div>
                    <p className="bg-indigo-600 text-white">{++index == 10 ? "0" : index}</p>
                    <p className="text-xs text-ellipsis ">{Math.round(Math.random() * 1222)}</p>
                  </div>
                </td>
              </tr>
            ))}
          </table>

          {/* ......... Baher ....... */}
          <h1 className="flex w-full text-lg justify-center mt-6 font-bold">Baher / B</h1>
          <table className="borde flex">
            {array.map((value, index) => (
              <tr key={index}>
                <td key={index} className="text-center sm:m-[3px]  m-0 md:w-28 sm:w-16 w-12 ">
                  <div>
                    <p className="bg-indigo-600 text-white">{++index == 10 ? "0" : index}</p>
                    <p className="text-xs text-ellipsis ">{Math.round(Math.random() * 1222)}</p>
                  </div>
                </td>
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
    name: "Desawar",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "2",
    name: "Silver guru",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "3",
    name: "Faridabad",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "4",
    name: "Gaziabad",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
  {
    key: "5",
    name: "Gali",
    participant: 50,
    totalBet: 23843,
    winners: 4,
  },
];
