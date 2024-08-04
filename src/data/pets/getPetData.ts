import { supabase } from '@/services/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export async function getPetData(pet_id: string): Promise<PetData | null> {
  try {
    const { data: petData, error: petError }: PostgrestSingleResponse<PetData> =
      await supabase
        .from('pets_data')
        .select(
          `
          *,
          pets_more_info (
            microchip_nr,
            pet_bio
          )
        `
        )
        .eq('pet_id', pet_id)
        .single();

    if (petError) {
      throw petError;
    }

    return petData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
