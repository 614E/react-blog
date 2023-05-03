import CatImage from '../../assets/steven-van-elk-x-DLGinewrE-unsplash.jpg'

const BlogTile = ({ post }) => {
  return (
    <div className='flex flex-1 bg-white rounded-xl shadow-md max-h-[20svh] mb-3'>
      <div className=''>
        <img
          className='object-cover h-full w-96 md:w-80'
          src={CatImage}
          alt='Unsplash Image'
        />
      </div>
      <div className='p-8'>
        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
          {post.title}
        </div>
        <a
          href='#'
          className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
        >
          {post.subTitle}
        </a>
        <p className='mt-2 text-slate-500 text-justify line-clamp'>
          {post.content}
        </p>

        <p className='text-xs font-light float-right'>{post.date}</p>
      </div>
    </div>
  )
}

export default BlogTile
