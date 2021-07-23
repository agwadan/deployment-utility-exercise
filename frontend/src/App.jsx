import React, { useState } from 'react';
import './App.css'
import { Button } from './components/button';
import { Input } from './components/input';

function App() {

  return (
    <div className='App'>
      <h1>Deployment Utility Exercise</h1>
      <Input />
      <Button />
    </div>
  )
}

export default App
