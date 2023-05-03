import BlogPosts from '../components/Home/BlogPosts'
import Categories from '../components/Home/Categories'
// index
const IndexPage = () => {
  return (
    <div className='flex flex-row gap-4 justify-center'>
      <div className='w-[100%] md:w-[70%]'>
        <p className='p-2 bg-gray-300'>Todays Feed</p>
        <BlogPosts />
      </div>

      <div className='hidden md:block w-[20%] bg-fixed'>
        <p className='p-2 bg-gray-300'>Categories</p>
        <Categories />
      </div>
    </div>
  )
}

export default IndexPage
