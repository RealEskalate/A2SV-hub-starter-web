'use client';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { FaLink } from 'react-icons/fa';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // Fetch data from API
  const fetchProblems = async (pageNum) => {
    setLoading(true);
    try {
      // Replaced by acctual end point
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=10`);
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false);
        return;
      }

      // Transform the API data
      const transformedData = data.map((item, index) => ({
        difficulty: (index + (pageNum - 1) * 10) % 2 === 0 ? 'Easy' : 'Medium',
        name: `Problem ${item.id}: ${item.title.slice(0, 20)}...`,
        tag: (index + (pageNum - 1) * 10) % 2 === 0 ? 'Sorting' : 'Array, Hash...',
        solved: '-',
        added: '1y',
        votes: Math.floor(Math.random() * 5) - 2,
      }));

      setProblems((prev) => [...prev, ...transformedData]);
    } catch (error) {
      console.error('Error fetching problems:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchProblems(page);
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
          fetchProblems(page + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, hasMore, page]);

  return (
    <div className="min-h-screen ml-24 mr-10">
      <Head>
        <title>Problems Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className=" bg-white px-4 py-5 sm:px-6 flex justify-between items-center ">
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-black-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Columns
              </button>
              <button className="px-3 py-1 border border-black-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Filters
              </button>
              <button className="px-3 py-1 border border-black-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Export
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white-100">
                <thead className="bg-white sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Diff...</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Tag</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Solved</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Added</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Vote</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Link</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {problems.length === 0 && !loading ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                        No data available
                      </td>
                    </tr>
                  ) : (
                    problems.map((problem, index) => (
                      <tr key={index}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          problem.difficulty === 'Easy' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {problem.difficulty}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{problem.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.tag}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.solved}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.added}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.votes}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <FaLink className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {loading && (
                <div className="px-6 py-4 text-center text-sm text-gray-500">
                  Loading...
                </div>
              )}
              <div ref={loaderRef} className="h-10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}