import React, { useState } from 'react';
import { mockPets } from '@/data/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  TbGenderMale,
  TbGenderFemale,
  TbClockHour3,
  TbPaw,
  TbAlertCircle,
} from 'react-icons/tb';
import { font_accent } from '@/components/ui/fonts';
import { styles } from '@/styles';

interface PetCardProps {
  name: string;
  breed?: string;
  dateOfBirth: string;
  species: string;
  gender?: string;
}
export const PetCard = ({ name, dateOfBirth, breed, gender }: PetCardProps) => {
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

  return (
    <Link href={`/pets/${name}`}>
      <Card className="w-[300px] h-[350px] relative">
        <CardHeader>
          <Avatar className="absolute top-0 left-0 z-0">
            <AvatarImage
              src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              // src="https://images.pexels.com/photos/159492/wildlife-photography-pet-photography-dog-dog-runs-159492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="@shadcn"
            />
            <AvatarFallback>
              <TbPaw className="w-full h-full" />
            </AvatarFallback>
          </Avatar>
          <div className="relative z-1 p-4 bg-black backdrop-blur-sm bg-opacity-60 rounded-b-xl">
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
                {dateOfBirth}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
