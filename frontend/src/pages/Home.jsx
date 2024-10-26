import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useRef } from 'react';
import PartyCard from '../components/PartyCard';
import axios from 'axios';
import Spinner from '../components/Spinner'


const Home = () => {

  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("detailsRef is not set. Cannot scroll.");
    }
  };

  const [authenticate, isAuthenticate] = useState(true);

  const [partys, setPartys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/partys')
      .then((response) => {
        setPartys(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base '>
      <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Uni<span className='text-blue-400'>Party</span>Hub
        </h1>
        <Button func={scrollToDetails} text={"LET'S PARTY"}></Button>
      </div>

      {
        authenticate ?
          (
            loading ?
              (<Spinner />) : (<div ref={detailsRef} className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {partys.map((item) => (
                  <PartyCard key={item._id} party={item} />
                ))}
              </div>)
          ) : (
            ''
          )
      }
    </div>
  );
};

export default Home
