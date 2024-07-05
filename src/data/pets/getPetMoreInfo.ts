import { supabase } from '@/services/supabase';

export const getPetMoreInfo = async () => {
  try {
    const { data: pets, error } = await supabase
      .from('pets_more_info')
      .select('*');
    if (error) {
      throw error;
    }
    return pets;
  } catch (error) {
    console.error(error);
    return null;
  }
};
