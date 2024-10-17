'use client';
import React, { useState } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import {
  TbGenderMale,
  TbGenderFemale,
  TbClockHour3,
  TbAlertCircle,
} from 'react-icons/tb';
import { font_accent } from '@/components/ui/fonts';
import { PetCardImage } from '@/components/img/PetCardImage';
import { calculateAge } from '@/utils/date/calculateAge';
import { TbDotsVertical } from 'react-icons/tb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeletePetModal } from '@/components/modals/DeletePetModal';
import { petService } from '@/services/allPetsService';

interface PetCardProps extends PetData {
  onDelete: (pet_id: string) => void;
}

export const PetCard = ({
  pet_name,
  breed,
  sex,
  img,
  date_of_birth,
  pet_id,
  onDelete,
}: PetCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMale = sex === 'male';

  const currentDate = new Date();
  const age = calculateAge(date_of_birth, currentDate);

  const handleDeletePet = async () => {
    try {
      await petService.deletePet(pet_id);
      onDelete(pet_id);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-black/50 backdrop-blur-sm text-white rounded-bl-md rounded-xl text-xl px-2 py-2 absolute top-0 right-0 z-10 shadow-md">
          <TbDotsVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="text-danger hover:text-danger-hover w-full"
            onClick={() => setIsModalOpen(true)}
          >
            Delete pet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href={`/user/pets/${pet_id}`}>
        <Card className="h-[350px] relative border-0">
          <CardHeader>
            <PetCardImage img={img} alt={pet_name} />
            <div className="relative z-1 p-4 min-h-[33%] bg-black/60 backdrop-blur-sm rounded-b-xl flex flex-col justify-between">
              <CardTitle
                className={`${font_accent.className} text-3xl flex justify-between items-center`}
              >
                <div className="truncate" title={pet_name}>
                  {pet_name}
                </div>
                <div>
                  <TbAlertCircle className="text-danger" />
                </div>
              </CardTitle>
              <p>{breed}</p>
              <div className="flex justify-between items-center gap-3 uppercase">
                {sex ? (
                  <CardDescription className="flex items-center gap-1">
                    {isMale ? (
                      <TbGenderMale className="icon-sm" />
                    ) : (
                      <TbGenderFemale className="icon-sm" />
                    )}
                    <span>{isMale ? 'Male' : 'Female'}</span>
                  </CardDescription>
                ) : null}

                <div
                  className="flex items-center gap-1 overflow-hidden"
                  title={age}
                >
                  <CardDescription>
                    <TbClockHour3 className="icon-sm" />
                  </CardDescription>
                  <CardDescription className="truncate">{age}</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Link>
      <DeletePetModal
        isOpen={isModalOpen}
        petName={pet_name}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDeletePet}
      />
    </div>
  );
};
