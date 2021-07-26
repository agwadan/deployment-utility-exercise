import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import axios from 'axios';
import isValidUrl from './tools';

function App() {
  const [url, setUrl] = useState({ content: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.content === '') {
      setError('Please enter a url');
      return
    } else {
      setError('');
    }

    if (!isValidUrl(url.content)) {
      setError('Please enter a valid url');
      return;
    } else {
      setError('')
    }

    axios.post('http://localhost:4000/', url).then(console.log(`success :-)`));
    alert('The image has been submitted successfully');
    setUrl({ content: '' });
  }

  return (
    <div className='App'>
      <h1>Deployment Utility Exercise</h1>
      <Input
        placeholder='Enter the url'
        name='url'
        value={url.content}
        onChange={e => setUrl({ content: e.target.value })}
      />

      {error && (
        <div className='error'>
          {error}
        </div>
      )}

      <Button
        label='Submit'
        onClick={handleSubmit}
      />
    </div>
  )
}
export default App;