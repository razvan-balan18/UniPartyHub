import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const DeleteParty = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteParty = () => {
    setLoading(true);
    axios 
    .delete(`http://localhost:3000/partys/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert("error");
      console.log("error");
    })
  }

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <div className='p-4'>
        <h1 className='text-xl my-4'>Delete Party</h1>
        {
          loading ? <Spinner /> : ''
        }
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Delete Party?</h3>
        <button
          className='p-4 bg-red-600 text-white m-8 w-full hover:bg-red-700'
          onClick={handleDeleteParty}
        >
          Delete
        </button>
      </div>
      </div>
    </div>
  )
}

export default DeleteParty