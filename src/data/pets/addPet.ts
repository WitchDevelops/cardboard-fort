import { supabase } from '@/services/supabase';
import { mapFormDataToDatabaseSchema } from '@/utils/date/mapFunc';

export const addPet = async (formData: PetProps): Promise<boolean> => {
  try {
    const databasePetObject = mapFormDataToDatabaseSchema(formData);

    const { error } = await supabase
      .from('pets_data')
      .insert([databasePetObject]);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
