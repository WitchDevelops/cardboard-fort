import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';
import { Toaster } from '@/components/ui/toaster';
import { font_accent } from '@/components/ui/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import '@/app/styles/main.scss';

export default function Home() {
  return (
    <div className="grid place-items-center h-[100vh] text-center doors-of-durin">
      <main className="text-center">
        <h1 className={`${font_accent.className} font-semibold text-3xl`}>
          Pet app home page
        </h1>
        <div>
          <p>Speak, friend, and</p>
          <Link href="user">
            <Button>Enter</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
