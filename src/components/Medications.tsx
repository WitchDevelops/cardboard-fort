import React, { useState } from 'react';
import { supabase } from '@/services/supabase';
import { PetIdProps } from '@/types/global';
import { mapToPetMedicationProps } from '@/utils/date/mapFunc';

export const Medications: React.FC<PetIdProps> = ({ pet_id }) => {
  const [medications, setMedications] = useState<PetMedicationProps[]>([]);

  React.useEffect(() => {
    const fetchMedications = async () => {
      const { data, error } = await supabase
        .from('pet_medications')
        .select('*')
        .eq('pet_id', pet_id);

      if (error) {
        console.error(error);
      } else {
        const mappedData = (data as PetMedicationDB[]).map(
          mapToPetMedicationProps
        );
        setMedications(mappedData);
      }
    };

    fetchMedications();
  }, [pet_id]);

  return (
    <div className="flex gap-4">
      {medications.length > 0 ? (
        medications.map((medication) => (
          <div
            key={medication.medId}
            className="bg-slate-50 rounded-lg px-4 py-2"
          >
            <h3 className="font-bold text-md">{medication.medName}</h3>
            <p>Dose: {medication.medDose}</p>
            <p>Frequency: {medication.medFrequency}</p>
            <p>Start date: {medication.medStartDate}</p>
            <p>End date: {medication.medEndDate}</p>
          </div>
        ))
      ) : (
        <p>No meds, your pet is healthy</p>
      )}
    </div>
  );
};
