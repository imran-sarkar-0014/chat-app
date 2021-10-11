import React, { useState, useEffect } from 'react'

import { SearchContainer, SearchHeader } from '../components'

import { search } from '../api/expressApi'

const Search = () => {

    const [searchKey, setSearchKey] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [time, setTime] = useState(null);

    useEffect(() => {
        if (searchKey) {

            if (time != null)
                clearTimeout(time)

            const t = setTimeout(() => {
                search(searchKey, (result) => {
                    setSearchResult(result)
                })
            }, 700)

            setTime(t)

        } else {
            setSearchResult([])
        }
    }, [searchKey])

    return (
        <div style={{
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            top: "0",
            left: '0',
            backgroundColor: '#fff',
            height: '100%',
            width: '100%',
        }}>
            <SearchHeader searchKey={searchKey} setSearchKey={setSearchKey} />
            <SearchContainer searchResult={searchResult} />
        </div>
    )
}

export default Search
