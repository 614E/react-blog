const IndexPage = () => {
  const categories = [
    {
      id: 1,
      name: 'Sports',
    },
    {
      id: 2,
      name: 'Politics',
    },
    {
      id: 3,
      name: 'Technology',
    },
    {
      id: 4,
      name: 'Wild life',
    },
    {
      id: 5,
      name: 'Travel & Tours',
    },
  ]

  return (
    <div className='container flex flex-row gap-4 justify-center'>
      <div className='col-span-2 w-[100%] md:w-[70%]'>
        <p className='p-2 bg-gray-300'>Todays Feed</p>
      </div>

      <div className='hidden md:block w-[20%]'>
        <p className='p-2 bg-gray-300'>Categories</p>
        <div className='px-3'>
          {categories.map((c) => (
            <p key={c.id}>{c.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
