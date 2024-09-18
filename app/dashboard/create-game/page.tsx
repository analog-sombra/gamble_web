"use client"

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { TimePicker, Input } from 'antd'
import React from 'react'
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const Page = () => {
    const route = useRouter();


    return (
        <div className="flex flex-col items-start w-full h-full bg-white rounded-md">

            <h1 className="m-auto font-bold text-xl my-3">Daily work record</h1>

            <form className='flex flex-col mt-3 w-[500px] gap-5'>
                <div className='flex  flex-col gap-2'>
                    <Label>Game name</Label>
                    <Input type='text' placeholder='Enter game name' />
                </div>

                <div className='flex  gap-2'>
                    <div className='flex flex-col gap-2  w-full'>
                        <Label>Start time:</Label>
                        <TimePicker className='w-full' placeholder='Select start time' defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <Label>End time:</Label>
                        <TimePicker className='' placeholder='Select end time' defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                    </div>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <Label>Result time:</Label>
                    <TimePicker className='' placeholder='Select result time' defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                </div>

                <Button onClick={ e=>{route.replace("/dashboard/result-securite-page")}} className='bg-blue-600 mt-2 hover:bg-blue-700'>Submit</Button>
            </form>
        </div>
    )
}

export default Page;