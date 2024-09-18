"use client";

import { IoShareSocial } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Modal, notification } from 'antd';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AxiosResponse } from "axios";
import { HttpMethodType, makeApiRequeest } from "@/lib/api/untils";
import { BASE_URL } from "@/lib/const";
import { ApiErrorType } from "@/models/response";
import { CreateUserForm, CreateUserSchema } from "@/schema/create";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { CopyIcon } from "lucide-react";

export default function CreateUser() {
  const [openDialog, setOpenDialog] = useState(false);
  const [password, setPassword] = useState('')
  const [api, contextHolder] = notification.useNotification();
  const apiResponse = useRef<AxiosResponse>();


  const form = useForm<CreateUserForm>({
    resolver: valibotResolver(CreateUserSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;


  const { mutate } = useMutation({
    mutationKey: ["create_user"],
    mutationFn: async (data: CreateUserForm) => {
      const responsedata = await makeApiRequeest(
        `${BASE_URL}/api/user/create`,
        HttpMethodType.POST,
        { bodyParam: data, includeToke: false, makeNewTokenReq: false, }
      )
      console.log(form.getValues("email"));
      apiResponse.current = responsedata;

      setOpenDialog(true)
      form.reset();
      toast.success("User Create success");
    },
    onError: (error: ApiErrorType) => {
      toast.error(error.response.data.message);
    },
  });

  const errorfn = async (data: any) => {
    // mutate(data)
  };

  const openNotification = (value: string) => {
    api.success({
      message: `${value} copied !!`,
      description: "",
      placement: "top"
    });
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={openDialog}
        onOk={e => setOpenDialog(false)}
        onCancel={e => setOpenDialog(false)}
        centered
        closable={false}
        footer={[
          <Button key={1} onClick={e => setOpenDialog(false)} className="border hover:bg-slate-200" variant="secondary">
            Close
          </Button>,
          <Button key={2} onClick={e => setOpenDialog(false)} className="ml-3  bg-blue-600 hover:bg-blue-700" variant="default" >
            <IoShareSocial className="mr-2" />
            <span>Share</span>
          </Button>
        ]}
      >
        <h1 className="text-black font-semibold text-xl mb-5">User Created ✅</h1>

        <div className="flex items-center justify-start mb-1">
          <span className="font-semibold mx-2">Email :</span>
          <span>{apiResponse.current?.data.data.email}</span>

          <div className="grow"></div>
          <Button onClick={e => {
            navigator.clipboard.writeText(apiResponse.current?.data.data.email);
            openNotification("Email")
          }} type="submit" size="sm" className="px-3 text-black bg-transparent hover:bg-slate-100">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-start mt-1 ">
          <span className="font-semibold mx-2">Password:</span>
          <span className=" w-[80%] overflow-hidden">{password}</span>

          <div className="grow"></div>
          <Button onClick={e => {
            navigator.clipboard.writeText(password);
            openNotification("Password")
          }} type="submit" size="sm" className="px-3 bg-transparent text-black hover:bg-slate-100">
            {/* <span className="sr-only">Copy</span> */}
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
      </Modal>


      <div className="p-3 bg-white rounded-md w-full flex flex-col items-start gap-3">
        <h1 className="text-2xl font-semibold">Create User</h1>
        <Form {...form}>
          <form
            onSubmit={handleSubmit((createUserData) => mutate(createUserData), errorfn)}
            className=" md:space-y-6 mt-3"
          >

            <div className="flex gap-5">
              <div className=" gap-3 items-center">
                <p className="text-sm  font-medium text-gray-600 w-20 mb-1 ">Name</p>
                <Input
                  id="name"
                  type="Enter text"
                  placeholder="Name"
                  {...register("name")}
                  className="w-[400px] h-10 lg:max-w-sm"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message?.toString()}
                  </p>
                )}
              </div>

              <div className="  gap-3 items-center">
                <p className="text-sm  font-medium text-gray-600 w-20 mb-1 ">Emali</p>
                <Input
                  type="Enter email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-[400px] h-10 lg:max-w-sm"

                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
            </div>


            <div className="flex gap-5">
              <div className="  gap-3 items-center">
                <p className="text-sm  font-medium text-gray-600 w-20 mb-1 ">Number</p>
                <Input
                  type="Enter tel"
                  placeholder="Number"
                  {...register("number")}
                  className="w-[400px] h-10 lg:max-w-sm"

                />
                {errors.number && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.number.message?.toString()}
                  </p>
                )}
              </div>

              <div className=" gap-3 items-center">
                <FormField
                  {...register("password")}
                  control={control}
                  name="password"
                  render={({ field }) => <>
                    <p className="text-sm  font-medium text-gray-600 w-20 mb-1 ">Password</p>
                    <FormItem>
                      <Input
                        {...field}
                        {...register("password")}
                        onChange={e => setPassword(e.target.value)}
                        defaultValue={field.value}
                        type="Enter password"
                        placeholder="Password"
                        className="w-[400px] h-10 lg:max-w-sm"
                      />
                      {errors.password && (
                        <p className="text-xs text-red-500">
                          {errors.password.message?.toString()}
                        </p>
                      )}
                    </FormItem>
                  </>}
                />

              </div>
            </div>

            <div className="  gap-3 items-center justify-center w-72">
              <p className="text-sm  font-medium text-gray-600 w-20 mb-1 ">User Type</p>
              <FormField
                {...register("role")}
                control={control}
                name="role"
                render={({ field }) =>
                  <>
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[380px]">
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
                    {errors.role && (
                      <p className="text-xs text-red-500">
                        {errors.role.message?.toString()}
                      </p>
                    )}
                  </>}
              />
            </div>

            <div className="flex w-full justify-start">
              <Button className="w-[130px] mt-5" type="submit">Create</Button>
            </div>

          </form>
        </Form >
      </div>
    </>
  );
}

const userType: string[] = ["SYSTEM", "ADMIN", "WORKER", "USER"];
