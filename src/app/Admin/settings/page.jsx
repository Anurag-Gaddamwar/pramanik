'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SettingsPage = () => {
  // State to track which setting option is selected and manage navigation
  const [selectedOption, setSelectedOption] = useState(null);
  const [sectionIndex, setSectionIndex] = useState(0);

  // Array to hold the setting sections
  const settingSections = [
    {
      title: 'General Settings',
      content: (
        <div>
          <h2 className='text-lg font-semibold mb-4'>General Settings</h2>
          <div className='flex items-center mb-4'>
            <input type='checkbox' className='form-checkbox h-4 w-4 text-teal-500' />
            <label className='ml-2'>Enable Notifications</label>
          </div>
          {/* Add more general settings here */}
        </div>
      ),
    },
    {
      title: 'Account Settings',
      content: (
        <div>
          <h2 className='text-lg font-semibold mb-4'>Account Settings</h2>
          <div className='flex items-center mb-4'>
            <label className='mr-2'>Email:</label>
            <input type='email' className='border border-gray-300 rounded-md px-2 py-1 w-64' />
          </div>
          {/* Add more account settings here */}
        </div>
      ),
    },
    {
      title: 'Password Settings',
      content: (
        <div>
          <h2 className='text-lg font-semibold mb-4'>Password Settings</h2>
          <div className='flex items-center mb-4'>
            <label className='mr-2'>Current Password:</label>
            <input type='password' className='border border-gray-300 rounded-md px-2 py-1 w-64' />
          </div>
          <div className='flex items-center mb-4'>
            <label className='mr-2'>New Password:</label>
            <input type='password' className='border border-gray-300 rounded-md px-2 py-1 w-64' />
          </div>
          <div className='flex items-center mb-6'>
            <label className='mr-2'>Confirm New Password:</label>
            <input type='password' className='border border-gray-300 rounded-md px-2 py-1 w-64' />
          </div>
        </div>
      ),
    },
    {
      title: 'User Management',
      content: (
        <div>
          <h2 className='text-lg font-semibold mb-4'>User Management</h2>
          {/* Add user management functionalities here */}
          <p>View and manage user roles, permissions, and access.</p>
        </div>
      ),
    },
    {
      title: 'Data Privacy',
      content: (
        <div>
          <h2 className='text-lg font-semibold mb-4'>Data Privacy</h2>
          <div className='flex items-center mb-4'>
            <input type='checkbox' className='form-checkbox h-4 w-4 text-teal-500' />
            <label className='ml-2'>Enable Data Anonymization</label>
          </div>
          <div className='flex items-center mb-4'>
            <input type='checkbox' className='form-checkbox h-4 w-4 text-teal-500' />
            <label className='ml-2'>Allow Data Sharing</label>
          </div>
          {/* Add more data privacy settings here */}
        </div>
      ),
    },
    {
      title: 'Notification Preferences',
      content: (
        <div>
          <h2 className='text-lg font-semibold mb-4'>Notification Preferences</h2>
          <div className='flex items-center mb-4'>
            <input type='checkbox' className='form-checkbox h-4 w-4 text-teal-500' />
            <label className='ml-2'>Enable Email Notifications</label>
          </div>
          <div className='flex items-center mb-4'>
            <input type='checkbox' className='form-checkbox h-4 w-4 text-teal-500' />
            <label className='ml-2'>Enable SMS Notifications</label>
          </div>
          {/* Add more notification preferences here */}
        </div>
      ),
    },
    // Add more sections as needed
  ];

  // Function to handle the click on a setting option
  const handleOptionClick = (option, index) => {
    setSelectedOption(option);
    setSectionIndex(index);
  };

  // Function to navigate to the previous section
  const goToPreviousSection = () => {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
      setSelectedOption(null); // Reset selected option
    }
  };

  // Function to navigate to the next section
  const goToNextSection = () => {
    if (sectionIndex < settingSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setSelectedOption(null); // Reset selected option
    }
  };

  return (
    <div className='min-h-screen lg:ml-64 ml-16 md:ml-64'>
      <Navbar />
      <div className=' mx-4 md:mx-8 lg:mx-16'>
        <h1 className='text-2xl font-bold mb-4 pt-5'>Settings</h1>
        {/* Render settings content based on selected option */}
        <div className='bg-white p-4 shadow-md rounded-lg'>
          {/* Navigation buttons */}
          <div className='flex justify-between mb-4'>
            <button
              className={`bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 ${sectionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={goToPreviousSection}
              disabled={sectionIndex === 0}
            >
              Back
            </button>
            <button
              className={`bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 ${sectionIndex === settingSections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={goToNextSection}
              disabled={sectionIndex === settingSections.length - 1}
            >
              Next
            </button>
          </div>
          {/* Render the current section content */}
          {selectedOption === null ? (
            // Render list of setting options if no option is selected
            <div>
              <h2 className='text-lg font-semibold mb-4'>Select an Option to View Settings</h2>
              {/* List of setting options */}
              <ul className='list-disc ml-6'>
                {settingSections.map((section, index) => (
                  <li key={index} className='cursor-pointer text-blue-500 hover:underline' onClick={() => handleOptionClick(section.title, index)}>
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // Render the selected section content
            <div>
              <h2 className='text-lg font-semibold mb-4'>{settingSections[sectionIndex].title}</h2>
              {settingSections[sectionIndex].content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
