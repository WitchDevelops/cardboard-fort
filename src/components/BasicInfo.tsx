import React from 'react';
import { EditablePetInfo } from './EditablePetInfo';
interface PetInfoProps {
  pet: {
    img?: string;
  };
}

export const BasicInfo = ({ pet }: any) => {
  return (
    <div>
      <div className="flex">
        <div className="rounded-xl w-[25%] overflow-hidden col-span-1">
          <img className="aspect-auto h-full w-full " src={pet.img} />
        </div>
        <div className="w-[75%]">
          <EditablePetInfo pet={pet} />
        </div>
      </div>
      <div className="flex">
        <div className="w-[75%]">
          <p>Description</p>
          <p>{pet.bio}</p>
        </div>
        <div className="w-[25%]">
          <p>Tags</p>
          <div>
            <p>Cute</p>
            <p>Energetic</p>
          </div>
        </div>
      </div>
    </div>
  );
};
