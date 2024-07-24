'use client'
import React, { useState } from 'react';
import { supabase } from '@/services/supabase';

interface VaccinationsProps {
  pet_id: string;
}

export const Vaccinations: React.FC<VaccinationsProps> = ({ pet_id }) => {
  const [vaccinations, setVaccinations] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchVaccinations = async () => {
      const { data, error } = await supabase
        .from('pet_vaccinations')
        .select('*')
        .eq('pet_id', pet_id);

      if (error) {
        console.error(error);
      } else {
        setVaccinations(data);
      }
    };

    fetchVaccinations();
  }, [pet_id]);

  return (
    <div className="flex gap-4">
      {vaccinations.length > 0 ? (
        vaccinations.map((vaccination) => (
          <div
            key={vaccination.id}
            className="bg-slate-50 rounded-lg px-4 py-2"
          >
            <h3 className="font-bold text-md">{vaccination.vaxx_name}</h3>
            <p>Date: {vaccination.vaxx_date}</p>
            {/* Add more vaccination details here */}
          </div>
        ))
      ) : (
        <p>No vaccination info, add some</p>
      )}
    </div>
  );
};
