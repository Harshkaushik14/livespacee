import React from 'react';

function Nav() {
  return <nav className='relative'>
      <div className='pt-10 flex px-10 sm:px-20 text-lg whitespace-nowrap space-x-5 lg:justify-center sm:space-x-16 overflow-x-scroll scrollbar-hide'>
      <div className='sm:pl-24'>

          <h2 className='lg:text-lg cursor-pointer transition duration-100 transform hover:scale-75 text-white  p-1 border-2 border-black-400 rounded-full bg-black'>🔥24h Trending</h2>
      </div>
          <h2 className='cursor-pointer transition duration-100 transform hover:scale-75 p-1 border-2 border-gray-400 rounded-full'>Latest Shows</h2>
          <h2 className='cursor-pointer transition duration-100 transform hover:scale-75  p-1 border-2 border-gray-400 rounded-full '>Most Popular</h2>
          <h2 className='cursor-pointer transition duration-100 transform hover:scale-75  p-1 border-2 border-gray-400 rounded-full'>💎In Genesis</h2>
          <h2 className='cursor-pointer transition duration-100 transform hover:scale-75  p-1 border-2 border-gray-400 rounded-full'>🛕In Temple</h2>
          <h2 className='cursor-pointer transition duration-100 transform hover:scale-75  p-1 border-2 border-gray-400 rounded-full '>🌪In Void</h2>
          <h2 className='cursor-pointer transition duration-100 transform hover:scale-75  p-1 border-2 border-gray-400 rounded-full '>🦍#BAYC</h2>
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#DBDBDB] h-10 w-1/12'/>
  </nav>;
}

export default Nav;
