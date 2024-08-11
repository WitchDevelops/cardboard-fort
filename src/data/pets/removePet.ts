import { supabase } from '@/services/supabase';

export const removePet = async (petId: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('pets_data')
      .delete()
      .eq('pet_id', petId);
    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
