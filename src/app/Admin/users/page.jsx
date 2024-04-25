import React from 'react';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <div className=' min-h-screen lg:ml-64 ml-16 md:ml-64'>
      <Navbar />
      <div className='mx-4 md:mx-8 lg:mx-16'>
        <h1 className='text-2xl font-bold mb-4 pt-5'>Users</h1>
        {/* Users content */}
        <div className='bg-white p-4 shadow-md rounded-lg'>
          {/* Filter and search options */}
          <div className='flex justify-between items-center mb-4'>
            {/* Filter dropdown */}
            <div className='relative lg:flex lg:flex-row items-center'>
              <label htmlFor='role' className='block text-sm font-medium text-gray-700 mr-2'>Role:</label>
              <select
                id='role'
                name='role'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm'
              >
                <option value=''>All Users</option>
                <option value='admin'>Admin</option>
                <option value='manager'>Manager</option>
                <option value='lawyer'>Lawyer</option>
                <option value='judge'>Judge</option>
                {/* Add more role options as needed */}
              </select>
            </div>
            {/* Search input */}
            <div className='relative lg:flex lg:flex-row items-center'>
              <label htmlFor='search' className='block text-sm lg:mr-2 font-medium text-gray-700 mb-1'>Search:</label>
              <input
                type='text'
                id='search'
                name='search'
                className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm max-w-32'
                placeholder='Search users...'
              />
            </div>
          </div>
          {/* Users list */}
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>User ID</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Role</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {/* Sample admin user data */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>001</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Admin User</td>
                  <td className='px-6 py-4 whitespace-nowrap'>admin@example.com</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Admin</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
                    <button className='text-blue-600 hover:text-blue-900 ml-2'>Edit</button>
                    <button className='text-red-600 hover:text-red-900 ml-2'>Delete</button>
                  </td>
                </tr>
                {/* Sample lawyer user data */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>002</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Lawyer User</td>
                  <td className='px-6 py-4 whitespace-nowrap'>lawyer@example.com</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Lawyer</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
                    <button className='text-blue-600 hover:text-blue-900 ml-2'>Edit</button>
                    <button className='text-red-600 hover:text-red-900 ml-2'>Delete</button>
                  </td>
                </tr>
                {/* Sample active lawyers data */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>003</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Active Lawyer</td>
                  <td className='px-6 py-4 whitespace-nowrap'>activelawyer@example.com</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Lawyer</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
                    <button className='text-blue-600 hover:text-blue-900 ml-2'>Edit</button>
                    <button className='text-red-600 hover:text-red-900 ml-2'>Delete</button>
                  </td>
                </tr>
                {/* Sample judges data */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>004</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Judge User</td>
                  <td className='px-6 py-4 whitespace-nowrap'>judge@example.com</td>
                  <td className='px-6 py-4 whitespace-nowrap'>Judge</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-indigo-600 hover:text-indigo-900'>View Details</button>
                    <button className='text-blue-600 hover:text-blue-900 ml-2'>Edit</button>
                    <button className='text-red-600 hover:text-red-900 ml-2'>Delete</button>
                  </td>
                </tr>
                {/* Add more user rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
