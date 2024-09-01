'use client';

import { useState } from 'react';
import { PetTabs } from '@/components/PetTabs';
import { PetActionButtons } from '@/components/PetActionButtons';

type PageProps = {
  initialPetData: PetData | null;
};

export const PetPage = ({ initialPetData }: PageProps) => {
  const [pet, setPet] = useState<PetData | null>(initialPetData);

  return (
    <div className="mt-[20px]">
      {pet && <PetActionButtons {...pet} />}
      {pet && <PetTabs {...pet} />}
    </div>
  );
};
