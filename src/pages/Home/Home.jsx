import React from 'react'

import Hero from '../../components/Hero/Hero';

function Home() {
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
      authorId: "123",
      title: "This Is A Blog2",
      content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
      tags: ["tech", "sports"],
      likes: [],
      dislikes: [],
      createdAt: "22/02/2024",
      updatedAt: "22/02/2024",
    },
  ];

  return (
    <main>
      <Hero p={p} />
    </main>
  )
}

export default Home