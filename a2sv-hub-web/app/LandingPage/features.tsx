import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className="features flex gap-5">
        <div className='bg-white p-4 border rounded-md border-[#25C05A] '>
            <Image 
                src={"/stat.png"}
                alt=''
                width={60}
                height={60}
            />
            <p className='py-5 text-xl font-semibold'>Statistics</p>
            <p className='text-gray-500'>Delve into Data: Harness the Power of Comprehensive Statistical Analysis to Gain Deeper Insights, Uncover Trends, and Track Performance Metrics for Informed Decision-Making and Continuous Improvement</p>
        </div>
        <div className='bg-white p-4 border rounded-md border-[#25C05A] '>
            <Image 
                src={"/stat.png"}
                alt=''
                width={60}
                height={60}
            />
            <p className='py-5 text-xl font-semibold'>Statistics</p>
            <p className='text-gray-500'>Delve into Data: Harness the Power of Comprehensive Statistical Analysis to Gain Deeper Insights, Uncover Trends, and Track Performance Metrics for Informed Decision-Making and Continuous Improvement</p>
        </div>
        <div className='bg-white p-4 border rounded-md border-[#25C05A] '>
            <Image 
                src={"/stat.png"}
                alt=''
                width={60}
                height={60}
            />
            <p className='py-5 text-xl font-semibold'>Statistics</p>
            <p className='text-gray-500'>Delve into Data: Harness the Power of Comprehensive Statistical Analysis to Gain Deeper Insights, Uncover Trends, and Track Performance Metrics for Informed Decision-Making and Continuous Improvement</p>
        </div>
    </div>
  )
}

export default Features
