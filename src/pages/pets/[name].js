//generates url slugs based on the data in the database,
//so that each pet has their own page with url: '/pets/[name]'
//code thanks to Le Chat, I don't understand what's going on here

import { supabase } from '@/services/supabase';

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

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PetPage({ pet }) {
  return (
    // TODO: refactor this into a separate component
    <Card>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Born on: {pet.dateOfBirth}</p>
        <p>Species: {pet.species}</p>
        <p>Neutered: {pet.neutered ? 'Yes' : 'No'}</p>
        <p>Bio: {pet.bio}</p>
        {/* Add more pet data here */}
      </CardContent>
    </Card>
  );
}
