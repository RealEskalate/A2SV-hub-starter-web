"use client";

import Link from 'next/link';
import { ChevronDown, Home, BookOpen, Code, Trophy, Map, UserCircle, Group, Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from "next/image"
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Logo from './Logo';

type NavItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    count?: number;
  }[];
};

export default function Sidebar() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    tracks: false,
    contests: false
  });
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      label: 'Home',
      href: '/',
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: 'Tracks',
      href: '/tracks',
      children: [
        {
          label: 'Progress',
          href: '/tracks/progress',
          count: 35,
        },
      ],
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: 'Problems',
      href: '/problems',
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      label: 'Contests',
      href: '/contests',
      children: [
        {
          label: 'Upsolve',
          href: '/contests/upsolve',
          count: 76,
        },
      ],
    },
    {
      icon: <Map className="h-5 w-5" />,
      label: 'Roadmap',
      href: '/roadmap',
    },
    {
      icon: <UserCircle className="h-5 w-5" />,
      label: 'Users',
      href: '/users',
    },
    {
      icon: <Group className="h-5 w-5" />,
      label: 'Groups',
      href: '/groups',
    },
  ];

  const toggleSubMenu = (label: string) => {
    setExpanded((prev) => ({
      ...prev,
      [label.toLowerCase()]: !prev[label.toLowerCase()],
    }));
  };

  return (
    <div className="px-3">
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b z-40 flex items-center bg-red-500">
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="ml-3 flex items-center gap-1">
          <div className="bg-green-500 text-white p-1 rounded">
            <span className="font-bold text-lg">HUB</span>
          </div>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-200",
        mobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={() => setMobileSidebarOpen(false)}></div>

      <aside className={cn(
        "fixed top-0 bottom-0 w-[20%] border-r bg-background transition-transform duration-200 z-50",
        "md:translate-x-0 md:z-0",
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo></Logo>
          </Link>
        </div>

        <div className="p-4 border border-green-100 rounded mx-3 mb-5">
          <div className="flex items-center gap-3">
             <Image
                      src="https://randomuser.me/api/portraits/men/10.jpg"
                      alt="User profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
            <div>
              <div className="font-bold text-sm overflow-x-hidden">Melkishi Tesfaye</div>
              <div className="text-sm text-muted-foreground">Student</div>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            <div className="uppercase text-xs font-bold tracking-wider px-2 py-2">
              STUDENT
            </div>
            <nav className="space-y-2 mt-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div
                    className={cn(
                      "flex items-center justify-between px-2 py-3 rounded-md text-sm cursor-pointer text-muted-foreground",
                      item.label === 'Home' ? "bg-green-50 text-green-600 dark:bg-green-900/50 dark:text-green-400" : "hover:bg-muted"
                    )}
                    onClick={() => item.children && toggleSubMenu(item.label)}
                  >
                    <Link href={item.href} className="flex items-center gap-3 flex-1">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expanded[item.label.toLowerCase()] && "transform rotate-180"
                        )}
                      />
                    )}
                  </div>
                  {item.children && expanded[item.label.toLowerCase()] && (
                    <div className="pl-10 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center justify-between px-2 py-2 rounded-md text-sm hover:bg-muted"
                        >
                          <span>{child.label}</span>
                          {child.count !== undefined && (
                            <Badge variant="secondary" className="ml-auto">
                              {child.count}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </aside>
    </div>
  );
}