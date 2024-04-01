import Header from '@/app/components/Header'

const AddPost = () => {
  return (
    <main className='w-full h-screen bg-main p-10 flex flex-col gap-10'>
      <Header />
      <form className='flex flex-col gap-4 w-1/2 mx-auto'>
        <input
          className='rounded-md px-5 py-1'
          placeholder='Post Title...'
          required
        />
        <div className='bg-white rounded-xl h-[300px] flex justify-center items-center'>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-blue-600 text-2xl font-medium'>
              Choose an Image for a post
            </h3>
            <input type='file' />
          </div>
        </div>
        <textarea
          className='px-5 py-1 rounded-md'
          placeholder='Post Description'
          required
        />
      </form>
    </main>
  )
}

export default AddPost
