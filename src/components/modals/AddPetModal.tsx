import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LaunchModalBtn } from '@/components/buttons/LaunchModalBtn';
import { AddPetForm } from '@/components/forms/AddPetForm';

export const AddPetModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* to have a reusable component for launching modals */}
        <LaunchModalBtn title="Add a new pet" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] bg-white">
        <DialogHeader>
          <DialogTitle>Add new pet</DialogTitle>
          <DialogDescription>
            Add a new pet. Fields marked with '*' are required.
          </DialogDescription>
        </DialogHeader>
        <AddPetForm />
      </DialogContent>
    </Dialog>
  );
};
