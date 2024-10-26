import React from 'react'

const Spinner = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base items-center justify-center text-center'>
          <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600' ></div>
    </div>
  )
}

export default Spinner
