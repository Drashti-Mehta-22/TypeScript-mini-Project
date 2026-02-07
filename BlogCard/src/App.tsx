import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Badge from "./components/Badge";
import type { BlogPost } from "./type-index";
import LikeButton from "./components/LikeButton";

const App: React.FC=() =>{

const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      category: 'React',
      categoryColor: 'blue',
      title: 'Getting Started with TypeScript',
      description: 'Learn the basics of TypeScript and how it helps build better React apps.',
      readTime: '5 min read',  // ✨ NEW
      isLiked: false  // ✨ NEW
    },
    {
      id: 2,
      category: 'Design',
      categoryColor: 'green',
      title: 'Building Reusable Components',
      description: 'Create flexible components that work everywhere in your application.',
      readTime: '7 min read',  // ✨ NEW
      isLiked: false  // ✨ NEW
    },
    {
      id: 3,
      category: 'CSS',
      categoryColor: 'yellow',
      title: 'Modern CSS Techniques for better UI',
      description: 'Learn how to use Grid and Flexbox to create beautiful layouts.',
      readTime: '6 min read',  // ✨ NEW
      isLiked: false  // ✨ NEW
    },
    {
      id: 4,
      category: 'JavaScript',
      categoryColor: 'red',
      title: 'Understanding Async/Await',
      description: 'Master asynchronous JavaScript with simple examples and tips.',
      readTime: '8 min read',  // ✨ NEW
      isLiked: false  // ✨ NEW
    },
    {
      id: 5,
      category: 'Performance',
      categoryColor: 'green',
      title: 'Optimizing React Apps',
      description: 'Simple techniques to make your React applications faster.',
      readTime: '10 min read',  // ✨ NEW
      isLiked: false  // ✨ NEW
    },
    {
      id: 6,
      category: 'Web Dev',
      categoryColor: 'blue',
      title: 'Future of Web Development',
      description: 'Explore new trends and technologies shaping the web.',
      readTime: '6 min read',  // ✨ NEW
      isLiked: false  // ✨ NEW
    }
  ])

  // ✨ NEW - Toggle like (true/false)
  const handleLike = (postId: number): void => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, isLiked: !post.isLiked }: post
    ));
  };

  const handleReadMore = (): void => {
    alert('Read more clicked!');
  };

  return (
    <div style={{ 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      
    
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Badge text="My Blog" color="blue" />
        <h1 style={{ 
          fontSize: '42px', 
          margin: '20px 0',
          color: '#333'
        }}>
          Welcome to My Blog
        </h1>
      </div>

      {/* Blog Posts */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>

        {posts.map((post) => (
          <div key={post.id} style={{ width: '350px', display: 'flex' }}>
            <Card>
              <div style={{ marginBottom: '10px' }}>
                <Badge text={post.category} color={post.categoryColor} />
                {/* <Badge text={post.readTime} color="gray" /> */}
                <span style={{marginLeft: '7px', color: 'gray'}}>{post.readTime}</span>
              </div>
              
              <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
                {post.title}
              </h2>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                {post.description}
              </p>
              
              {/*Thumbs up + Read More button */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <LikeButton 
                  isLiked={post.isLiked} 
                  onLike={() => handleLike(post.id)} 
                />
                <Button text="Read More" onClick={handleReadMore} />
              </div>
            </Card>
          </div>
        ))}

      </div>

    </div>
  );
};

export default App
