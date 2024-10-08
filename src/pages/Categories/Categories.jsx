import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';

import PostListing from '../../components/PostListing/PostListing'
import DataBox from '../../components/DataBox/DataBox';
import CategoriesFilter from '../../components/CategoriesFilter/CategoriesFilter';

import './Categories.css'

import bg from "../../assets/Image.png"

function Blog() {
    const { tag } = useParams();
    const { posts } = useContext(PostsContext);

    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;


    // const p = [
    //     {
    //         authorId: "123",
    //         title: "This Is A Blog1",
    //         content: "<h1>hello welcome</h1><p>Enjoy Reading</p>",
    //         tags: ["tech", "sports"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    // ];


    const handleTagClick = (tag) => {
        const newSelectedTags = [...selectedTags];
        if (newSelectedTags.includes(tag)) {
            const index = newSelectedTags.indexOf(tag);
            newSelectedTags.splice(index, 1);
        } else {
            newSelectedTags.push(tag);
        }
        setSelectedTags(newSelectedTags);
    };

    const handleLoadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    const [currentPosts, setCurrentPosts] = useState([]);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);


    useEffect(() => {
        setSelectedTags(tag ? [tag] : []);

        // console.log('selectedTags:', selectedTags);
    }, [tag]);

    useEffect(() => {
        setFilteredPosts(posts.filter((post) =>
            selectedTags.every((tag) => post.tags.includes(tag))
        ));

        // console.log('filteredPosts:', filteredPosts);
    }, [selectedTags, posts]);

    useEffect(() => {
        const newPosts = filteredPosts.slice(0, currentPage * postsPerPage);
        setCurrentPosts(newPosts);
    }, [filteredPosts, currentPage]);


    useEffect(() => {
        if (posts.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentPostIndex(prevIndex => (prevIndex + 1) % posts.length);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [posts]);



    return (
        <main>
            <section className='blog-hero'>
                <div className="blog-hero-container" data-theme="dark">
                    <div className="bg-img">
                        <img src={posts[currentPostIndex]?.image?.imageUrl || bg} alt="" />
                    </div>
                    <DataBox data={posts[currentPostIndex]} h1Class={null} />
                </div>
            </section>
            <CategoriesFilter selectedTags={selectedTags} setSelectedTags={setSelectedTags} onTagClick={handleTagClick} />
            <section className='blog-list'>
                <PostListing p={currentPosts} />
                {currentPosts.length < filteredPosts.length && (
                    <div className='downBtn'>
                        <button onClick={handleLoadMore} className="btn">Load More</button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Blog