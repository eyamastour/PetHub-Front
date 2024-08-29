import React from 'react'
import Post from './Post'
import profilePicture from '../../public/assets/profilePicture.jpg';
import Card from './Card';

const Content = () => {
  const postData = {
    username: "abdou sfayhi",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea non id ipsum quaerat odit sequi labore. Quod, eius eligendi."
  }

  return (
    <div className='h-screen w-3/5 bg-emerald-500  overflow-y-scroll scrollbar-thumb-green-900 scrollbar-track-slate-500 scrollbar-thin scrollbar-rounded-large'>
      <Card>
        <div className="flex flex-col">
          <div className='flex items-center justify-center w-full border  '>
            <img src={profilePicture} alt="your profile picture" className='w-10 h-10 rounded-full m-4' />
            <input type="text" className='p-2 w-1/3 rounded-full' placeholder='Whats on your mind About ?' />
            <div className='flex '>
              <button>Picture</button>
              <button>Video</button>
            </div>
          </div>

        </div>
        {/* <div className='flex items-center justify-center w-full '>
         <button>Picture</button>
          <button>Video</button>  
        </div> */}
      </Card>

      <div className='flex items-center justify-center h-full w-full'>
        {/* create post component */}

        <div className="flex flex-col h-full w- mt-5">
          <Post />
          <Post />
          <Post />
        </div>
      </div>

    </div>
  )
}

export default Content