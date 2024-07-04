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
import { Divider } from "@nextui-org/react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function TotalWinner() {
  const [date, setDate] = useState<Date>();
  const [game, setGame] = useState("");
  const [submit, setSubmit] = useState(false);
  const [userData, setUserData] = useState<UserGameType[]>([]);

  const getGameData = () => {
    setUserData(userGameFetchedData);
    setSubmit(true);
  };

  return (
    <>
      <div className="bg-white w-full rounded-md p-3 ">
        <h1>Winners Record</h1>
        <Divider />

        <div className="relative w-full flex items-center gap-3 my-3">
          <p className="w-24">Select Date: </p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full lg:max-w-sm justify-start text-left font-normal",
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

        <div className="flex gap-3 items-center">
          <p className="w-24">Select Game: </p>
          <Select>
            <SelectTrigger className="w-full lg:max-w-sm">
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

        <div className="flex items-center justify-end">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={getGameData}
          >
            Fetch
          </Button>
        </div>

        {submit && (
          <div className="border border-indigo-600 rounded-md p-3 my-3 hover:bg-indigo-600 hover:text-white ">
            <p>Winning Number: 5</p>
            <p>Total Winner: 1</p>
            <p>Total Winning amount: 23423423</p>
          </div>
        )}

        {submit && (
          <div className="flex flex-wrap gap-3 mt-6 items-center justify-center">
            {userData.map((user: UserGameType) => (
              <div
                key={user.userId}
                className="bg-indigo-600 text-white rounded-md p-3"
              >
                <p>User Id: {user.userId}</p>
                <p>Win Amount: {user.winAmount}</p>
              </div>
            ))}
          </div>
        )}
      </div>
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

type UserGameType = {
  userId: number;
  winAmount: number;
};

const userGameFetchedData = [
  { userId: 1, winAmount: 234 },
  { userId: 2, winAmount: 234 },
  { userId: 3, winAmount: 234 },
  { userId: 4, winAmount: 234 },
  { userId: 5, winAmount: 234 },
  { userId: 6, winAmount: 234 },
  { userId: 7, winAmount: 234 },
  { userId: 8, winAmount: 234 },
];
