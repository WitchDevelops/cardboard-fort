//maps form input field names and order to the datababase schema
//because the database needs a new entity to be in the same order as the schema
//and the order in pet form is different
//to make more sense to the user
export const mapFormDataToDatabaseSchema = (formData: any) => {
    const databasePetObject = {
      name: formData.name,
      date_of_birth: formData.dateOfBirth,
      breed: formData.breed,
      img: formData.picture,
      vaccinations: formData.inputName5,
      medicines: formData.inputName6,
      gender: formData.sex,
      neutered: formData.neutered,
      species: formData.species,
      bio: formData.inputName10,
    };
  
    return databasePetObject;
  };