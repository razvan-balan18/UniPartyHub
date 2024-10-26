import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { MdOutlineEdit } from 'react-icons/md';
import { MdEmail } from "react-icons/md";
import Register from './Register';

const ShowParty = () => {
  const [party, setParty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchParty = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/partys/${id}`);
        setParty(response.data);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch party details'); // Set an error message
      } finally {
        setLoading(false);
      }
    };

    fetchParty();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!party) {
    return <div>No party data available</div>;
  }

  return (
    <><div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base items-center justify-center text-center'>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-4xl lg:text-5xl justify-center p-4'>Details about this party</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ml-4 items-center justify-center text-center'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Name</span>
          <span>{party.name}</span>
        </div>
        <div className='my-4'>
          <img src={party.image} alt={party.name} className="w-50 h-50 rounded-xl object-cover" />
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Place</span>
          <span>{party.place}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Budget</span>
          <span>{party.budget}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Date</span>
          <span>{new Date(party.date).toString()}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>People</span>
          <span>
            {Array.isArray(party.people) && party.people.length > 0 ? (
              party.people.map((i, index) => (
                <span key={index}>
                  {i}{index < party.people.length - 1 && ', '}
                </span>
              ))
            ) : (
              <span>No people listed.</span>
            )}
          </span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Tasks</span>
          <span>
            {Array.isArray(party.tasks) && party.tasks.length > 0 ? (
              party.tasks.map((i, index) => (
                <span key={index}>
                  {i}{index < party.tasks.length - 1 && ', '}
                </span>
              ))
            ) : (
              <span>No tasks listed.</span>
            )}
          </span>
        </div>
        <div className='p-3'>
          <Link to={`/partys/edit/${party._id}`}>
            <MdOutlineEdit className=' text-2xl text-yellow-600 ' />
          </Link>
        </div>

        <div className='p-3'>
          <Link to={'/partys/Register'}>
            <MdEmail className=' text-2xl text-green-500 ' />
          </Link>
        </div>

      </div>
    </div>
    </>

  );
}

export default ShowParty;
