import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function FormSubmission() {

    const onSearchSubmit = (response) =>{
        console.log(response);
    }
    return (
        <div>
            <SearchBar onSearchSubmit={onSearchSubmit} />
        </div>
    )
}
