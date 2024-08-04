export interface PetIdProps {
  pet_id: string;
}

declare global {
  interface PetTagProps {
    tag_id: string;
    tag_name: string;
    pet_id: string;
  }

  interface PetMoreInfoProps {
    microchip_nr: string | number;
    pet_bio: string;
    pet_tags: PetTagProps[];
    pet_id: string;
  }

  interface PetVaccinationDB {
    vaxx_id: string;
    vaxx_name: string;
    vaxx_date: string;
    vaxx_frequency: string;
    pet_id: string;
  }

  interface PetVaccinationProps {
    vaxxId: string;
    vaxxName: string;
    vaxxDate: string;
    vaxxFrequency: string;
    petId: string;
  }

  interface PetMedicationDB {
    med_id: string;
    med_name: string;
    med_dose: string;
    med_frequency: string;
    med_start_date: string;
    med_end_date: string;
    pet_id: string;
  }

  interface PetMedicationProps {
    medId: string;
    medName: string;
    medDose: string;
    medFrequency: string;
    medStartDate: string;
    medEndDate: string;
    petId: string;
  }

  interface PetDB {
    // pet_id?: string;
    pet_name: string;
    date_of_birth: string;
    breed?: string;
    img?: string;
    sex?: 'female' | 'male';
    neutered: 'yes' | 'no';
    species: string;
    // petMoreInfo?: PetMoreInfoProps;
  }

  interface PetProps {
    // petId?: string;
    petName: string;
    dateOfBirth: string;
    breed?: string;
    img?: string;
    sex?: 'female' | 'male';
    neutered: 'yes' | 'no';
    species: string;
    // petMoreInfo?: PetMoreInfoProps;
  }

  interface UserProps {
    user_id: string;
    user_name: string;
    user_email: string;
    account_created: Date;
    last_logged_in: Date;
    user_pets: {
      basic_data: PetProps;
      more_info: PetMoreInfoProps;
      medication_data: PetMedicationProps[];
      vaccination_data: PetVaccinationProps[];
    }[];
  }
}
