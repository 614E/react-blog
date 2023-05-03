import { posts } from '../../constants/blog.constant'

const Categories = () => {
  return (
    <div className='px-3'>
      {posts
        .map((p) => ({ id: p.id, name: p.category }))
        .map((c) => (
          <p key={c.id} className='capitalize'>
            {c.name}
          </p>
        ))}
    </div>
  )
}

export default Categories
