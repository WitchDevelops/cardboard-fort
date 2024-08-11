import React from 'react';
import { TbTrashFilled } from 'react-icons/tb';
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  petName: string;
  onClose: () => void;
  onDelete: () => void;
}

export const DeletePetModal: React.FC<ModalProps> = ({
  isOpen,
  petName,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
      <div className="z-10 bg-white shadow-lg sm:rounded-lg w-[90vw] sm:w-[80vw] md:max-w-[400px] lg:max-w-[500px] rounded-xl border-0">
        <div className="bg-alert-gradient text-white text-center px-4 py-3 rounded-t-xl sm:rounded-t-lg">
          <h2 className="text-lg font-bold">
            Are you sure you want to delete {petName}?
          </h2>
        </div>
        <div className="p-6">
          <div>
            <p className="mb-4">
              This is a destructive and final operation. It will permanently
              delete the pet and all its data. This cannot be undone.
            </p>
          </div>
          <div className="flex justify-between gap-2">
            <Button
              variant="cancel"
              onClick={onClose}
              className="min-w-[100px]"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={onDelete}
              className="min-w-[100px] flex items-center justify-center gap-2"
            >
              <TbTrashFilled />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
