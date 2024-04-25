// CaseDetailsModal.js

import React from 'react';

const CaseDetailsModal = ({ caseData, onClose }) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='relative p-8 bg-white w-full max-w-lg rounded-lg'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Case Details</h2>
            <button onClick={onClose} className='text-gray-600 hover:text-gray-800'>
              <svg
                className='h-6 w-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M18.707 18.707a1 1 0 01-1.414 0L10 11.414l-7.293 7.293a1 1 0 01-1.414-1.414L8.586 10 1.293 2.707a1 1 0 111.414-1.414L10 8.586l7.293-7.293a1 1 0 111.414 1.414L11.414 10l7.293 7.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div className='mb-4'>
            <p>
              <span className='font-semibold'>Case ID:</span> {caseData.id}
            </p>
            <p>
              <span className='font-semibold'>Title:</span> {caseData.title}
            </p>
            <p>
              <span className='font-semibold'>Status:</span> {caseData.status}
            </p>
            <p>
              <span className='font-semibold'>Assigned To:</span> {caseData.assignedTo}
            </p>
            {/* Add more case details as needed */}
          </div>
          <button onClick={onClose} className='bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailsModal;
