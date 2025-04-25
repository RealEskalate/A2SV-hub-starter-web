'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LoginModal } from '../LoginModal'

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className='flex justify-between items-center'>
      <div className="icon">
        <Link href={"/"}>
            <Image 
                src={"/image.png"}
                alt={"Hub"}
                width={120}
                height={120}
            />
        </Link>
      </div> 
        <div className='menu flex items-center gap-10 text-black '>
            <Link href={'/'}>Home</Link>
            <Link href={'https://a2sv-hub.gitbook.io/hub'}>Docs</Link>
            <Link href={'/blog'} inert className='text-gray-500' >Blog</Link>
            <Link href={'#about'} >About A2sv</Link>
        </div>

        <div>
        
      
      <LoginModal  
        // onClose={() => setIsLoginModalOpen(false)} 
      />        
      </div>
    </div>
  )
}

export default NavBar
