import { font_accent } from '@/components/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import '@/app/styles/main.scss';

export default function Home() {
  return (
    <div className="h-[100vh] w-full home">
      <main className="text-center">
        <div className="home-img home-content">
          <div className="home-img__blob home-img__blob--first"></div>
          <div className="home-img__blob home-img__blob--second"></div>
          <div className="home-img__blob home-img__blob--third"></div>
          <div className="home-img__blob home-img__blob--fourth"></div>
        </div>

        <div className="home-text home-content">
          <h1
            className={`${font_accent.className} font-semibold text-4xl text-white-100`}
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
              <Button
                variant={'outline'}
                className="text-white-100 hover:text-primary hover:bg-white-100"
              >
                Login
              </Button>
            </Link>
            <Link href="user">
              <Button className="bg-white-100 text-primary hover:bg-transparent hover:text-white-100 border hover:border-white-100">
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
