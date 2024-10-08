'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase';
import { Loader } from '@/components/Loader';

interface MedicationsProps {
  pet_id: string;
}

export const Medications: React.FC<MedicationsProps> = ({ pet_id }) => {
  const [medications, setMedications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMedications = async () => {
      const { data, error } = await supabase
        .from('pet_medications')
        .select('*')
        .eq('pet_id', pet_id);
      if (error) {
        alert('Error fetching medications');
        setIsLoading(false);
        throw error;
      } else {
        setMedications(data);
      }
      setIsLoading(false);
    };
    fetchMedications();
  }, [pet_id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex gap-4">
      {medications.length > 0 ? (
        medications.map((medication) => (
          <div
            key={medication.med_id}
            className="bg-slate-50 rounded-lg px-4 py-2"
          >
            <h3 className="font-bold text-md">{medication.med_name}</h3>
            <p>Dose: {medication.med_dose}</p>
            <p>Frequency: {medication.med_frequency}</p>
            <p>Start date: {medication.med_start_date}</p>
            <p>End date: {medication.med_end_date}</p>
          </div>
        ))
      ) : (
        <p>No meds, your pet is healthy</p>
      )}
    </div>
  );
};
