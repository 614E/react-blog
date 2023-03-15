import CatImage from '../../assets/steven-van-elk-x-DLGinewrE-unsplash.jpg'

const post = [
  {
    id: '1',
    title: '',
  },
]

const BlogPosts = () => {
  return (
    <div className='py-4'>
      <div className='flex flex-1 bg-white rounded-xl shadow-md max-h-[20svh]'>
        <div className='bg-blue-300'>
          <img
            className='object-cover h-full w-96 md:w-80'
            src={CatImage}
            alt='Unsplash Image'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Company retreats
          </div>
          <a
            href='#'
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
          >
            Incredible accommodation for your team
          </a>
          <p className='mt-2 text-slate-500 text-justify line-clamp'>
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>

          <p className='text-xs font-light float-right'>2/12/2002</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPosts
