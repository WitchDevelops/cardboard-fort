import { useEffect, useState } from 'react';
import { PetCard } from '@/components/PetCard';
import { getPets } from '@/data/pets/getPets';

type PetGridProps = {
  refetch: boolean;
};

export const PetGrid: React.FC<PetGridProps> = ({ refetch }) => {
  const [pets, setPets] = useState<PetData[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = await getPets();
        setPets(petsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPets();
  }, [refetch]);

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-4 py-4">
      {pets.map((pet) => (
        <PetCard key={pet.pet_id} {...pet} />
      ))}
    </div>
  );
};
