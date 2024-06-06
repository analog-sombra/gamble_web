// https://in.pinterest.com/pin/388717011599283978/
// https://in.pinterest.com/pin/844493670812075/
"use client";

import { MaterialSymbolsLightVisibilityRounded } from "@/components/Icon";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useCallback } from "react";

export default function Dashboard() {
  // for Match
  const renderMatchCell = useCallback((match: any, columnKey: any) => {
    const cellValue = match[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <>
            <div className="font-semibold">{match.name}</div>
            <p className="text-xs text-gray-600">{match.key}</p>
          </>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={match.status == "active" ? "success" : "warning"}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center  gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <MaterialSymbolsLightVisibilityRounded className="text-blue-500" />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <div className="w-full flex-1 rounded-lg mt-3 p-3">
        <Table aria-label="Example table with custom cells" removeWrapper>
          <TableHeader columns={matchColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={liveMatchData}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderMatchCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

/* Table Data */

const matchColumns = [
  { name: "TITLE", uid: "name" },
  { name: "BET", uid: "totalBet" },
  { name: "USERS", uid: "users" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

type LiveMatchType = {
  id: number;
  key: string;
  name: string;
  totalBet: string;
  status: string;
  users: number;
};

const liveMatchData: LiveMatchType[] = [
  {
    id: 0,
    key: "123-12-123",
    name: "Monday Mania",
    users: 23,
    totalBet: "₹50320",
    status: "active",
  },
  {
    id: 1,
    key: "123-12-123",
    name: "Monday Masala",
    users: 23,
    totalBet: "₹2342340",
    status: "inactive",
  },
  {
    id: 2,
    key: "123-12-123",
    name: "Final Frenzy",
    users: 23,
    totalBet: "₹52234",
    status: "active",
  },
  {
    id: 3,
    key: "123-12-123",
    name: "Bracket Buster Bonanza",
    users: 23,
    totalBet: "₹4635343",
    status: "inactive",
  },
  {
    id: 4,
    key: "123-12-123",
    name: "Madness Mayhem",
    users: 23,
    totalBet: "₹59023",
    status: "active",
  },
  {
    id: 5,
    key: "123-12-123",
    name: "Slam Dunk Spectacular",
    users: 23,
    totalBet: "₹20374",
    status: "inactive",
  },
  {
    id: 6,
    key: "123-12-123",
    name: "Court-side Showdown",
    users: 23,
    totalBet: "₹128300",
    status: "active",
  },
];
