import React, { ChangeEvent } from 'react'
import { Button } from '../ui/button'
import Input from 'antd/es/input'

interface ProbsType {
    className?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void,
    placeholder?: string,
    value?: string
}

const SearchFiedls = (probs: ProbsType) => {
    return (
        <div className="flex h-10 w-full mb-1 max-w-sm items-center">
            <Input
                className={`h-full  rounded-none rounded-l-md placeholder:font-semibold ${probs.className}`}
                type="text"
                onChange={probs.onChange}
                value={probs.value}
                placeholder={probs.placeholder}
            />
            <Button
                onClick={probs.onClick}
                className="h-full bg-blue-500  rounded-none rounded-r-md w-40"
                type="submit" >
                Search
            </Button>
        </div>
    )
}

export default SearchFiedls
