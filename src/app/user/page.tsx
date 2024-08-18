'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';
import { PetData } from '@/utils/types/petData';
import { Loader } from '@/components/Loader';
import { removePet } from '@/data/pets/removePet';

const page = () => {
  const [pets, setPets] = useState<PetData[]>([]);
  const [petAddedOrRemoved, setPetAddedOrRemoved] = useState(false);

  useEffect(() => {
    setPetAddedOrRemoved(false);
  }, [petAddedOrRemoved]);

  const handleRemovePet = async (petId: string) => {
    await removePet(petId);
    setPets((prevPets) => prevPets.filter((pet) => pet.pet_id !== petId));
    setPetAddedOrRemoved(true);
  };

  return (
    <div>
      <div className="flex justify-end py-4">
        {/* ShadCN's modal component has the button that calls the modal inside the modalcomponent, which can be confusing */}
        {/* that's why there is a AddPetModal here, and not the button */}
        {/* https://ui.shadcn.com/docs/components/dialog */}
        <AddPetModal
          onPetAdded={(newPet) => {
            setPets((prevPets) => [...prevPets, newPet]);
            setPetAddedOrRemoved(true);
          }}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <PetGrid refetch={petAddedOrRemoved} onDelete={handleRemovePet} />
      </Suspense>
    </div>
  );
};

export default page;
