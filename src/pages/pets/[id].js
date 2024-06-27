//generates url slugs based on the data in the database,
//so that each pet has their own page with url: '/pets/[name]'
//code thanks to Le Chat, I don't understand what's going on here

import React from 'react';
import { supabase } from '@/lib/supabase';
import { PetTabs } from '@/components/PetTabs';
import '@/app/globals.css';
import { ButtonsOnPetPage } from '@/components/ButtonsOnPetPage';
export async function getStaticPaths() {
  const { data: pets, error } = await supabase.from('pets_data').select('id');

  if (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }

  const paths = pets.map((pet) => ({
    params: { id: pet.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data: pet, error } = await supabase
    .from('pets_data')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  return {
    props: { pet },
  };
}

export default function PetPage({ pet }) {
  return (
    <div className="w-[80vw] mx-auto">
      <ButtonsOnPetPage />
      <PetTabs {...pet} />
    </div>
  );
}
