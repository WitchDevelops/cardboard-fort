import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BasicInfo } from '@/components/BasicInfo';
import { Vaccinations } from '@/components/Vaccinations';
import { Medications } from '@/components/Medications';
import { PetProps } from '@/types/global';

export const PetTabs: React.FC<PetProps> = ({ ...pet }) => {
  return (
    <div>
      {pet.pet_id && (
        <Tabs defaultValue="basicInfo">
          <TabsList>
            <TabsTrigger value="basicInfo">Basic Info</TabsTrigger>
            <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>
          <TabsContent value="basicInfo">
            <BasicInfo {...pet} />
          </TabsContent>

          <TabsContent value="vaccinations">
            <Vaccinations pet_id={pet.pet_id} />
          </TabsContent>
          <TabsContent value="medications">
            <Medications pet_id={pet.pet_id} />
          </TabsContent>

          <TabsContent value="appointments">Appointments</TabsContent>
        </Tabs>
      )}
    </div>
  );
};
