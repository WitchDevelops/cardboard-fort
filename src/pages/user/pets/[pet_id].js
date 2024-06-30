//generates url slugs based on the data in the database,
//so that each pet has their own page with url: '/pets/[name]'
//code thanks to Le Chat, I don't understand what's going on here

import React from 'react';
import '@/app/globals.css';
import { supabase } from '@/services/supabase';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import { PetTabs } from '@/components/PetTabs';
import { ButtonsOnPetPage } from '@/components/ButtonsOnPetPage';

export async function getStaticPaths() {
  const { data: pets, error } = await supabase
    .from('pets_data')
    .select('pet_id');

  if (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }

  const paths = pets.map((pet) => ({
    params: { pet_id: pet.pet_id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
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
    console.error(petError);
    return { notFound: true };
  }

  return {
    props: { pet },
  };
}

export default function PetPage({ pet }) {
  console.log(pet);
  return (
    <div className="w-[80vw] max-w-[900px] m-auto">
      <div>
        <BreadCrumbs />
      </div>
      <ButtonsOnPetPage />
      <PetTabs {...pet} />
    </div>
  );
}
