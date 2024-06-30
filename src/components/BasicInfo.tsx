import React from 'react';
import { Tag } from '@/components/Tag';
import { TextTile } from '@/components/layout/TextTile';
import Image from 'next/image';
import { formatDate } from '@/utils/date/formatDate';

// TODO: type the interface

export const BasicInfo = ({ pet }: any) => {
  const formattedDateOfBirth = formatDate(pet.date_of_birth);
  return (
    <div
      className="flex flex-col sm:grid grid-cols-2 gap-4"
      style={{
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      <div
        className="rounded-xl shadow-md aspect-auto overflow-hidden"
        style={{ gridColumn: '1/2' }}
      >
        <Image
          src={pet.img}
          alt={pet.name}
          height={200}
          width={100}
          className="object-cover h-[100%] w-[100%]"
        />
      </div>
      <TextTile style={{ gridColumn: '2/4' }}>
        <div className="flex flex-col justify-between h-full">
          <div className="sm:grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <p className="font-bold">Pet Name:</p>
              <p className="border px-2 py-1 rounded-md">{pet.name}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Microchip:</p>
              <p className="border px-2 py-1 rounded-md">N/A</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Species:</p>
              <p className="border px-2 py-1 rounded-md">{pet.species}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Breed:</p>
              <p className="border px-2 py-1 rounded-md">
                {pet.breed || 'N/A'}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Neutered:</p>
              <p className="border px-2 py-1 rounded-md">
                {pet.neutered ? 'Yes' : 'No'}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Born on:</p>
              <p className="border px-2 py-1 rounded-md">
                {formattedDateOfBirth}
              </p>
            </div>
          </div>
        </div>
      </TextTile>
      <TextTile style={{ gridColumn: '1/3' }}>
        <p className="font-bold text-md p-2">Description</p>
        <p className="bg-slate-50 rounded-lg px-4 py-2">{pet.bio}</p>
      </TextTile>
      <TextTile>
        <p className="font-bold text-md p-2">Tags</p>
        <div className="bg-slate-50 rounded-md p-2">
          <div className="flex gap-2">
            <Tag tagText="cute" />
            <Tag tagText="energetic" />
          </div>
        </div>
      </TextTile>
    </div>
  );
};
