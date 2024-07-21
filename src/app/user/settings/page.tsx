import React from 'react';
import { font_accent } from '@/components/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBack } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
const page = () => {
  return (
    <div className="p-0 mt-[60px]">
      <h1 className={`${font_accent.className} text-2xl`}>User settings</h1>
      <div className="flex flex-col items-center align-middle">
        <Image
          src="/playfulCat.svg"
          alt="Under construction"
          width={400}
          height={200}
        />
        <p className="text-xl mb-4">Under construction...</p>
        <Link href="/user">
          <Button className="gap-2">
            <TbArrowBack />
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
