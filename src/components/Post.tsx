import React from 'react'
import profilePicture from '../../public/assets/profilePicture.jpg';
import postpicture from '../../public/assets/postpicture.jpg';
import Card from './Card';
import ReactionButtons from './ReactionButtons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Post = () => {
    const commentsNumber = 18;
    return (
        <div className='border-2 w-2/3  rounded-lg mb-20 m-auto p-2 h-max'>
            {/* <Card className="border-2 w-2/3 h-4/5 rounded-lg mb-20 m-auto p-5 h-max"> */}
            <div className='flex m-3'>
                <div>
                    <img src={profilePicture} alt="profile picture" className='w-10 h-10 rounded-full' />
                </div>
                <div className='ml-3 flex flex-col'>
                    <p className='text-sm font-semibold'>Abdou Sfayhi</p>
                    <span className='text-xs'>3d</span>
                </div>
            </div>
            <div className='text-sm m-3 border-t'>
                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa voluptatum velit, sequi asperiores nobis, accusantium quisquam architecto cumque a vero aliquam sit aliquid omnis harum quos deleniti eligendi veritatis.</p>
            </div>
            <div>
                <img src={postpicture} alt="" />
            </div>

            {/* reactions to the posts & meta data */}
            <div className='mt-3 flex items-center justify-between'>
                <ReactionButtons />
                <div className='flex'>
                    <p className='text-sm mr-3'>comments {commentsNumber}</p>
                    <p className='text-sm'>shares {commentsNumber}</p>
                </div>
            </div>
            {/* share comment like buttons */}
            <div className='flex justify-evenly items-center w-full mt-1 border-t-white border-b-white'>
                <button className='w-1/3 bg-red-300 hover:text-white hover:bg-green-900'>
                    <FontAwesomeIcon icon={faThumbsUp} color="black" className='hover:text-green-900 inline-block mr-3' />
                    React
                </button>
                <button className='w-1/3 bg-red-600'>
                    <FontAwesomeIcon icon={faComment} color="black" className='hover:text-green-900 inline-block mr-3' />
                    Comment
                </button>
                <button className='w-1/3 bg-red-900'>
                    <FontAwesomeIcon icon={faShare} color="black" className='hover:text-green-900 inline-block mr-3' />
                    Share
                </button>
            </div>
            {/* comments */}
            <div className='w-full h-full mt-2'>
                <div className='flex flex-col w-full h-full'>

                    <div className='flex justify-start items-center w-full mb-2'>
                        <div className='w-12'>
                            <img src={profilePicture} alt="profile picture" className='w-8 h-8 rounded-full mr-2' />
                        </div>
                        <div className='w-2/3'>
                            <input type="text" placeholder='Write a public comment...' className='w-full rounded-xl pt-1.5 text-sm 
                            p-2 placeholder:justify-start palceholder:items-center' />
                        </div>
                    </div>

                    {/* another component */}
                    <div className='flex justify-start items-start w-full mb-2 bg-slate-400 rounded-md p-2'>
                        <div className='w-12'>
                            <img src={profilePicture} alt="profile picture" className='w-8 h-8 rounded-full mr-2' />
                        </div>
                        <div className='w-2/3'>
                            <div className="flex flex-col">
                                <p className='text-sm font-semibold'>Anis Ammar</p>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore adipisci ipsam earum commodi numquam repudiandae molestias recusandae soluta nulla sequi!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* </Card> */}

        </div>
    )
}

export default Post