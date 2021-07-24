import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
    if (url === '') {
      console.log(`Url => ${url}`);
      return (alert('You haven\'t entered a url'))
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
      <Button
        label='Submit'
        onClick={handleSubmit}
      />
    </div>
  )
}
export default App;