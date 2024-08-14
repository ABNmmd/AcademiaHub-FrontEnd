import React from 'react'
import parse from 'html-react-parser';

import DataBox from '../../components/DataBox/DataBox'

import './Posts.css'
import bg from "../../assets/Image.png"

function Posts() {
    const post = {
        authorId: "Jason Francisco",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        content: "<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2><p>Fuga <strong>iusto </strong>autem cum inventore tempore corporis omnis, debitis iure culpa officiis cupiditate accusamus nisi dolor, aut mollitia, distinctio sint aliquam? <u>Culpa</u>.</p><ol><li><span>Lorem ipsum dolor sit amet</span></li><li><span>Fuga iusto autem cum inventore </span></li></ol>",
        tags: ["Technology", "Sport"],
        likes: [],
        dislikes: [],
        createdAt: "22/02/2024",
        updatedAt: "22/02/2024",
    };

    return (
        <main className='posts-page'>
            <section className="post">
                <DataBox data={post} />
                <div className="banner">
                    <img src={bg} alt="" />
                </div>
                <article className='post-content'>
                    {parse(post.content)}
                </article>
            </section>
            <section className="comments">

            </section>
            <section className="related-posts">

            </section>
        </main>
    )
}

export default Posts