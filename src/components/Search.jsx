'use client'
import { Button, Label, SearchField } from '@heroui/react';
import React, { useState } from 'react';
import CardIdea from './CardIdea';

const Search = ({datas}) => {

    const [filteredCards,setFilteredCards]=useState(datas)
    const [search,setSearch]=useState('');
    const handleSearch=()=>{
        const result=datas.filter(data=>data.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredCards(result)

    }
    return (
        <div>
            <div >
            <SearchField name="search" >
                <Label>Search By Title</Label>
                <div className='flex'>
                <SearchField.Group className={'max-w-80 rounded-none'}>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="" placeholder="Search..." type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <SearchField.ClearButton />
                </SearchField.Group>
                <Button className={'rounded-none bg-fuchsia-900'} onClick={ handleSearch}>Search</Button>
                </div>
            </SearchField>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 mt-13'>


                {
                    filteredCards.map(data => <CardIdea key={data._id} data={data} ></CardIdea>)
                }
            </div>
            </div>
        </div>
    );
};

export default Search;