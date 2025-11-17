import { useLocation } from '@remix-run/react';
import React from 'react'
import { LuSearch } from "react-icons/lu";

const MainSearch = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const query = params.get("q") || ""

    return (
        <>

            <form action="/web/browse" className={`bg-gray-100 rounded-full h-[40px] flex place-items-center pl-[20px] gap-2 max-w-[50%] grow group hover:shadow hover:bg-white`}>
                <input type="text"
                    name="q"
                    defaultValue={query}
                    className={`w-full bg-transparent outline-none`}
                    placeholder='Search businesses...'
                />
                <button className={`h-full bg-gray-500 min-w-[70px] w-[70px] rounded-full text-white flex place-items-center place-content-center text-xl group-hover:bg-gray-700 group-hover:cursor-pointer`}>
                    <LuSearch />
                </button>
            </form>
        </>
    )
}

export default MainSearch
