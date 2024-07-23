export interface PetIdProps {
  pet_id: string;
}

export interface PetTagProps {
  tag_id: string;
  tag_name: string;
  pet_id: string;
}

export interface PetMoreInfoProps {
  microchip_nr: string | number;
  pet_bio: string;
  pet_tags: PetTagProps[];
  pet_id: string;
}

export interface PetVaccinationProps {
  vaxx_id: string;
  vaxx_name: string;
  vaxx_date: string;
  vaxx_frequency: string;
  pet_id: string;
}

export interface PetMedicationProps {
  med_id: string;
  med_name: string;
  med_dose: string;
  med_frequency: string;
  med_start_date: string;
  med_end_date: string;
  pet_id: string;
}

export interface PetProps {
  pet_name: string;
  breed?: string;
  species: string;
  sex?: 'female' | 'male';
  img?: string;
  neutered: 'yes' | 'no';
  date_of_birth: string;
  pet_id?: string;
  pet_more_info?: PetMoreInfoProps;
}
export interface UserProps {
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
