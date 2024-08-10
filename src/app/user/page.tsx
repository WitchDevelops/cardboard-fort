'use client';
import React, { useState, useEffect } from 'react';
import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';
import { PetData } from '@/utils/types/petData';
import { Loader } from '@/components/Loader';
import { Suspense } from 'react';

const page = () => {
  const [pets, setPets] = useState<PetData[]>([]);
  const [petAdded, setPetAdded] = useState(false);

  useEffect(() => {
    setPetAdded(false);
  }, [petAdded]);

  return (
    <div>
      <div className="flex justify-end py-4">
        {/* ShadCN's modal component has the button that calls the modal inside the modalcomponent, which can be confusing */}
        {/* that's why there is a AddPetModal here, and not the button */}
        {/* https://ui.shadcn.com/docs/components/dialog */}
        <AddPetModal
          onPetAdded={(newPet) => {
            setPets((prevPets) => [...prevPets, newPet]);
            setPetAdded(true);
          }}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <PetGrid refetch={petAdded} />
      </Suspense>

      {/* <PetGrid refetch={petAdded} /> */}
    </div>
  );
};

export default page;
