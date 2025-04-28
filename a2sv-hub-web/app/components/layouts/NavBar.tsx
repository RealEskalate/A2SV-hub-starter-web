"use client";

import { Search, ChevronLeft } from 'lucide-react';
import { GoBell } from "react-icons/go";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from "next/image";
import { Badge } from '@/components/ui/badge';

export default function NavBar() {
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <div className="sticky top-0 z-50 h-16 flex items-center px-7 w-full bg-transparent backdrop-blur-md py-3">
      {/* Small devices - back button */}
      <div className="md:hidden mr-2">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-7 w-7 text-gray-800" />
        </Button>
      </div>

      {/* Search area */}
      <div className={`flex items-center ${searchExpanded ? 'flex-1' : ''}`}>
        {searchExpanded ? (
          <div className="flex-1 flex gap-2">
            <Input 
              placeholder="Search problems..." 
              className="h-9"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSearchExpanded(false)}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchExpanded(true)}
            className="rounded-full"
          >
            <Search className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Notification and Profile */}
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <GoBell fontSize={32} />
          <Badge variant="destructive" className="rounded-full absolute top-0 right-1 h-4 w-4 flex items-center justify-center p-2">
            84
          </Badge>
        </Button>

        <Image
          src="https://randomuser.me/api/portraits/men/10.jpg"
          alt="User profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
