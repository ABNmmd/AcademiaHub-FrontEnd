import React, { useContext, useState } from 'react'
import PostListing from '../../components/PostListing/PostListing'
import { PostsContext } from '../../contexts/PostsContext';

import { IoSearchSharp } from "react-icons/io5";

import './Search.css'

function Search() {
    const { posts } = useContext(PostsContext);
    const [showResult, setShowResult] = useState(false);
    const [searchedP, setSearchedP] = useState([]);
    const [searchKeyWord, setSearchKeyWord] = useState([]);
    const [searchString, setSearchString] = useState('');

    const handleKeyWords = (e) => {
        const sString = e.target.value;
        setSearchKeyWord(sString.split(' '));
    }

    const handleSearchBtn = (e) => {
        e.preventDefault();
        const foundPosts = posts.filter((post) =>
            searchKeyWord.every((word) => post.title.includes(word))
        );
        console.log(foundPosts);
        setSearchedP(foundPosts);
        setSearchString(searchKeyWord.join(' '));
        setShowResult(true);
    }

    return (
        <main className='search'>
            <section className="search-form">
                <form action="">
                    <input type="search" onChange={handleKeyWords} name="search" id="search" placeholder='Search here...' />
                    <button type="submit" onClick={handleSearchBtn}><IoSearchSharp /></button>
                </form>
            </section>
            {showResult && <section className="search-result">
                <h2>Search Result Of <span>{searchString}</span></h2>
                <PostListing p={searchedP} />
            </section>}
        </main>
    )
}

export default Search