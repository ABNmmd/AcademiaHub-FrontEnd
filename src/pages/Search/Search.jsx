import React, { useContext, useState } from 'react'
import PostListing from '../../components/PostListing/PostListing'
import { PostsContext } from '../../contexts/PostsContext';

import './Search.css'

function Search() {
    const { posts } = useContext(PostsContext);
    const [searchedP, setSearchP] = useState([]);
    const [searchKeyWord, setSearchKeyWord] = useState([]);

    const handleKeyWords = (e) => {
        const sString = e.target.value;
        setSearchKeyWord(sString.split(' '));
    }

    const handleSearchBtn = () => {
        
    }

    return (
        <main>
            <section className="search-form">
                <form action="">
                    <input type="search" onChange={handleKeyWords} name="search" id="search" placeholder='Search here...' />
                    <button type="button" onClick={handleSearchBtn}></button>
                </form>
            </section>
            <section className="search-result">
                <h2>Search Result Of {searchKeyWord.join(' ')}</h2>
                <PostListing p={searchedP} />
            </section>
        </main>
    )
}

export default Search