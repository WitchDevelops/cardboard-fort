import React from 'react';
import { formatDate } from '@/utils/date/formatDate';
import { calculateAge } from '@/utils/date/calculateAge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BasicInfo } from '@/components/BasicInfo';

interface PetTabsProps {
  name: string;
  breed?: string;
  date_of_birth: Date;
  species: string;
  neutered: boolean;
  bio: string;
  gender?: 'female' | 'male';
  img?: string;
}

export const PetTabs = (props: PetTabsProps) => {
  const currentDate = new Date();
  const formattedDateOfBirth = formatDate(props.date_of_birth);
  const age = calculateAge(props.date_of_birth, currentDate);
  console.log(props);
  return (
    <div>
      <Tabs defaultValue="basicInfo" className="w-[80vw] mx-auto">
        <TabsList className="flex justify-between">
          <TabsTrigger value="basicInfo">Basic Info</TabsTrigger>
          <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>
        <TabsContent value="basicInfo">
          <BasicInfo pet={props} />
        </TabsContent>
        <TabsContent value="vaccinations">Vaccinations</TabsContent>
        <TabsContent value="medications">Medications</TabsContent>
        <TabsContent value="appointments">Appointments</TabsContent>
      </Tabs>
    </div>
  );
};
