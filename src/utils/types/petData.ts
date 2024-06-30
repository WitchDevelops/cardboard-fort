export interface PetData {
  pet_id: string;
  pet_name: string;
  breed?: string;
  date_of_birth: Date;
  species: string;
  neutered: boolean;
  sex?: 'female' | 'male';
  img?: string;
  pets_more_info?: { pet_bio?: string; microchip_nr?: string };
}
