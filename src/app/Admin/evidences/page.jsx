'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Page = () => {
  const [evidenceData, setEvidenceData] = useState([
    {
      id: 1,
      category: 'Crime',
      description: 'Evidence description for Category A',
      uploadedBy: 'Lawyer X',
      uploadDate: 'April 20, 2024',
      actions: [
        { action: 'View', timestamp: '12:30 PM', date: 'April 20, 2024' },
        { action: 'Delete', timestamp: '1:00 PM', date: 'April 21, 2024' },
      ],
    },
    {
      id: 2,
      category: 'Civil',
      description: 'Evidence description for Category B',
      uploadedBy: 'Lawyer Y',
      uploadDate: 'April 22, 2024',
      actions: [
        { action: 'View', timestamp: '10:45 AM', date: 'April 22, 2024' },
        { action: 'Delete', timestamp: '11:20 AM', date: 'April 23, 2024' },
      ],
    },
    {
      id: 3,
      category: 'Crime',
      description: 'Evidence description for Category C',
      uploadedBy: 'Lawyer Z',
      uploadDate: 'April 25, 2024',
      actions: [
        { action: 'View', timestamp: '9:00 AM', date: 'April 25, 2024' },
        { action: 'Delete', timestamp: '9:30 AM', date: 'April 26, 2024' },
      ],
    },
    // Add more evidence data as needed
  ]);

  const [filteredEvidenceData, setFilteredEvidenceData] = useState([...evidenceData]);
  const [actionLog, setActionLog] = useState([
    { action: 'Evidence 1 viewed by Admin', timestamp: '12:35 PM', date: 'April 20, 2024' },
    // Add more log entries as needed
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleViewEvidence = (evidenceId) => {
    // Find the evidence to view from evidenceData
    const viewedEvidence = evidenceData.find((evidence) => evidence.id === evidenceId);
    // Update the action log
    setActionLog((prevLog) => [
      ...prevLog,
      { action: `Evidence ${evidenceId} viewed by Admin`, timestamp: getCurrentTime(), date: getCurrentDate() },
    ]);
    // Optionally, update the evidence status to 'Viewed' or mark it as viewed in your data structure
    // For example:
    // const updatedEvidenceData = evidenceData.map((evidence) =>
    //   evidence.id === evidenceId ? { ...evidence, status: 'Viewed' } : evidence
    // );
    // setEvidenceData(updatedEvidenceData);
  };

  const handleDeleteEvidence = (evidenceId) => {
    // Update the action log
    setActionLog((prevLog) => [
      ...prevLog,
      { action: `Evidence ${evidenceId} deleted by Admin`, timestamp: getCurrentTime(), date: getCurrentDate() },
    ]);
    // Update only the filtered evidence data if it's currently being filtered
    if (searchQuery || filteredEvidenceData.length !== evidenceData.length) {
      const updatedFilteredEvidenceData = filteredEvidenceData.filter((evidence) => evidence.id !== evidenceId);
      setFilteredEvidenceData(updatedFilteredEvidenceData);
    }
    // Update the main evidence data
    setEvidenceData((prevData) => prevData.filter((evidence) => evidence.id !== evidenceId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = evidenceData.filter(
      (evidence) =>
        evidence.category.toLowerCase().includes(query.toLowerCase()) ||
        evidence.description.toLowerCase().includes(query.toLowerCase()) ||
        evidence.uploadedBy.toLowerCase().includes(query.toLowerCase()) ||
        evidence.uploadDate.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvidenceData(filtered);
  };

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredEvidenceData([...evidenceData]);
    } else {
      const filtered = evidenceData.filter((evidence) => evidence.category === category);
      setFilteredEvidenceData(filtered);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
  };

  const getCurrentDate = () => {
    const now = new Date();
    return `${now.toLocaleString('default', { month: 'long' })} ${now.getDate()}, ${now.getFullYear()}`;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvidenceData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='lg:ml-64 ml-16 md:ml-64 text-sm min-h-screen'>
      <Navbar />
      <div className='mx-4 md:mx-8 lg:mx-16'>
        <h1 className='text-2xl font-bold mb-4 pt-5'>Evidence</h1>
        {/* Filter and search section */}
        <div className='flex items-center justify-between mb-4'>
          {/* Filter dropdown */}
          <div className='flex items-center space-x-4'>
            <span className='font-semibold'>Filter:</span>
            <select
              className='px-2 py-1 border border-gray-300 rounded-md focus:outline-none'
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value='all'>All</option>
              <option value='Category A'>Crime</option>
              <option value='Category B'>Civil</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* Search input */}
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Search..'
              className='px-2 py-1 text-sm border max-w-28 border-gray-300 rounded-md focus:outline-none'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        {/* Evidences content */}
        <div className='bg-white p-4 shadow-md rounded-lg'>
          {/* Evidences list */}
<div className='overflow-x-auto'>
  <table className='min-w-full divide-y divide-gray-200'>
    {/* Table headers */}
    <thead className='bg-gray-50'>
      <tr>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Category</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Uploaded By</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Upload Date</th>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
      </tr>
    </thead>
    {/* Table body */}
    <tbody className='bg-white divide-y divide-gray-200'>
      {/* Render evidence data */}
      {currentItems.map((evidence) => (
        <tr key={evidence.id}>
          <td className='px-6 py-4 whitespace-nowrap'>{evidence.id}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{evidence.category}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{evidence.description}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{evidence.uploadedBy}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{evidence.uploadDate}</td>
          <td className='px-6 py-4 whitespace-nowrap'>
            {evidence.actions.map((action, index) => (
              <button
                key={index}
                className='text-indigo-600 hover:text-indigo-900 mr-2'
                onClick={() => action.action === 'View' ? handleViewEvidence(evidence.id) : handleDeleteEvidence(evidence.id)}
              >
                {action.action}
              </button>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
        {/* Pagination */}
        <div className='flex justify-end mt-4'>
          {/* Pagination buttons */}
          <button
            className='px-3 py-1 border border-gray-300 rounded-md mr-2'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className='px-3 py-1 border border-gray-300 rounded-md'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= filteredEvidenceData.length}
          >
            Next
          </button>
        </div>
        {/* Action log */}
        <div className='mt-8'>
          <h2 className='text-lg font-semibold mb-2'>Action Log</h2>
          <div className='bg-gray-100 p-4 shadow-md rounded-lg'>
            {actionLog.map((log, index) => (
              <div key={index} className='mb-2'>
                <p className='text-sm text-gray-700 mb-1'>{log.action}</p>
                <p className='text-xs text-gray-500'>{log.timestamp} - {log.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
