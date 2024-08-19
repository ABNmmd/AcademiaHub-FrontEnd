import React, { useContext, useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { PostsContext } from '../../contexts/PostsContext';

import DataBox from '../../components/DataBox/DataBox'
import PostInteraction from '../../components/PostInteraction/PostInteraction';
import Comments from '../../components/Comments/Comments';
import RecPosts from '../../components/RecPosts/RecPosts';

import './Posts.css'
import bg from "../../assets/Image.png"

function Posts() {
    const { postId } = useParams();
    const { getOnePost } = useContext(PostsContext);

    useEffect(() => {
        const getPostData = async () => {
            try {
                
            } catch (error) {
                console.log(`Error fitshing post with id: ${postId}`, error);
            }
        };
        getPostData();
    },[]);

    // const post = {
    //     _id: postId,
    //     authorId: "Jason Francisco",
    //     title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //     content: "<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2><p>Fuga <strong>iusto </strong>autem cum inventore tempore corporis omnis, debitis iure culpa officiis cupiditate accusamus nisi dolor, aut mollitia, distinctio sint aliquam? <u>Culpa</u>.</p><ol><li><span>Lorem ipsum dolor sit amet</span></li><li><span>Fuga iusto autem cum inventore </span></li></ol>",
    //     tags: ["Technology", "Sport"],
    //     likes: [1, 2, 3],
    //     dislikes: [1, 2, 3, 4, 5, 6],
    //     createdAt: "22/02/2024",
    //     updatedAt: "22/02/2024",
    // };

    return (
        <main className='posts-page'>
            <section className="post">
                <DataBox data={post} />
                <PostInteraction likes={post.likes.length} dislikes={post.dislikes.length} />
                <div className="banner">
                    <img src={bg} alt="" />
                </div>
                <article className='post-content'>
                    {parse(post.content)}
                </article>
            </section>
            <Comments  postId={postId} />
            <RecPosts tags={post.tags} />
        </main>
    )
}

export default Posts