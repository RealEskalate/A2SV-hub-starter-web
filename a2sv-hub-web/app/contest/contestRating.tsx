import React from 'react'
import { Badge,Avatar } from '@mui/material'
export interface User {
  id:number,
  rank:number,
  name:string,
  rating:number,
  section:string,
  avatar?:string,
  icon?:string
}
const ContestRating = () => {
  const users: User[] = [
    {
      id: 1,
      rank: 1,
      name: 'John Doe',
      rating: 2200,
      section: 'G47 student',
      avatar: '',
      icon: ''
    },
    {
      id: 2,
      rank: 2,
      name: 'Smith Mike',
      rating: 2100,
      section: 'G40 student',
      avatar: '',
      icon: ''
    },
    {
      id: 3,
      rank: 3,
      name: 'Emily Johnson',
      rating: 2050,
      section: 'G47 student',
      avatar: '',
      icon: ''
    },
    {
      id: 4,
      rank: 4,
      name: 'David Wilson',
      rating: 1980,
      section: 'G40 student',
      avatar: '',
      icon: ''
    },
    {
      id: 5,
      rank: 5,
      name: 'Sarah Brown',
      rating: 1920,
      section: 'G47 student',
      avatar: '',
      icon: ''
    },
    {
      id: 6,
      rank: 6,
      name: 'Michael Davis',
      rating: 1850,
      section: 'G40 student',
      avatar: '',
      icon: ''
    },
    {
      id: 7,
      rank: 7,
      name: 'Jessica Miller',
      rating: 1800,
      section: 'G47 student',
      avatar: '',
      icon: ''
    },
    {
      id: 8,
      rank: 8,
      name: 'Robert Taylor',
      rating: 1750,
      section: 'G40 student',
      avatar: '',
      icon: ''
    },
    {
      id: 9,
      rank: 9,
      name: 'Jennifer Anderson',
      rating: 1700,
      section: 'G47 student',
      avatar: '',
      icon: ''
    },
    {
      id: 10,
      rank: 10,
      name: 'William Thomas',
      rating: 1650,
      section: 'G40 student',
      avatar: '',
      icon: ''
    }
  ];
  return (
    <div className='mt-10 p-4 pl-0 min-w-[350px] bg-white '>
      <div className='heading flex justify-between items-center'>
        <div>
          <p className='text-2xl font-bold text-[#28313c]'>Ratings</p>
          <p className='text-sm text-[#a7b1bc]'>There are 317 users with Ratings</p>
          
        </div>
        <p className='text-[#3773D5] font-semibold'>Visual</p>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        {users.map((user) => (
          <div key={user.id} className="space-y-2">
            <div className="flex items-center justify-between p-2">
              {/* Left side */}
              <div className="flex items-center gap-4">
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full border text-[#28313c] font-semibold text-xs  rounded-full">
                      {user.rank}
                    </div>
                  }
                >
                  <Avatar
                    src={user.avatar}
                    className="w-14 h-14"
                  >
                    {!user.avatar && user.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                </Badge>

                {/* Name and section */}
                <div className="flex flex-col">
                  <span className="font-medium text-[#28313c]">{user.name}</span>
                  <span className="text-sm text-[#a7b1bc]">{user.section}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <span className="ml-1 text-[#28313c]">{user.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContestRating
