import { supabase } from '@/services/supabase';
import { mapFormDataToDatabaseSchema } from '@/data/pets/mapPetData';

export const addPet = async (formData: any) => {
  try {
    const databasePetObject = mapFormDataToDatabaseSchema(formData);
    const { error } = await supabase.from('pets_data').insert(databasePetObject);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
