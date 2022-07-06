import {useState} from "react";

function Search({searchVal, handleSearchValue}) {


    return (
        <div class="input-group">
            <input 
            type="search" 
            value={searchVal}
            class="form-control rounded" 
            placeholder="Search" 
            aria-label="Search" aria-describedby="search-addon"
            onChange={e => handleSearchValue(e.target.value)} />
        </div>
    )
}

export default Search;