import React, { useState } from 'react'
import Display from './compnents/Display'
import Button from './compnents/Button';

const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);
  
    // Function that increases count
    const increment = (): void => {
    setCount(count + 1);
    };
  
    // Function that decreases count
    const decrement = (): void => {
    setCount(count - 1);
    };

    // Function that resets to 0
  const reset = (): void => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1
      style={{
        fontSize: '42px',
        fontWeight: 'bold',
        color: '#162b86',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >Counter</h1>

      <Display value={count}/>

      <div>
        <Button onclick={increment} text='Increase'/>
        <Button onclick={reset} text='Reset'/>
        <Button onclick={decrement} text='Decrease'/>
      </div>
    </div>
  )
}

export default Counter
