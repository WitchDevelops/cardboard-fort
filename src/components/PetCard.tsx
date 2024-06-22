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
import { formatDate } from '@/utils/date/formatDate';
import { calculateAge } from '@/utils/date/calculateAge';

interface PetCardProps {
  name: string;
  breed?: string;
  species: string;
  gender?: 'female' | 'male';
  img?: string;
  date_of_birth: Date;
}

export const PetCard = ({
  name,
  breed,
  gender,
  img,
  date_of_birth,
}: PetCardProps) => {
  const genderDescription =
    gender === 'male' ? (
      <>
        <TbGenderMale />
        <span>MALE</span>
      </>
    ) : gender === 'female' ? (
      <>
        <TbGenderFemale />
        <span>FEMALE</span>
      </>
    ) : null;

  const formattedDateOfBirth = formatDate(date_of_birth);
  const currentDate = new Date();
const age = calculateAge(date_of_birth, currentDate);


  return (
    <Link href={`/pets/${name}`}>
      <Card className="w-[300px] h-[350px] relative">
        <CardHeader>
          <PetCardImage img={img} alt={name} />
          <div className="relative z-1 p-4 min-h-[33%] bg-black backdrop-blur-sm bg-opacity-60 rounded-b-xl flex flex-col justify-between">
            <CardTitle
              className={`${font_accent.className} font-semibold text-3xl flex justify-between items-center`}
            >
              {name}

              <TbAlertCircle className="text-danger" />
            </CardTitle>
            <p>{breed}</p>
            <div className="flex justify-between items-center ">
              {genderDescription && (
                <CardDescription className="flex items-center gap-1">
                  {genderDescription}
                </CardDescription>
              )}
              <CardDescription className="flex items-center gap-1">
                <TbClockHour3 />
                {/* {formattedDateOfBirth} */}
                {age}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
