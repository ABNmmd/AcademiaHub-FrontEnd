import React, { useContext, useEffect, useState } from 'react'
import Slider from "react-slick";
import { PostsContext } from '../../contexts/PostsContext';

import DataBox from '../DataBox/DataBox';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RecPosts.css'
import bg from "../../assets/Image.png"

function RecPosts({ tags }) {
    const [recPosts, setRecPosts] = useState([]);
    const { posts } = useContext(PostsContext);
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

    useEffect(() => {
        setRecPosts(p.filter((post) =>
            tags?.every((tag) => post.tags.includes(tag))
        ));
    }, [tags, p]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1
    };

    return (
        <section className="related-posts">
            <Slider {...settings}>
                {
                    recPosts.map((post, index) => (
                        <div key={index} className="post-box">
                            <div className="image">
                                <img src={bg} alt="" />
                            </div>
                            <DataBox data={post} h1Class={"h1-posts"} />
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default RecPosts