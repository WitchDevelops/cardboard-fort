// variable names and order of them as they are in the database
declare interface PetData {
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

declare interface AddPetFormData {
  petName: string;
  species: string;
  dateOfBirth: date;
  breed: string;
  picture?: string;
  sex?: 'male' | 'female';
  neutered?: 'yes' | 'no';
}
