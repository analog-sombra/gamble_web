"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "antd";

export default function AdminPanel() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full bg-white rounded-md">
        <h1 className="m-auto font-bold text-xl my-3">All Games</h1>
        <div className="w-full flex-1 rounded-lg p-3">
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-zinc-100">
                <TableHead className="text-center">No</TableHead>
                <TableHead className="text-center">Gamer Name</TableHead>
                <TableHead className="text-center">Open Time</TableHead>
                <TableHead className="text-center">Close Time</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {games.map(game => (
                <TableRow className="" key={game.no}>
                  <TableCell className="text-center min-w-15">{game.no}</TableCell>
                  <TableCell className="text-center   font-medium">{game.gameName}</TableCell>
                  <TableCell className="text-center  min-w-28">{game.openTime}</TableCell>
                  <TableCell className="text-center min-w-28">{game.closeTime}</TableCell>
                  <TableCell className="text-center min-w-28">
                    {game.status == "open" ? (
                      <Tag color="green">{game.status}</Tag>
                    ) : (
                      <Tag color="red">{game.status}</Tag>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>

          <Button className="w-full mt-4">View All</Button>
        </div>
      </div>
    </>
  );
}

const games = [
  {
    no: 1,
    gameName: "Desawar",
    openTime: "05:30am",
    closeTime: "03:30am",
    status: "open",
  },
  {
    no: 2,
    gameName: "Silver guru",
    openTime: "05:30 am",
    closeTime: "03:50pm",
    status: "open",
  },
  {
    no: 3,
    gameName: "Faridabad",
    openTime: "05:30 am",
    closeTime: "05:30 pm",
    status: "close",
  },
  {
    no: 4,
    gameName: "Gaziabad",
    openTime: "5:30 am",
    closeTime: "8:00 pm",
    status: "open",
  },
  {
    no: 5,
    gameName: "Gali",
    openTime: "5:30 am",
    closeTime: "11:10 pm",
    status: "close",
  },
];
