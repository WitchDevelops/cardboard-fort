import { supabase } from '@/services/supabase';
import { mapFormDataToDatabaseSchema } from '@/data/pets/mapPetData';
import { PetData } from '@/utils/types/petData';

export const addPet = async (formData: any): Promise<PetData> => {
  try {
    const databasePetObject = mapFormDataToDatabaseSchema(formData);
    const { data, error } = await supabase.from('pets_data').insert(databasePetObject).select().single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
