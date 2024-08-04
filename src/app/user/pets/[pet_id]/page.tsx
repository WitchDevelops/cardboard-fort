import { getPetData } from '@/data/pets/getPetData';
import { supabase } from '@/services/supabase';
import { PetPage } from '@/components/PetPage';

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

export default async function Page({ params }: { params: { pet_id: string } }) {
  const initialPetData = await getPetData(params.pet_id);
  return <PetPage initialPetData={initialPetData} />;
}
