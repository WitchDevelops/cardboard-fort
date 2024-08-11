import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TbEdit } from 'react-icons/tb';
import { TbDotsVertical } from 'react-icons/tb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Modal } from './modals/Modal';

export const ButtonsOnPetPage: React.FC<PetData> = ({ pet_id, pet_name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDeletePet = () => {
    console.log(`Pet deleted: ${pet_id}`);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-end gap-2 py-2">
      <Button className="flex items-center gap-2">
        <TbEdit /> Edit
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger className="bg-primary hover:bg-primary-hover text-white rounded-md text-sm px-4 py-2">
          <TbDotsVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="text-danger hover:text-danger-hover w-full"
            onClick={() => setIsModalOpen(true)}
          >
            Delete pet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Modal
        isOpen={isModalOpen}
        petName={pet_name}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDeletePet}
      />
    </div>
  );
};
