import { supabase } from '@/services/supabase';
import { PostgrestResponse } from '@supabase/supabase-js';

export const getPets = async (): Promise<PetData[]> => {
  const { data: pets, error }: PostgrestResponse<PetData> = await supabase
    .from('pets_data')
    .select('*');
  if (error) {
    throw error;
  }
  return pets;
};
