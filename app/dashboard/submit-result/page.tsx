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
import { cn } from "@/lib/utils";
import {
  Avatar,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import { format } from "date-fns";

import { Calendar as CalendarIcon } from "lucide-react";
import { useCallback, useState } from "react";

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

  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={user.status == "active" ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <div className="mb-3 flex bg-white p-4 rounded-md  justify-between ">
        <div>
          <h1 className="font-semibold">Welcome Back, Arnold</h1>
          <p>{new Date().toDateString()}</p>
        </div>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>

      <section className="flex gap-3 ">
        <div className="w-96 bg-white p-3 rounded-md flex flex-col gap-2">
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

        <div className="bg-white p-3 rounded-md flex flex-wrap gap-6 justify-between  flex-1">
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
        <Table aria-label="Example table with custom cells" removeWrapper>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.userId}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </>
  );
}

const columns = [
  { name: "User Id", uid: "userId" },
  { name: "Bid Amount", uid: "bidAmount" },
  { name: "Win Amount", uid: "winAmount" },
];

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
