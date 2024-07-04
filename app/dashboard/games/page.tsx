"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "antd";

export default function AdminPanel() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-md">
        <div className="w-full flex-1 rounded-lg p-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NO</TableHead>
                <TableHead>Gamer Name</TableHead>
                <TableHead>Open Time</TableHead>
                <TableHead>Close Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {games.map((game) => (
                <TableRow key={game.no}>
                  <TableCell>{game.no}</TableCell>
                  <TableCell className="font-medium">{game.gameName}</TableCell>
                  <TableCell>{game.openTime}</TableCell>
                  <TableCell>{game.closeTime}</TableCell>
                  <TableCell>
                    {game.status == "opem" ? (
                      <Tag color="green">{game.status}</Tag>
                    ) : (
                      <Tag color="red">{game.status}</Tag>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <Button className="w-full">View All</Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </>
  );
}

const columns = [
  { name: "NO", uid: "no" },
  { name: "Gamer Name", uid: "gameName" },
  { name: "Open Time", uid: "openTime" },
  { name: "Close Time", uid: "closeTime" },
  { name: "Status", uid: "status" },
];

const games = [
  {
    no: 1,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "open",
  },
  {
    no: 2,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "open",
  },
  {
    no: 3,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "close",
  },
  {
    no: 4,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "open",
  },
  {
    no: 5,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "close",
  },
  {
    no: 6,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "open",
  },
  {
    no: 7,
    gameName: "Monday Mania",
    openTime: "01:00 am",
    closeTime: "02:00 pm",
    status: "close",
  },
];
