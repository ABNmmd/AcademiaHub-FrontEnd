import React, { useContext } from 'react'
import PostListing from '../../components/PostListing/PostListing'
import { PostsContext } from '../../contexts/PostsContext';

import './Search.css'

function Search() {
    const {  } = useContext(PostsContext);
    return (
        <main>
            <PostListing p={} />
        </main>
    )
}

export default Search