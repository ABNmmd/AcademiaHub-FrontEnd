import React, { useEffect, useState } from 'react'

import { PostsContext } from '../../contexts/PostsContext';

import Hero from '../../components/Hero/Hero';
import PostLayout from '../../components/PostLayout/PostLayout';
import Newsletter from '../../components/Newsletter/Newsletter';

import './Home.css'

function Home() {
  const { posts } = useContext(PostsContext);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

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

  useEffect(() => {
    if (posts.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentPostIndex(prevIndex => (prevIndex + 1) % posts.length);
      }, 5000); // Change post every 5 seconds

      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [posts]);

  return (
    <main>
      {posts.length > 0 && <Hero p={posts[currentPostIndex]} />}
      <PostLayout p={posts} />
      <Newsletter />
    </main>
  )
}

export default Home