"use client";

import SimpleCard from "@/components/Dashboard/SimpleCard";
import {
  MaterialSymbolsAttachMoney,
  MaterialSymbolsDone,
  MaterialSymbolsPerson,
  MaterialSymbolsPersonRaisedHand,
  MaterialSymbolsWifiRounded,
} from "@/components/Icon";
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

export default function Home() {
  return (
    <div>
      {/* Dashboard data */}
      <div className={`flex flex-col lg:flex-row justify-between gap-3`}>
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
            <h3 className="text-xl p-3">Users</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Bet</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Wallet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.betCompleted}</TableCell>
                    <TableCell>
                      {user.status == "active" ? (
                        <Tag color="green">{user.status}</Tag>
                      ) : (
                        <Tag color="red">{user.status}</Tag>
                      )}
                    </TableCell>
                    <TableCell>{user.wallet}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>
                    <Button className="w-full">View All</Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        {/* mathc */}
        <div className="bg-white p-3 rounded-t-small">
          <h3 className="text-xl p-3">Live Match Data</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Bet</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {liveMatchData.map((match) => (
                <TableRow key={match.id}>
                  <TableCell className="font-medium">{match.name}</TableCell>
                  <TableCell>{match.totalBet}</TableCell>
                  <TableCell>
                    {match.status == "active" ? (
                      <Tag color="green">{match.status}</Tag>
                    ) : (
                      <Tag color="red">{match.status}</Tag>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>
                  <Button className="w-full">View All</Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
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
