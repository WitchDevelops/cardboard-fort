//generates url slugs based on the data in the database,
//so that each pet has their own page with url: '/pets/[name]'
//code thanks to Le Chat, I don't understand what's going on here

import React from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/utils/date/formatDate';
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

  const formattedDateOfBirth = formatDate(pet.date_of_birth);

  return (
    // TODO: refactor this into a separate component
    <Card>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Born on: {formattedDateOfBirth}</p>
        {/* also add calculated age here */}
        <p>Species: {pet.species}</p>
        <p>Neutered: {pet.neutered ? 'Yes' : 'No'}</p>
        <p>Bio: {pet.bio}</p>
        {/* Add more pet data here */}
      </CardContent>
    </Card>
  );
}
