import { Button } from '@/components/ui/button';
import { font_accent } from '@/components/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image src={'/pet-img/404.png'} width={400} height={400} alt={''} />
      <div className="flex flex-col justify-center items-center gap-4 gradient-bg p-5 rounded-2xl">
        <h2
          className={`${font_accent.className} font-bold text-white text-6xl sm:text-9xl`}
        >
          404
        </h2>
        <p
          className={`${font_accent.className} text-3xl sm:text-5xl text-white`}
        >
          Oops!
        </p>
        <p className="text-xl text-wrap text-center text-white">
          Our dog sniffed all over, but we couldn't find that page.
        </p>
        <Link href="/">
          <Button variant={'white'}>Home</Button>
        </Link>
      </div>
    </div>
  );
}
