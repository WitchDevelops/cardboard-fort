import React, { useState } from 'react';
import { supabase } from '@/services/supabase';
import { PetIdProps } from '@/types/global';
import { mapToPetVaccinationProps } from '@/utils/date/mapFunc';

export const Vaccinations: React.FC<PetIdProps> = ({ pet_id }) => {
  const [vaccinations, setVaccinations] = useState<PetVaccinationProps[]>([]);

  React.useEffect(() => {
    const fetchVaccinations = async () => {
      const { data, error } = await supabase
        .from('pet_vaccinations')
        .select('*')
        .eq('pet_id', pet_id);

      if (error) {
        console.error(error);
      } else {
        const mappedData = (data as PetVaccinationDB[]).map(
          mapToPetVaccinationProps
        );
        setVaccinations(mappedData);
      }
    };

    fetchVaccinations();
  }, [pet_id]);

  return (
    <div className="flex gap-4">
      {vaccinations.length > 0 ? (
        vaccinations.map((vaccination) => (
          <div
            key={vaccination.vaxxId}
            className="bg-slate-50 rounded-lg px-4 py-2"
          >
            <h3 className="font-bold text-md">{vaccination.vaxxName}</h3>
            <p>Date: {vaccination.vaxxDate}</p>
            {/* Add more vaccination details here */}
          </div>
        ))
      ) : (
        <p>No vaccination info, add some</p>
      )}
    </div>
  );
};
