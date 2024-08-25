import React, { useContext, useState } from 'react'
import PostListing from '../../components/PostListing/PostListing'
import { PostsContext } from '../../contexts/PostsContext';

import './Search.css'

function Search() {
    const { posts } = useContext(PostsContext);
    const [searchedP, setSearchP] = useState([]);
    const [searchKeyWord, setSearchKeyWord] = useState([]);

    return (
        <main>
            <section className="search-form">
                <form action="">
                    <input type="search" name="search" id="search" placeholder='Search here...' />
                    
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