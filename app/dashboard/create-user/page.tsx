"use client";

import { Avatar, Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="mb-3 flex bg-white p-4 rounded-md  justify-between ">
        <div>
          <h1 className="font-semibold">Welcome Back, Arnold</h1>
          <p>{new Date().toDateString()}</p>
        </div>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>
      <div className="p-3 bg-white rounded-md flex flex-col gap-3 w-96">
        <h1 className="text-xl text-center font-semibold">Create User</h1>
        <div className="flex  gap-3 items-center justify-between">
          <p className="text-sm font-normal w-20">Name: </p>
          <Input type="text" placeholder="Name" className="inline-block grow" />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Emali: </p>
          <Input
            type="email"
            placeholder="Email"
            className="inline-block grow"
          />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Number: </p>
          <Input type="tel" placeholder="Number" className="max-w-sm" />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">Password: </p>
          <Input type="password" placeholder="Password" className="max-w-sm" />
        </div>
        <div className="flex  gap-3 items-center">
          <p className="text-sm font-normal w-20">User Type: </p>
          <select
            name="games"
            id="games"
            className="border border-gray-200 rounded-md py-1 px-2 bg-[#f4f4f5] w-full "
            defaultValue=""
          >
            <option value="" disabled>
              Select user type
            </option>
            {userType.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <Button className="w-full" color="primary" radius="sm">
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
