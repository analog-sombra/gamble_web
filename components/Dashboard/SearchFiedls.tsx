import React from 'react'
import { Button } from '../ui/button'
import Input from 'antd/es/input'

const SearchFiedls = (probs: any) => {
    return (
        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
            <Input
                className={`h-full  rounded-none rounded-l-md placeholder:font-semibold ${probs.className}`}
                type="text"
                placeholder={probs.placeholder}
            />
            <Button
                className="h-full bg-blue-500  rounded-none rounded-r-md w-40"
                type="submit" >
                Search
            </Button>
        </div>
    )
}

export default SearchFiedls
