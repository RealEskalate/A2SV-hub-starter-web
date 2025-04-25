'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // this will be replaced by real api
        const response = await fetch('https://api.example.com/submissions');
        const data = await response.json();

        setSubmissions(data.submissions || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter submissions based on the filter input
  const filteredSubmissions = submissions.filter(submission =>
    submission.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Placeholder for export functionality
  const handleExport = () => {
    alert('Export functionality to be implemented!');
  };

  return (
    <div className="min-h-screen p-4 ml-24 mr-10">
      <Head>
        <title>Submissions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Table Controls */}
      <div className="flex items-center mb-4 bg-white p-4 rounded-lg shadow-md gap-2">
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-gray-800">Columns</button>
          <input
            type="text"
            placeholder="Filters"
            className="border rounded px-2 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <button
          onClick={handleExport}
          className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
        >
          <span>Export</span>
        </button>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">Name</th>
              <th className="p-4">Time spent</th>
              <th className="p-4">Tries</th>
              <th className="p-4">Language</th>
              <th className="p-4">In contest</th>
              <th className="p-4">Added</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="p-4 text-center">Loading...</td>
              </tr>
            ) : filteredSubmissions.length > 0 ? (
              filteredSubmissions.map((submission, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{submission.name}</td>
                  <td className="p-4">{submission.timeSpent}</td>
                  <td className="p-4">{submission.tries}</td>
                  <td className="p-4">{submission.language}</td>
                  <td className="p-4">{submission.inContest}</td>
                  <td className="p-4">{submission.added}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center">No submissions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}