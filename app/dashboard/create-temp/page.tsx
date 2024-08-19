"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ApiErrorType } from "@/models/response";
import { CreateDemoPayment, demoPaymentGatewaySchema } from "@/schema/create";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateUser() {
    const form = useForm<CreateDemoPayment>({
        resolver: valibotResolver(demoPaymentGatewaySchema),
    });
    const [imageFile, setImageFile] = useState("")

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
        reset,
    } = form;

    const watchFile = watch('file');


    const { mutate } = useMutation({
        mutationKey: ["create_user"],
        mutationFn: async (data: CreateDemoPayment) => {

            // const responsedata = await makeApiRequeest(
            //     `${BASE_URL}/api/user/create`,
            //     HttpMethodType.POST,
            //     { bodyParam: data, includeToke: false, makeNewTokenReq: false, }
            // )
            // toast.success("User Create success");
        },
        onError: (error: ApiErrorType) => {
            // toast.error(error.response.data.message);
        },
    });

    const errorfn = async (data: any) => {
        console.log(data);
        console.log(imageFile);
    };

    return (
        <>
            <div className="p-3 bg-white rounded-md w-full flex flex-col items-center gap-3">
                <h1 className="text-xl text-center font-semibold">Create demo</h1>
                <Form {...form}>
                    <form
                        onSubmit={handleSubmit((demoPaymentData) => mutate(demoPaymentData), errorfn)}
                        className="space-y-4 md:space-y-6"
                    >

                        <div className="flex gap-3 items-center">
                            <p className="text-sm font-normal w-20">Name: </p>
                            <Input
                                id="name"
                                type="Enter text"
                                placeholder="Name"
                                {...register("name")}
                                className="w-full lg:max-w-sm"
                            />
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="text-sm font-normal w-20">Photo: </p>
                            <Input
                                {...register("file")}
                                type="file"
                                name="file"
                                onChange={e => {
                                    setImageFile(e.target.value)
                                }}
                                placeholder="select a img"
                                className="w-full lg:max-w-sm"
                            />
                        </div>
                        <div className="flex  gap-3 items-center justify-center w-72">
                            <p className="text-sm font-normal w-20">Status: </p>
                            <FormField
                                {...register("status")}
                                control={control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-48">
                                                    <SelectValue placeholder="select status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {status.map((user: string, index: number) => (
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
                        <div className="flex  gap-3 items-center justify-center w-72">
                            <p className="text-sm font-normal w-20">User Type: </p>
                            <FormField
                                {...register("gatewayType")}
                                control={control}
                                name="gatewayType"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-48">
                                                    <SelectValue placeholder="Gateway Type" />
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

const userType: string[] = ["QR", "UPI", "BANK"];
const status: string[] = ["Active", "Inactive"];
