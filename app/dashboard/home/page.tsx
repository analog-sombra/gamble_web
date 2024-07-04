"use client";

import SimpleCard from "@/components/Dashboard/SimpleCard";
import {
  MaterialSymbolsAttachMoney,
  MaterialSymbolsDone,
  MaterialSymbolsPerson,
  MaterialSymbolsPersonRaisedHand,
  MaterialSymbolsWifiRounded,
} from "@/components/Icon";
import {
  Avatar,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import { useCallback } from "react";

export default function Home() {
  // for user
  const renderUserCell = useCallback((user: any, columnKey: any) => {
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
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <div className="mb-3 flex bg-white p-4 rounded-md  justify-between ">
        <div>
          <h1 className="font-semibold">Welcome Back, Arnold</h1>
          <p>{new Date().toDateString()}</p>
        </div>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>

      {/* Dashboard data */}
      <div className="flex flex-row justify-between gap-3">
        <div className="flex-1">
          <div className="bg-white p-3 rounded-md flex flex-wrap gap-6 justify-between ">
            {cardData.map((item) => (
              <SimpleCard count={item.count} title={item.name} key={item.name}>
                {item.icon}
              </SimpleCard>
            ))}
          </div>

          {/* User */}
          <div className="relative mt-3 bg-white p-3">
            <Table aria-label="Example table with custom cells" removeWrapper>
              <TableHeader columns={userColumns}>
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
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderUserCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <Button className="text-left w-full mt-2 bg-[#3f2632] text-white">
              View All
            </Button>
          </div>
        </div>
        {/* mathc */}
        <div className="bg-white p-3 rounded-t-small">
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
          <Button className="text-left w-full mt-2 bg-[#3f2632] text-white">
            View All
          </Button>
          <Button className="text-left w-full mt-2 bg-blue-800 text-white">
            <Link href="/dashboard/home/add-withdraw">Add/Withdraw Money</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    name: "ALL users",
    count: "284739",
    icon: (
      <span className="text-red-500 bg-red-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsPerson />
      </span>
    ),
  },
  {
    name: "Total Money",
    count: "₹20934",
    icon: (
      <span className="text-yellow-500 bg-yellow-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsAttachMoney />
      </span>
    ),
  },
  {
    name: "Participant",
    count: "400+",
    icon: (
      <span className="text-teal-500 bg-teal-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsPersonRaisedHand />
      </span>
    ),
  },
  {
    name: "Live today",
    count: "8",
    icon: (
      <span className="text-blue-500 bg-blue-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsWifiRounded />
      </span>
    ),
  },
  {
    name: "Completed",
    count: "4",
    icon: (
      <span className="text-green-500 bg-green-500 bg-opacity-20 rounded-full p-2 text-xl mb-2">
        <MaterialSymbolsDone />
      </span>
    ),
  },
];

/* Table Data */
const userColumns = [
  { name: "NAME", uid: "name" },
  { name: "BET", uid: "betCompleted" },
  { name: "STATUS", uid: "status" },
  { name: "WALLET", uid: "wallet" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "inactive",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    wallet: 123123,
    betCompleted: 5,
  },
];

const matchColumns = [
  { name: "TITLE", uid: "name" },
  { name: "BET", uid: "totalBet" },
  { name: "STATUS", uid: "status" },
];

type LiveMatchType = {
  id: number;
  key: string;
  name: string;
  totalBet: string;
  status: string;
};

const liveMatchData: LiveMatchType[] = [
  {
    id: 0,
    key: "123-12-123",
    name: "Monday Mania",
    totalBet: "₹50320",
    status: "active",
  },
  {
    id: 1,
    key: "123-12-123",
    name: "Monday Masala",
    totalBet: "₹2342340",
    status: "inactive",
  },
  {
    id: 2,
    key: "123-12-123",
    name: "Final Frenzy",
    totalBet: "₹52234",
    status: "active",
  },
  {
    id: 3,
    key: "123-12-123",
    name: "Bracket Buster Bonanza",
    totalBet: "₹4635343",
    status: "inactive",
  },
  {
    id: 4,
    key: "123-12-123",
    name: "Madness Mayhem",
    totalBet: "₹59023",
    status: "active",
  },
  {
    id: 5,
    key: "123-12-123",
    name: "Slam Dunk Spectacular",
    totalBet: "₹20374",
    status: "inactive",
  },
  {
    id: 6,
    key: "123-12-123",
    name: "Court-side Showdown",
    totalBet: "₹128300",
    status: "active",
  },
];
