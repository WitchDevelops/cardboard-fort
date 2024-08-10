import { useEffect, useState } from 'react';
import { PetCard } from '@/components/PetCard';
import { getPets } from '@/data/pets/getPets';
import { Loader } from '@/components/Loader';

type PetGridProps = {
  refetch: boolean;
};

export const PetGrid: React.FC<PetGridProps> = ({ refetch }) => {
  const [pets, setPets] = useState<PetData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      setIsLoading(true);
      try {
        const petsData = await getPets();
        setPets(petsData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPets();
  }, [refetch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-4 py-4">
      {pets.map((pet) => (
        <PetCard key={pet.pet_id} {...pet} />
      ))}
    </div>
  );
};
