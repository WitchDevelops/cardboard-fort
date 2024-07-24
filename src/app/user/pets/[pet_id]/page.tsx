//generates url slugs based on the data in the database,
//so that each pet has their own page with url: '/pets/[name]'
//code thanks to Le Chat, I don't understand what's going on here

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '@/app/globals.css';
import { supabase } from '@/services/supabase';

import { PetTabs } from '@/components/PetTabs';
import { ButtonsOnPetPage } from '@/components/ButtonsOnPetPage';

export async function generateStaticParams() {
  try {
    const { data: pets, error } = await supabase
      .from('pets_data')
      .select('pet_id');

    if (error) {
      throw error;
    }

    return pets.map((pet) => ({
      pet_id: pet.pet_id.toString(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page({ params }) {
  try {
    const { data: pet, error: petError } = await supabase
      .from('pets_data')
      .select(
        `
        *,
        pets_more_info (
          microchip_nr,
          pet_bio
        )
      `
      )
      .eq('pet_id', params.pet_id)
      .single();

    if (petError) {
      throw petError;
    }

    return (
      <div className="mt-[20px]">
        <ButtonsOnPetPage />
        <PetTabs {...pet} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error fetching pet data</div>;
  }
}
