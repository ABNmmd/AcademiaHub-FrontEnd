import React, { useContext } from 'react'

import { PostsContext } from '../../contexts/PostsContext';

import Hero from '../../components/Hero/Hero';
import PostLayout from '../../components/PostLayout/PostLayout';

import './Home.css'

function Home() {
  const { posts } = useContext(PostsContext);
  // const p = [
  //   {
  //     authorId: "123",
  //     title: "This Is A Blog1",
  //     content: "<h1>hello welcome</h1><p>Enjoy Reading</p>",
  //     tags: ["tech", "sports"],
  //     likes: [],
  //     dislikes: [],
  //     createdAt: "22/02/2024",
  //     updatedAt: "22/02/2024",
  //   },
  //   {
  //     authorId: "Jason Francisco",
  //     title: "The Impact of Technology on the Workplace: How Technology is Changing",
  //     content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
  //     tags: ["Technology", "Sport"],
  //     likes: [],
  //     dislikes: [],
  //     createdAt: "22/02/2024",
  //     updatedAt: "22/02/2024",
  //   },
  //   {
  //     authorId: "Jason Francisco",
  //     title: "The Impact of Technology on the Workplace: How Technology is Changing",
  //     content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
  //     tags: ["Technology", "Sport"],
  //     likes: [],
  //     dislikes: [],
  //     createdAt: "22/02/2024",
  //     updatedAt: "22/02/2024",
  //   },
  //   {
  //     authorId: "Jason Francisco",
  //     title: "The Impact of Technology on the Workplace: How Technology is Changing",
  //     content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
  //     tags: ["Technology", "Sport"],
  //     likes: [],
  //     dislikes: [],
  //     createdAt: "22/02/2024",
  //     updatedAt: "22/02/2024",
  //   },
  //   {
  //     authorId: "Jason Francisco",
  //     title: "The Impact of Technology on the Workplace: How Technology is Changing",
  //     content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
  //     tags: ["Technology", "Sport"],
  //     likes: [],
  //     dislikes: [],
  //     createdAt: "22/02/2024",
  //     updatedAt: "22/02/2024",
  //   },
  // ];

  return (
    <main>
      <Hero p={posts[0]} />
      <PostLayout p={posts} />
    </main>
  )
}

export default Home