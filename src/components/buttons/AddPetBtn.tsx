import React from 'react';
import { Button } from '@/components/ui/button';
import { TbCirclePlus } from 'react-icons/tb';

export const AddPetBtn = () => {
  return (
    <Button className="gap-2">
      <TbCirclePlus /> Add a new pet
    </Button>
  );
};

export default AddPetBtn;
