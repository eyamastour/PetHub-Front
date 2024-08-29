import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RegisterForm from './components/RegisterForm'
import Sidebar from './components/Sidebar'
import ChatBar from './components/ChatBar'
import Content from './components/Content'
import Layout from './layout/Layout'
import FlexBox from './layout/FlexBox'
function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      <div className='flex flex-col h-screen w-screen overflow-hidden'>
        <Navbar />

        <FlexBox>
          <Sidebar />
          <Content />
          <ChatBar />
        </FlexBox>
      </div>

      {/* <Home /> */}
    </div>
  )
}

export default App
