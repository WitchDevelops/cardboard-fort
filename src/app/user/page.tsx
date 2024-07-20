'use client';
import React, { useState, useEffect } from 'react';
import { PetGrid } from '@/components/PetGrid';
import { AddPetModal } from '@/components/modals/AddPetModal';

const page = () => {
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
        <AddPetModal onPetAdded={() => setPetAdded(true)} />
      </div>
      <PetGrid refetch={petAdded} />
    </div>
  );
};

export default page;
