import { supabase } from '@/services/supabase';

import { mapDatabaseToPetProps } from '@/utils/date/mapFunc';

export const getPets = async (): Promise<PetProps[] | null> => {
  try {
    const { data, error } = await supabase
      .from<'pets_data', PetDB>('pets_data')
      .select('*');

    if (error) {
      console.error('Error fetching pets:', error);
      return null;
    }

    if (!data) {
      return [];
    }

    const pets = (data as PetDB[]).map(mapDatabaseToPetProps);

    return pets;
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
};
