export const mapToPetVaccinationProps = (
  data: PetVaccinationDB
): PetVaccinationProps => ({
  vaxxId: data.vaxx_id,
  vaxxName: data.vaxx_name,
  vaxxDate: data.vaxx_date,
  vaxxFrequency: data.vaxx_frequency,
  petId: data.pet_id,
});

export const mapToPetMedicationProps = (
  data: PetMedicationDB
): PetMedicationProps => ({
  medId: data.med_id,
  medName: data.med_name,
  medDose: data.med_dose,
  medFrequency: data.med_frequency,
  medStartDate: data.med_start_date,
  medEndDate: data.med_end_date,
  petId: data.pet_id,
});

export const mapFormDataToDatabaseSchema = (formData: PetProps): PetDB => ({
  // pet_id: formData.petId,
  pet_name: formData.petName,
  date_of_birth: formData.dateOfBirth,
  breed: formData.breed,
  img: formData.img,
  sex: formData.sex,
  neutered: formData.neutered,
  species: formData.species,
  // petMoreInfo: formData.petMoreInfo,
});
export const mapDatabaseToPetProps = (data: PetDB): PetProps => ({
  // petId: data.pet_id,
  petName: data.pet_name,
  dateOfBirth: data.date_of_birth,
  breed: data.breed,
  img: data.img,
  sex: data.sex,
  neutered: data.neutered,
  species: data.species,
  // petMoreInfo: data.petMoreInfo,
});
