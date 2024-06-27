import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <header className="flex justify-end p-5 px-24">
        {/* ShadCN's modal component has the button that calls the modal inside the modalcomponent, which can be confusing */}
        {/* that's why there is a AddPetModal here, and not the button */}
        {/* https://ui.shadcn.com/docs/components/dialog */}
        <AddPetModal />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PetGrid />
      </main>
      <Toaster />
    </>
  );
}
