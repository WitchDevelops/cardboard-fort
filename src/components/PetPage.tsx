'use client';

import { useState } from 'react';
import { PetTabs } from '@/components/PetTabs';
import { ButtonsOnPetPage } from '@/components/ButtonsOnPetPage';
import { PetData } from '@/utils/types/petData';

type PageProps = {
  initialPetData: PetData | null;
};

export const PetPage = ({ initialPetData }: PageProps) => {
  const [pet, setPet] = useState<PetData | null>(initialPetData);

  return (
    <div className="mt-[20px]">
      <ButtonsOnPetPage />
      {pet && <PetTabs {...pet} />}
    </div>
  );
};
