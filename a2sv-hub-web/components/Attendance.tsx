import React from 'react'

function Attendance() {
  return (
    <div className='transition-all hover:shadow-lg dark:hover:shadow-neutral-700 p-4 bg-white border rounded-xl mt-4 ml-24 mr-9'>
        <h4 className='font-semibold mb-2'>Attendance</h4>
        <div className='flex flex-wrap gap-[4px] '>
            {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className='w-3 h-3' style={{backgroundColor:getAttendanceColor(i%4)}}/>))}
        </div>
        <p className='text-xs text-muted-foreground mt-2'> <span className='text-green-600'> Present: 229 | 92%</span>  |  <span className='text-yellow-600'>Excused: 18</span>  |  <span className='text-red-600'>Absent: 1</span></p>
    </div>
  )
}

function getAttendanceColor(status: number) {
  const colors = ["#22c55e", "#eab308", "#ef4444", "#e5e7eb"];
  return colors[status];}
export default Attendance