import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/avatar'

function App({ user }) {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl bold'>Spotify</h1>
      <Avatar />
    </>
  )
}

export default App
