import React from 'react';
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
import { TbGenderMale, TbGenderFemale } from 'react-icons/tb';
import { font_accent } from '@/components/ui/fonts';
import {styles} from '@/styles'

interface PetCardProps {
  name: string;
  breed?: string;
  dateOfBirth: string;
  species: string;
  gender?: string;
}
export const PetCard = ({
  name,
  dateOfBirth,
  breed,
  gender,
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

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle className={`${font_accent.className} font-semibold text-3xl`}>{name}</CardTitle>
        <p>{breed}</p>
        <CardDescription>Born on {dateOfBirth}</CardDescription>
        {genderDescription && (
          <CardDescription className="flex items-center gap-1">{genderDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Link href={`/pets/${name}`}>
          <Button>See more</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
