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
import { font_accent } from '@/components/ui/fonts';

export const AddPetModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <LaunchModalBtn title="Add a new pet" onClick={() => setOpen(true)} />
      </DialogTrigger>
      <DialogContent className="w-[90vw] h-[90vh] sm:w-[80vw] sm:h-[80vh] md:max-w-[600px] md:h-fit md:max-h-[500px] lg:max-w-[800px] lg:max-h-[600px] bg-white rounded-xl border-0 overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle
            className={`${font_accent.className} font-semibold text-3xl text-primary text-center`}
          >
            Add new pet
          </DialogTitle>
          <DialogDescription className="text-center text-stone-500">
            Add a new pet. Fields marked with '*' are required.
          </DialogDescription>
        </DialogHeader>
        <AddPetForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
