import React from 'react';
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

interface PetCardProps {
  pet_name: string;
  breed?: string;
  species: string;
  sex?: 'female' | 'male';
  img?: string;
  date_of_birth: Date;
  pet_id: string;
}

export const PetCard = ({
  pet_name,
  breed,
  sex,
  img,
  date_of_birth,
  pet_id,
}: PetCardProps) => {
  const isMale = sex === 'male';

  const currentDate = new Date();
  const age = calculateAge(date_of_birth, currentDate);

  return (
    <Link href={`/user/pets/${pet_id}`}>
      <Card className="h-[350px] relative">
        <CardHeader>
          <PetCardImage img={img} alt={pet_name} />
          <div className="relative z-1 p-4 min-h-[33%] bg-black backdrop-blur-sm bg-opacity-60 rounded-b-xl flex flex-col justify-between">
            <CardTitle
              className={`${font_accent.className} text-3xl flex justify-between items-center`}
            >
              <div
                className="truncate"
                title={pet_name}
              >
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
                <CardDescription className="truncate">
                  {age}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
