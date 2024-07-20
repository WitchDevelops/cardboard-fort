import { font_accent } from '@/components/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="h-[100vh] w-full home">
      <main className="text-center">
        <div className="relative home-content">
          <div className="home-blob"></div>
          <div className="home-blob"></div>
          <div className="home-blob"></div>
          <div className="home-blob"></div>
        </div>

        <div className="gap-[1rem] home-content">
          <h1
            className={`${font_accent.className} text-5xl text-white-100`}
          >
            Welcome to Pet App
          </h1>
          <h2 className="text-xl text-white-100 text-balance">
            Keep Your Pet's Health in Check, One Paw at a Time!
          </h2>
          <h3 className="text-xl text-white-100 text-balance">
            Track their medical history, manage appointments, and ensure a
            healthy, happy life for your furry friend.
          </h3>
          <div className="flex gap-4">
            <Link href="user">
              <Button variant={'outline'}>Login</Button>
            </Link>
            <Link href="user">
              <Button variant={'white'}>Signup</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
