import React, { useContext, useState } from 'react'
import PostListing from '../../components/PostListing/PostListing'
import { PostsContext } from '../../contexts/PostsContext';

import './Search.css'

function Search() {
    const { posts } = useContext(PostsContext);
    const [searchedP, setSearchP] = useState([]);
    
    return (
        <main>
            <PostListing p={posts} />
        </main>
    )
}

export default Search