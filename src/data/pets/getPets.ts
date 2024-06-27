import { supabase } from '@/services/supabase';

export const getPets = async () => {
  const { data: pets, error } = await supabase.from('pets_data').select('*');
  if (error) {
    console.log(error);
    return null;
  }
  return pets;
};
