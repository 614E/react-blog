import { posts } from '../../constants/blog.constant'
import BlogTile from './PostTile'

const BlogPosts = () => {
  return (
    <div className='py-4'>
      {posts.map((p) => (
        <div key={p.id}>
          <BlogTile post={p} />
        </div>
      ))}
    </div>
  )
}

export default BlogPosts
