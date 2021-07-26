import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import axios from 'axios';
import isValidUrl from './tools';

function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url === '') {
      setError('Please enter a url');
      return
    } else {
      setError('');
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid url');
      return;
    } else {
      setError('')
    }

    axios.post('http://localhost:4000/', url).then(console.log(`success :-)`));
    alert('success :-)');
    setUrl('');
  }

  return (
    <div className='App'>
      <h1>Deployment Utility Exercise</h1>
      <Input
        placeholder='Enter the url'
        value={url}
        onChange={e => setUrl(e.target.value)}
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