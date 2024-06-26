'use client';
import React, { useState } from 'react';
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

export const AddPetModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <LaunchModalBtn title="Add a new pet" onClick={() => setOpen(true)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] bg-white">
        <DialogHeader>
          <DialogTitle>Add new pet</DialogTitle>
          <DialogDescription>
            Add a new pet. Fields marked with '*' are required.
          </DialogDescription>
        </DialogHeader>
        <AddPetForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
