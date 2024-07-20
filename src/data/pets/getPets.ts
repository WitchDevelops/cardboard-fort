import { supabase } from '@/services/supabase';
import { PetData } from '@/utils/types/petData';

export const getPets = async () => {
  const { data: pets, error } = await supabase.from('pets_data').select('*');
  if (error) {
    throw error;
  }
  return pets as PetData[];
};
