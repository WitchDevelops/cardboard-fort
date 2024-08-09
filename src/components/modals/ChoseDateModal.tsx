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
import { DatePickerForm } from '@/components/forms/DatePickerForm';

export const ChoseDateModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog 
    // open={open} onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <LaunchModalBtn title="Launch modal" onClick={() => setOpen(true)} />
      </DialogTrigger>
      <DialogContent className="h-[80vh]">
        <DatePickerForm />
      </DialogContent>
    </Dialog>
  );
};
