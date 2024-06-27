import React from 'react';
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
  return (
    <div>
      <Tabs defaultValue="basicInfo">
        <TabsList>
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
