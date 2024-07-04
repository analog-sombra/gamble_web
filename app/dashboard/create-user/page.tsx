"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="p-3 bg-white rounded-md w-full flex flex-col gap-3">
        <h1 className="text-xl text-center font-semibold">Create User</h1>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Name: </p>
          <Input
            type="text"
            placeholder="Name"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Emali: </p>
          <Input
            type="email"
            placeholder="Email"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Number: </p>
          <Input
            type="tel"
            placeholder="Number"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Password: </p>
          <Input
            type="password"
            placeholder="Password"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">User Type: </p>
          <Select>
            <SelectTrigger className="w-full lg:max-w-sm">
              <SelectValue placeholder="Select a Game" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Games</SelectLabel>
                {userType.map((user) => (
                  <SelectItem value={user.id} key={user.id}>
                    {user.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" color="primary">
          Create
        </Button>
      </div>
    </>
  );
}

const userType = [
  {
    name: "admin",
    id: "1",
  },
  {
    name: "sub admin",
    id: "2",
  },
  {
    name: "user",
    id: "3",
  },
];
