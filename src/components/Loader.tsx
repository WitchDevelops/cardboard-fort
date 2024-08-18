import React from 'react';

export const Loader = () => {
  return (
    <div className="flex flex-col gap-4 min-h-[50vw] items-center justify-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary dark:text-white"
        role="status"
      ></div>
      <p className="text-primary-500">Loading...</p>
    </div>
  );
};
