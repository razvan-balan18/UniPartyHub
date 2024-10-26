import React, { useState } from 'react';

const Register = () => {

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-sm sm:text-base'>
      <div className='p-4'>
        <h1 className='text-3xl my-4 text-white'>Contact Us</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <form>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Name</label>
              <input
                type="text"
                className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Email</label>
              <input
                type="email"
                className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Message</label>
              <textarea
                className='border-2 border-gray-500 py-2 w-full bg-slate-900 text-white'
                rows="5"
              />
            </div>
            <button type="submit" className='p-2 bg-sky-400 m-8 hover:bg-blue-300 rounded-full'>
              Register for event    
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
