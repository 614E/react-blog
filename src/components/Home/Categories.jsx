import { categories } from '../../constants/blog.constant'

const Categories = () => {
  return (
    <div className='px-3'>
      {categories.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  )
}

export default Categories
