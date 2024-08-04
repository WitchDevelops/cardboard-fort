//maps form input field names and order to the datababase schema
//because the database needs a new entity to be in the same order as the schema
//and the order in pet form is different
//to make more sense to the user
export const mapFormDataToDatabaseSchema = (formData: AddPetFormData) => {
  const databasePetObject = {
    pet_name: formData.petName,
    date_of_birth: formData.dateOfBirth,
    breed: formData.breed,
    img: formData.picture,
    sex: formData.sex,
    neutered: formData.neutered,
    species: formData.species,
  };

  return databasePetObject;
};
