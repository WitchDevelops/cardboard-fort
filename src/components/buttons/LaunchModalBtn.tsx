import React, { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { TbCirclePlus } from 'react-icons/tb';

interface LaunchModalBtnProps {
  onClick: () => void;
  title: string;
}
export const LaunchModalBtn = forwardRef<
  HTMLButtonElement,
  LaunchModalBtnProps
>(({ title, onClick }, ref) => {
  return (
    <Button ref={ref} onClick={onClick} className="gap-2">
      <TbCirclePlus /> {title}
    </Button>
  );
});
