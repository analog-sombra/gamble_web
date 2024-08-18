"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateUrl, HttpMethodType, makeApiRequeest, ParamType } from "@/lib/api/untils";
import { BASE_URL } from "@/lib/const";
import { ApiErrorType } from "@/models/response";
import { CreateUserForm, CreateUserSchema } from "@/schema/create";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { url } from "inspector";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreateUser() {
  const form = useForm<CreateUserForm>({
    resolver: valibotResolver(CreateUserSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const { mutate } = useMutation({
    mutationKey: ["create_user"],
    mutationFn: async (data: CreateUserForm) => {

      const responsedata = await makeApiRequeest(
        `${BASE_URL}/api/user/create`,
        HttpMethodType.POST,
        { bodyParam: data, includeToke: false, makeNewTokenReq: false, }
      )
      toast.success("User Create success");
    },
    onError: (error: ApiErrorType) => {
      toast.error(error.response.data.message);
    },
  });

  const errorfn = async (data: any) => {
    console.log(data);
    // mutate(data)
  };

  return (
    <>
      <div className="p-3 bg-white rounded-md w-full flex flex-col items-center gap-3">
        <h1 className="text-xl text-center font-semibold">Create User</h1>
        <Form {...form}>
          <form
            onSubmit={handleSubmit((createUserData) => mutate(createUserData), errorfn)}
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
                {...register("number")}
                className="w-full lg:max-w-sm"
              />
            </div>
            <div className="flex gap-3 items-center">
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
              <FormField
                {...register("role")}
                control={control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {userType.map((user: string, index: number) => (
                            <SelectItem value={user} key={index}>
                              {user.replace(user.slice(1, user.length), user.slice(1, user.length).toLowerCase())}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Create</Button>
          </form>
        </Form >
      </div>
    </>
  );
}

const userType: string[] = ["SYSTEM", "ADMIN", "WORKER", "USER"];
