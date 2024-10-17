import { supabaseService } from '@/services/supabaseService';

export const petService = {
  getPets: async (signal: AbortSignal): Promise<PetData[]> => {
    return supabaseService.get<PetData>('pets_data', '*', signal);
  },
  createPet: async (pet: PetData): Promise<PetData> => {
    return supabaseService.post<PetData>('pets_data', pet);
  },
  updatePet: async (pet_id: string, pet: PetData): Promise<PetData> => {
    return supabaseService.put<PetData>('pets_data', pet_id, pet);
  },
  deletePet: async (pet_id: string): Promise<void> => {
    return supabaseService.delete('pets_data', pet_id, 'pet_id');
  },
};
