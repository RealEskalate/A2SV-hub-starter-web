import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Contests() {
  const [progressData, setProgressData] = useState(null);
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // this will be replaced by actual api
        const response = await fetch('https://api.example.com/contest-progress');
        const data = await response.json();

        // Process chart data
        const chartData = {
          labels: data.progress.map(point => point.label), 
          datasets: [
            {
              label: 'Progress',
              data: data.progress.map(point => point.value), 
              borderColor: '#4A90E2',
              backgroundColor: 'rgba(74, 144, 226, 0.2)',
              fill: true,
              tension: 0.1,
            },
          ],
        };

        setProgressData(chartData);
        setContests(data.contests || []); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        min: 1000,
        max: 1400,
        ticks: { stepSize: 100 },
      },
      x: {
        ticks: { autoSkip: true, maxTicksLimit: 20 },
      },
    },
  };

  return (
    <div className="min-h-screen ml-24 mr-10 p-4">
      <Head>
        <title>Contest Progress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Contest Progress Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Contest Progress</h2>
        {loading ? (
          <p>Loading...</p>
        ) : progressData ? (
          <div className="relative">
            <Line data={progressData} options={chartOptions} />
            <div className="absolute top-0 left-0 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
              highest: 1400
            </div>
          </div>
        ) : (
          <p>No data available.</p>
        )}

        {/* Legend */}
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          {['Coder', 'Solver', 'Strategist', 'Knight', 'Ninja', 'Wizard', 'Pro', 'Elite'].map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={`w-4 h-4 rounded-full ${
                  index === 0 ? 'bg-blue-400' :
                  index === 1 ? 'bg-orange-400' :
                  index === 2 ? 'bg-red-400' :
                  index === 3 ? 'bg-yellow-400' :
                  index === 4 ? 'bg-purple-400' :
                  index === 5 ? 'bg-pink-400' :
                  index === 6 ? 'bg-green-400' :
                  'bg-red-600'
                }`}
              ></div>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contest List */}
      <div className="space-y-4">
        {contests.map((contest, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <span className="font-semibold">{contest.rank}. </span>
              <span>{contest.title}</span>
              <p className="text-sm text-gray-500">{contest.details}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:underline">Share</button>
              <button className="text-blue-600 hover:underline">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}