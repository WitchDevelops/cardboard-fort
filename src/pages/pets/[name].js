//generates url slugs based on the data in the database,
//so that each pet has their own page with url: '/pets/[name]'
//code thanks to Le Chat, I don't understand what's going on here

import React from 'react';
import { supabase } from '@/lib/supabase';
import { PetTabs } from '@/components/PetTabs';
// import 'tailwindcss/tailwind.css';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
export async function getStaticPaths() {
  const { data: pets, error } = await supabase.from('pets_data').select('name');

  if (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }

  const paths = pets.map((pet) => ({
    params: { name: pet.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data: pet, error } = await supabase
    .from('pets_data')
    .select('*')
    .eq('name', params.name)
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
  console.log(`from name.js: ${pet}`);
  return (
    // TODO: refactor this into a separate component
    <PetTabs {...pet} />
  );
}
