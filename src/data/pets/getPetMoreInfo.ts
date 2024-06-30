import { supabase } from '@/services/supabase';

export const getPetMoreInfo = async () => {
  const { data: pets, error } = await supabase.from('pets_more_info').select('*');
  if (error) {
    console.log(error);
    return null;
  }
  return pets;
};
