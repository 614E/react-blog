import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <nav className='flex flex-1 items-center justify-between p-5 bg-neutral-700 text-white'>
      <p>
        <Link to={'/'}>Emma Blog</Link>
      </p>
      <ul className='flex space-x-4 items-center'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li className='animated-btn-secondary'>
          <Link to={'/login'}>Sign in</Link>
        </li>
      </ul>
    </nav>
  )
}

export default AppBar
