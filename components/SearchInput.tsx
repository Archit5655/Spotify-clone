"use client"
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import qs from 'query-string'
import { useEffect } from 'react';
import Input from './Input';
const SearchInput = () => {
    const router=useRouter();
    const [value, setvalue] = useState<string>('')
    const debouncedvalue=useDebounce<string>(value,500)
    useEffect(() => {
        const query={
            title:debouncedvalue,

        }
        const url=qs.stringifyUrl({
            url:'/search',
            query:query
        })
        router.push(url)

    }, [debouncedvalue,router])


    
  return (
<Input placeholder='What do you want to listen to?'
value={value}
onChange={(e)=>setvalue(e.target.value)}
 />
  )
}

export default SearchInput
