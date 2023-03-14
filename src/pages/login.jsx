const LoginPage = () => {
  return (
    <div className='bg-gray-100 mt-10 w-[90%] md:w-[40%] p-5 rounded-md'>
      <p className='text-center text-lg font-bold font-sans'>Login</p>

      <form>
        <div className='py-5'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            aria-label='email'
            placeholder='Enter your email'
            className='input'
          />
        </div>

        <div className='py-5'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            aria-label='password'
            placeholder='Enter your password'
            className='input'
          />
        </div>

        <button className='animated-btn-secondary float-right'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
