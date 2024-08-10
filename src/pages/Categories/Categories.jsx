import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

import PostListing from '../../components/PostListing/PostListing'
import DataBox from '../../components/DataBox/DataBox';
import CategoriesFilter from '../../components/CategoriesFilter/CategoriesFilter';

import './Categories.css'

import bg from "../../assets/Image.png"

function Blog() {
    const location = useLocation();

    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    const p = [
        {
            authorId: "123",
            title: "This Is A Blog1",
            content: "<h1>hello welcome</h1><p>Enjoy Reading</p>",
            tags: ["tech", "sports"],
            likes: [],
            dislikes: [],
            createdAt: "22/02/2024",
            updatedAt: "22/02/2024",
        },
        {
            authorId: "Jason Francisco",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
            tags: ["Technology", "Sport"],
            likes: [],
            dislikes: [],
            createdAt: "22/02/2024",
            updatedAt: "22/02/2024",
        },
        {
            authorId: "Jason Francisco",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
            tags: ["Technology", "Sport"],
            likes: [],
            dislikes: [],
            createdAt: "22/02/2024",
            updatedAt: "22/02/2024",
        },
        {
            authorId: "Jason Francisco",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
            tags: ["Technology", "Sport"],
            likes: [],
            dislikes: [],
            createdAt: "22/02/2024",
            updatedAt: "22/02/2024",
        },
        {
            authorId: "Jason Francisco",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
            tags: ["Technology", "Sport"],
            likes: [],
            dislikes: [],
            createdAt: "22/02/2024",
            updatedAt: "22/02/2024",
        },
    ];


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

    const { tag } = useParams();

    useEffect(() => {
        const initialSelectedTags = tag ? [tag] : [];
        setSelectedTags(initialSelectedTags);

        setFilteredPosts(p.filter((post) => {
            return selectedTags.every((tag) => post.tags.includes(tag));
        }));
    }, [location.search, selectedTags]);

    return (
        <main>
            <section className='blog-hero'>
                <div className="blog-hero-container" data-theme="dark">
                    <div className="bg-img">
                        <img src={p[1].img || bg} alt="" />
                    </div>
                    <DataBox data={p[1]} h1Class={null} />
                </div>
            </section>
            <CategoriesFilter selectedTags={selectedTags} onTagClick={handleTagClick} />
            <section className='blog-list'>
                <PostListing p={filteredPosts} />
                <div className='downBtn'>
                    <button onClick={null} className="btn">Load More</button>
                </div>
            </section>
        </main>
    )
}

export default Blog