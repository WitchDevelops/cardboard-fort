import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';

export default function Home() {

  return (
    <>
      <header className="flex justify-end p-5 px-24">
        <AddPetModal />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PetGrid />
      </main>
    </>
  );
}
