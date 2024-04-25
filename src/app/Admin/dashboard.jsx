import React from 'react';
import Navbar from './components/Navbar';
import { UsersIcon, FolderIcon, ExclamationCircleIcon, ArchiveIcon } from '@heroicons/react/outline'; // Import icons

const Dashboard = () => {
  return (
    <div className='lg:ml-64 ml-16 md:ml-64'>
      <Navbar />
      <div className='font-bold'>
        <h1 className='pt-5 mb-3 pl-1 text-xl'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {/* Client Card */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-6 shadow-xl flex items-center bg-white'>
          <UsersIcon className='h-10 w-10 text-teal-500 mr-4 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold mb-1'>Clients</h3>
            <p className='text-sm text-gray-500'>Manage client data</p>
          </div>
        </div>
        {/* Cases Card */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-6 shadow-xl flex  bg-white'>
          <FolderIcon className='h-10 w-10 text-teal-500 mr-4 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold mb-1'>Cases</h3>
            <p className='text-sm text-gray-500'>View and manage cases</p>
          </div>
        </div>
        {/* Important Cases Card */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-6 shadow-xl flex bg-white'>
          <ExclamationCircleIcon className='h-10 w-10 text-teal-500 mr-4 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold mb-1'>Important Cases</h3>
            <p className='text-sm text-gray-500'>Track important cases</p>
          </div>
        </div>
        {/* Archived Cases Card */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-6 shadow-xl flex bg-white'>
          <ArchiveIcon className='h-10 w-10 text-teal-500 mr-4 flex-shrink-0' />
          <div>
            <h3 className='text-lg font-semibold mb-1'>Archived Cases</h3>
            <p className='text-sm text-gray-500'>Access archived cases</p>
          </div>
        </div>
      </div>
      {/* Additional Sections */}
      <div className='mt-8'>
        {/* Recent Activity Section */}
        <div className='bg-white rounded-lg shadow p-6 mb-6'>
          <h2 className='text-lg font-semibold mb-4'>Recent Activity</h2>
          {/* Example list of recent activities */}
          <ul className='list-disc pl-6'>
            <li>User John Doe added a new case.</li>
            <li>Case ABC123 updated by Admin.</li>
            <li>User Jane Smith assigned to case XYZ789.</li>
          </ul>
        </div>
        {/* Analytics Section */}
        <div className='bg-white rounded-lg shadow p-6 mb-6'>
          <h2 className='text-lg font-semibold mb-4'>Analytics</h2>
          {/* Example charts or data visualizations */}
          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h3 className='text-sm font-semibold'>Case Distribution</h3>
              {/* Example chart */}
              <div className='bg-gray-200 h-32 mt-2'></div>
            </div>
            <div className='w-1/2'>
              <h3 className='text-sm font-semibold'>User Activity</h3>
              {/* Example chart */}
              <div className='bg-gray-200 h-32 mt-2'></div>
            </div>
          </div>
        </div>
        {/* Notifications Section */}
        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
          {/* Example list of notifications */}
          <ul className='divide-y divide-gray-300'>
            <li className='py-2'>
              <p className='text-sm'>New case added: Case ABC123</p>
            </li>
            <li className='py-2'>
              <p className='text-sm'>Reminder: Upcoming court hearing for Case XYZ789</p>
            </li>
            <li className='py-2'>
              <p className='text-sm'>User Jane Smith updated case details.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
