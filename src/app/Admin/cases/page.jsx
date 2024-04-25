'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const CasesPage = () => {
  return (
    <div className='lg:ml-64 ml-16 md:ml-64 text-sm'>
      <Navbar />
      <div className='mx-4 md:mx-8 lg:mx-16'>
        <h1 className='text-2xl font-bold mb-4 pt-5'>Cases</h1>
        {/* Cases content */}
        <div className='bg-white p-4 shadow-md rounded-lg'>
          {/* Filter and search options */}
          <div className='flex justify-between items-center mb-4'>
            {/* Filter dropdown */}
            <div className='relative lg:flex lg:flex-row items-center'>
              <label htmlFor='filter' className='block text-sm font-medium text-gray-700 mr-2'>Filter:</label>
              <select
                id='filter'
                name='filter'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm'
              >
                <option value=''>All Cases</option>
                <option value='open'>Open Cases</option>
                <option value='closed'>Closed Cases</option>
                {/* Add more filter options as needed */}
              </select>
            </div>
            {/* Search input */}
            <div className='relative lg:flex lg:flex-row items-center'>
              <label htmlFor='search' className='block text-sm lg:mr-2 font-medium text-gray-700 mb-1'>Search:</label>
              <input
                type='text'
                id='search'
                name='search'
                className='border max-w-28 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm'
                placeholder='Search cases...'
              />
            </div>
          </div>
          {/* Cases list */}
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Case ID</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Assigned To</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* Sample case data */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>001</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Child Labour</td>
                  <td className='px-6 py-4 whitespace-nowrap'><span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Open</span></td>
                  <td className='px-6 py-4 whitespace-nowrap'>Anurag Gaddamwar</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
                    <button className='text-blue-600 hover:text-blue-900 ml-2'>Edit</button>
                    <button className='text-red-600 hover:text-red-900 ml-2'>Delete</button>
                  </td>
                </tr>
                {/* Add more case rows as needed */}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className='flex justify-center mt-4 '>
            <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
              <a href='#' className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                Previous
              </a>
              <a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'>
                1
              </a>
              <a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'>
                2
              </a>
              <a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'>
                3
              </a>
              <span className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                Next
              </span>
            </nav>
          </div>
{/* Additional Sections */}
<div className='mt-8'>
  <h2 className='text-lg font-semibold mb-2'>Pending Cases</h2>
  {/* Pending cases content */}
  <div className='bg-gray-100 p-4 shadow-md rounded-lg'>
    <div className='flex justify-between items-center mb-4'>
      <h3 className='text-lg font-semibold'>Murder - Nagpur</h3>
      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800'>Pending</span>
    </div>
    <p className='text-sm text-gray-700 mb-2'>Case ID: 002</p>
    <p className='text-sm text-gray-700 mb-2'>Assigned To: Tejas Punwatkar</p>
    <p className='text-sm text-gray-700 mb-2'>Date Created: April 25, 2024</p>
    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
  </div>
</div>
<div className='mt-8'>
  <h2 className='text-lg font-semibold mb-2'>Current Cases</h2>
  {/* Current cases content */}
  <div className='bg-gray-100 p-4 shadow-md rounded-lg'>
    <div className='flex justify-between items-center mb-4'>
      <h3 className='text-lg font-semibold'>Terrorist - Pakistan</h3>
      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Open</span>
    </div>
    <p className='text-sm text-gray-700 mb-2'>Case ID: 003</p>
    <p className='text-sm text-gray-700 mb-2'>Assigned To: Harsh Joshi</p>
    <p className='text-sm text-gray-700 mb-2'>Date Created: April 20, 2024</p>
    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
  </div>
</div>
{/* Add more sections as needed */}

        </div>
      </div>
    </div>
  );
};

export default CasesPage;
