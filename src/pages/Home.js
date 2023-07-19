import React from 'react'
import Sidebar from '../components/Sidebar.js';
import Chat from '../components/Chat.js';

function Home() {
  return (
    <div className='home'>
    <div className='container'>
     <Sidebar/>
     <Chat/>
    </div>
    </div>
  )
}

export default Home