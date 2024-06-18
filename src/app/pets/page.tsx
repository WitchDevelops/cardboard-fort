import { supabase } from '@/lib/supabase';

async function getPetsData() {
  const { data, error } = await supabase.from('pets_data').select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export default async function PetsData() {
  const pets = await getPetsData();

  return (
    <ul>
        <p>Pets page (from database)</p>
      {pets?.map(pet => (
        <li key={pet.id}>{pet.name}</li>
      ))}
    </ul>
  );
}
