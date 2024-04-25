'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Intro.css';

const Intro = () => {
    const [casesData, setCasesData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
       const fetchData = async () => {
         try {
           setLoading(true);
           const response = await axios.get('http://localhost:3001/get-cases-data');
           setCasesData(response.data);
         } catch (error) {
           console.error('Error fetching data:', error);
           setError('Failed to load cases data. Please try again later.');
         } finally {
           setLoading(false);
         }
       };
   
       fetchData();
    }, []);
   

  return (
    <div className="relative h-screen">
      {/* Background image for the top section with reduced opacity */}
      <div className="lg:mt-16 bg-cover bg-center h-3/4 items-center justify-center grid" style={{ backgroundImage: `url('/intro.png')` }}>
        {/* Content container */}
        <div className="flex flex-col justify-center items-center text-white text-center px-4 pt-20 pb-12 md:py-24 lg:py-32 xl:py-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className='text-yellow-300'>प्रा</span>amanik</h1>
          <p className="text-lg md:text-xl mb-8">Empowering Justice with Technology</p>
        </div>
      </div>
      {/* Statistical data section */}
      <div className="bg-white data flex z-10 py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="lg:max-w-4xl md:max-w-4xl w-full mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {loading ? (
              <div className="loading-container col-span-3 flex justify-center items-center h-full">
                <p>Loading...</p>
              </div>
            ) : casesData ? (
              <>
                {/* Enhanced statistical data presentation */}
                <div className="p-4 bg-white bg-opacity-20 rounded-md shadow-xl">
                  <h3 className="text-lg font-bold mb-2">Live Pending Cases</h3>
                  <p className="text-xl font-semibold">{casesData.livePendingCases}</p>
                </div>
                <div className="p-4 bg-white bg-opacity-20 rounded-md shadow-xl">
                  <h3 className="text-lg font-bold mb-2">Criminal Cases</h3>
                  <p className="text-xl font-semibold">{casesData.criminalCases}</p>
                </div>
                <div className="p-4 bg-white bg-opacity-20 rounded-md shadow-xl">
                  <h3 className="text-lg font-bold mb-2">Total Cases</h3>
                  <p className="text-xl font-semibold">{casesData.totalCases}</p>
                </div>
              </>
            ) : (
              <div className="error-container col-span-3 flex justify-center items-center h-full">
                <p>Error: {error}</p>
              </div>
            )}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Intro;
