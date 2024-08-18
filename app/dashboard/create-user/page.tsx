"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BASE_URL } from "@/lib/const";
import { ApiErrorType } from "@/models/response";
import { CreateUserForm, CreateUserSchema } from "@/schema/create";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserForm>({
    resolver: valibotResolver(CreateUserSchema),
  });

  const { mutate } = useMutation({
    mutationKey: ["create_user"],
    mutationFn: async (data: CreateUserForm) => {
      const responsedata = await axios.post(`${BASE_URL}/api/user/create`, {
        email: data.email,
        password: data.password,
        number: data.mobile,
        name: data.name,
        role: data.role,
      });

      toast.success("User Create success");
    },
    onError: (error: ApiErrorType) => {
      toast.error(error.response.data.message);
    },
  });

  const submit = async (data: CreateUserForm) => {
    console.log(data);
    // mutate(data)
  };
  const errorfn = async (data: any) => {
    console.log(data);
    // mutate(data)
  };

  return (
    <>
      <div className="p-3 bg-white rounded-md w-full flex flex-col items-center gap-3">
        <h1 className="text-xl text-center font-semibold">Create User</h1>
        <form
          onSubmit={handleSubmit(submit, errorfn)}
          className="space-y-4 md:space-y-6"
        >
          <div className="flex  gap-3 items-center">
            <p className="text-sm font-normal w-20">Name: </p>
            <Input
              id="name"
              type="Enter text"
              placeholder="Name"
              {...register("name")}
              className="w-full lg:max-w-sm"
            />
          </div>
          <div className="flex  gap-3 items-center">
            <p className="text-sm font-normal w-20">Emali: </p>
            <Input
              type="Enter email"
              placeholder="Email"
              {...register("email")}
              className="w-full lg:max-w-sm"
            />
          </div>
          <div className="flex  gap-3 items-center">
            <p className="text-sm font-normal w-20">Number: </p>
            <Input
              type="Enter tel"
              placeholder="Number"
              {...register("mobile")}
              className="w-full lg:max-w-sm"
            />
          </div>
          <div className="flex  gap-3 items-center">
            <p className="text-sm font-normal w-20">Password: </p>
            <Input
              type="Enter password"
              {...register("password")}
              placeholder="Password"
              className="w-full lg:max-w-sm"
            />
          </div>
          <div className="flex  gap-3 items-center justify-center w-72">
            <p className="text-sm font-normal w-20">User Type: </p>
            <Select {...register("role")}>
              <SelectTrigger className="w-full lg:max-w-sm">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  {userType.map((user: string, index: number) => (
                    <SelectItem value={user} key={index}>
                      {user}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button className="w-1/3 mt-4" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

const userType: string[] = ["SYSTEM", "ADMIN", "WORKER", "USER", "NONE"];
