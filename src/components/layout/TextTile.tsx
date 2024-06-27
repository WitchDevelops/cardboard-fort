import React, { ReactNode } from 'react';

interface TileProps {
  tailwindClass?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const TextTile: React.FC<TileProps> = ({
  tailwindClass,
  style,
  children,
}) => {
  return (
    <div
      className={`rounded-xl shadow-md p-4 ${tailwindClass}`}
      style={style}
    >
      {children}
    </div>
  );
};
