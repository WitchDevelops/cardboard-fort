import React from 'react';
import { TbCircleX } from 'react-icons/tb';

type TagProps = {
  tagText: string;
};

export const Tag: React.FC<TagProps> = ({ tagText }) => {
  return (
    <p className="bg-primary rounded-sm px-3 py-1 text-white text-sm flex items-center gap-1">
      {tagText} <TbCircleX />
    </p>
  );
};
