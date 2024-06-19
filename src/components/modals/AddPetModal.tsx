import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TbCirclePlus } from 'react-icons/tb';
import { AddPetForm } from '@/components/forms/AddPetForm';

export const AddPetModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <TbCirclePlus /> <span>Add a new pet</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
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
