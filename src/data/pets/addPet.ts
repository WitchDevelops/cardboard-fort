import { supabase } from '@/services/supabase';
import { mapFormDataToDatabaseSchema } from '@/data/pets/mapPetData';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export const addPet = async (formData: AddPetFormData): Promise<PetData> => {
  try {
    const databasePetObject = mapFormDataToDatabaseSchema(formData);
    const { data, error }: PostgrestSingleResponse<PetData> = await supabase
      .from('pets_data')
      .insert(databasePetObject)
      .select()
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
