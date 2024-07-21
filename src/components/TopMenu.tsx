'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { font_accent } from '@/components/ui/fonts';
import { TbSearch, TbBell, TbSettings, TbLogout } from 'react-icons/tb';

export const TopMenu = () => {
  return (
    <nav className="flex py-2 px-4 gap-4 justify-between items-center rounded-lg bg-white shadow-md fixed top-0 z-10 w-[80vw] max-w-[900px]">
      <p
        className={`${font_accent.className} min-w-fit self-end text-2xl text-primary`}
      >
        Hi, John!
      </p>
      <form className="w-full relative">
        <Input
          className="rounded-full"
          name="searchBar"
          placeholder="Search..."
        />
        <Button
          className="absolute translate-y-[-50%] top-[50%] right-[10px] p-0"
          variant="ghost"
        >
          <TbSearch />
        </Button>
      </form>

      <div className="flex justify-center align-middle gap-1 text-primary text-xl">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <TbBell />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* TODO: render notification list once we have it */}
            <DropdownMenuItem>New notification</DropdownMenuItem>
            <DropdownMenuItem>Older notification</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <TbSettings />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/user/settings">User settings</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <TbLogout />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
