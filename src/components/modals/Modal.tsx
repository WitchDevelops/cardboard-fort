import React from 'react';
import { TbTrashFilled } from 'react-icons/tb';

interface ModalProps {
  isOpen: boolean;
  petName: string;
  onClose: () => void;
  onDelete: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  petName,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">
          Are you sure you want to delete {petName}?
        </h2>
        <p className="mb-4">
          This is a destructive and final operation. It will permanently delete
          the pet and all its data. This cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2"
            onClick={onDelete}
          >
            <TbTrashFilled />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
