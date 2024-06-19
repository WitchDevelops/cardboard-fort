import React from 'react';

interface DateComponentProps {
  dateOfBirth: Date;
}

export const DateOfBirth: React.FC<DateComponentProps> = ({
    dateOfBirth,
}) => {
  const date = new Date(dateOfBirth).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return <>{date}</>;
};
