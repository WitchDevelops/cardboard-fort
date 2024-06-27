import React from 'react';
import { EditablePetInfo } from '@/components/EditablePetInfo';
import { Tag } from '@/components/Tag';
import { TextTile } from '@/components/layout/TextTile';
import Image from 'next/image';

// TODO: type the interface
export const BasicInfo = ({ pet }: any) => {
  return (
    <div
      className="sm:grid grid-cols-2 gap-4"
      style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
    >
      <div
        className="rounded-xl shadow-md aspect-auto overflow-hidden"
        style={{ gridColumn: '1/2' }}
      >
        <img className="object-cover" src={pet.img} />
        {/* TODO: use <Image> */}
        {/* problem: unconfigured host, look into that */}
        {/* <Image src={pet.img} alt={pet.name} width='100' height='200' /> */}
      </div>
      <TextTile style={{ gridColumn: '2/4' }}>
        <EditablePetInfo pet={pet} />
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
