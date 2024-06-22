import React from 'react';
import { Button } from '@/components/ui/button';
import { TbCirclePlus } from 'react-icons/tb';

interface LaunchModalBtnProps {
  title: string,
}
export const LaunchModalBtn = ({title}: LaunchModalBtnProps) => {
  return (
    <Button className="gap-2">
      <TbCirclePlus /> {title}
    </Button>
  );
};

export default LaunchModalBtn;
