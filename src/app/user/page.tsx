'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';
import { PetData } from '@/utils/types/petData';
import { Loader } from '@/components/Loader';
import { petService } from '@/services/allPetsService';

const page = () => {
  const [pets, setPets] = useState<PetData[]>([]);
  const [petListChanged, setPetListChanged] = useState(false);

  useEffect(() => {
    setPetListChanged(false);
  }, [petListChanged]);

  const handleRemovePet = async (pet_id: string) => {
    await petService.deletePet(pet_id);
    setPets((prevPets) => prevPets.filter((pet) => pet.pet_id !== pet_id));
    setPetListChanged(true);
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
            setPetListChanged(true);
          }}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <PetGrid refetch={petListChanged} onDelete={handleRemovePet} />
      </Suspense>
    </div>
  );
};

export default page;
