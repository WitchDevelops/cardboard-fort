//maps form input field names and order to the datababase schema
//because the database needs a new entity to be in the same order as the schema
//and the order in pet form is different

import { PetProps } from '@/types/global';

//to make more sense to the user
export const mapFormDataToDatabaseSchema = (formData: PetProps) => {
  const databasePetObject = {
    pet_name: formData.pet_name,
    date_of_birth: formData.date_of_birth,
    breed: formData.breed,
    img: formData.img,
    sex: formData.sex,
    neutered: formData.neutered,
    species: formData.species,
  };

  return databasePetObject;
};
