'use client'

import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Image from 'next/image'

const Posts = () => {
  const { posts } = useContext(AppContext)
  return (
    <section className='mt-10 flex justify-center flex-wrap'>
      {posts &&
        posts.map((post, idx: number) => {
          return (
            <div
              key={idx}
              className='w-[300px] bg-white flex flex-wrap rounded-2xl flex-col gap-5 p-5 items-center'
            >
              <h1 className='font-medium text-xl'>{post.title}</h1>
              <div className='w-full'>
                <Image
                  className='object-contain mx-auto'
                  src={post.image}
                  width={100}
                  height={100}
                  alt='post image'
                />
              </div>
              <div className='border rounded-md flex flex-col items-center p-4'>
                <h3 className='font-medium'>Description : </h3>
                <p className='opacity-80 mt-2 text-center'>
                  {post.description}
                </p>
              </div>
              <div>
                <span className='opacity-70 text-lg'>author : </span>
                <span className='font-medium text-lg'>@{post.author}</span>
              </div>
            </div>
          )
        })}
    </section>
  )
}

export default Posts
