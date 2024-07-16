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
      <div className="p-3 bg-white rounded-md w-full flex flex-col items-center gap-3">
        <h1 className="text-xl text-center font-semibold">Create User</h1>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Name: </p>
          <Input
            type="Enter text"
            placeholder="Name"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Emali: </p>
          <Input
            type="Enter email"
            placeholder="Email"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Number: </p>
          <Input
            type="Enter tel"
            placeholder="Number"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Password: </p>
          <Input
            type="Enter password"
            placeholder="Password"
            className="w-full lg:max-w-sm"
          />
        </div>
        <div className="flex  gap-3 items-center justify-center w-72">
          <p className="text-sm font-normal w-20">User Type: </p>
          <Select>
            <SelectTrigger className="w-full lg:max-w-sm">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectGroup>
                {userType.map((user) => (
                  <SelectItem value={user.id} key={user.id}>
                    {user.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-1/3 mt-4" color="primary">
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
