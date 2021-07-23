import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
    setUrl('')
  }

  return (
    <div className='App'>
      <h1>Deployment Utility Exercise</h1>
      <Input
        placeholder='Enter the url'
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <Button
        label='Submit'
        onClick={handleSubmit}
      />
    </div>
  )
}
export default App;