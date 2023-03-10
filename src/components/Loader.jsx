import React from 'react';

const Loader = () => {
  return (
    <div className='fixed bg-[rgba(0,0,0,.5)] h-full w-full grid place-items-center top-0 left-0 z-50'>
      <span class="loader"></span>
    </div>
  );
}

export default Loader;
