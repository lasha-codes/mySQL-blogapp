'use client'

import Header from '@/app/components/Header'
import React, { useState } from 'react'

const AddPost = () => {
  const [title, setTitle] = useState<string>('')
  const [image, setImage] = useState<File | null>(null)
  const [description, setDescription] = useState<string>('')

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const submitImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (image) {
      const base64 = await convertToBase64(image)
      console.log(base64)
    }
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return (
    <main className='w-full h-screen bg-main p-10 flex flex-col gap-10'>
      <Header />
      <form
        className='flex flex-col gap-4 w-1/2 mx-auto'
        onSubmit={submitImage}
      >
        <input
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          className='rounded-md px-5 py-1'
          placeholder='Post Title...'
          required
        />
        <div className='bg-white rounded-xl h-[300px] flex justify-center items-center'>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-blue-600 text-2xl font-medium'>
              Choose an Image for a post
            </h3>
            <input type='file' onChange={handleChangeImage} />
          </div>
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='px-5 py-1 rounded-md'
          placeholder='Post Description'
          required
        />
      </form>
    </main>
  )
}

export default AddPost
