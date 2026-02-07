import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Badge from "./components/Badge";

const App: React.FC = () => {
  
  const handleReadMore = (): void => {
    alert('Read more clicked!');
  };

  return (
    <div style={{ 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      
      {/* Header */}
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

      {/* Blog Posts with 6 cards */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>

        {/* Card 1 */}
        <div style={{ width: '350px' }}>
          <Card>
            <Badge text="React" color="blue" />
            <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
              Getting Started with TypeScript
            </h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Learn the basics of TypeScript and how it helps build better React apps.
            </p>
            <Button text="Read More" onClick={handleReadMore} />
          </Card>
        </div>

        {/* Card 2 */}
        <div style={{ width: '350px' }}>
          <Card>
            <Badge text="Design" color="green" />
            <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
              Building Reusable Components
            </h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Create flexible components that work everywhere in your application.
            </p>
            <Button text="Read More" onClick={handleReadMore} />
          </Card>
        </div>

        {/* Card 3 */}
        <div style={{ width: '350px' }}>
          <Card>
            <Badge text="CSS" color="yellow" />
            <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
              Modern CSS Techniques
            </h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Learn how to use Grid and Flexbox to create beautiful layouts.
            </p>
            <Button text="Read More" onClick={handleReadMore} />
          </Card>
        </div>

        {/* Card 4 */}
        <div style={{ width: '350px' }}>
          <Card>
            <Badge text="JavaScript" color="red" />
            <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
              Understanding Async/Await
            </h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Master asynchronous JavaScript with simple examples and tips.
            </p>
            <Button text="Read More" onClick={handleReadMore} />
          </Card>
        </div>

        {/* Card 5 */}
        <div style={{ width: '350px' }}>
          <Card>
            <Badge text="Performance" color="green" />
            <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
              Optimizing React Apps
            </h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Simple techniques to make your React applications faster.
            </p>
            <Button text="Read More" onClick={handleReadMore} />
          </Card>
        </div>

        {/* Card 6 */}
        <div style={{ width: '350px' }}>
          <Card>
            <Badge text="Web Dev" color="blue" />
            <h2 style={{ fontSize: '22px', margin: '15px 0 10px 0' }}>
              Future of Web Development
            </h2>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Explore new trends and technologies shaping the web.
            </p>
            <Button text="Read More" onClick={handleReadMore} />
          </Card>
        </div>

      </div>

    </div>
  );
};

export default App
