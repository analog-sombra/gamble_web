"use client";

import {
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback } from "react";

export default function AdminPanel() {
  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "status":
        return (
          <Chip
            className="capitalize"
            color={user.status == "open" ? "success" : "danger"}
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
      <div className="w-full h-full bg-white rounded-md">
        <div className="w-full flex-1 rounded-lg p-3">
          <Table
            aria-label="Example table with custom cells"
            className="border-none shadow-none"
            removeWrapper
            isStriped
          >
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
            <TableBody items={game}>
              {(item) => (
                <TableRow
                  key={item.no}
                  className="hover:bg-[#eee] rounded-md w-full"
                >
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
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

const game = [
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
