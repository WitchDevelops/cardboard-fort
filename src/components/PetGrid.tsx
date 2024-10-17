import { PetCard } from '@/components/PetCard';
import { usePets } from '@/hooks/usePets';
import { Loader } from '@/components/Loader';

type PetGridProps = {
  refetch: boolean;
  onDelete: (pet_id: string) => void;
};

export const PetGrid: React.FC<PetGridProps> = ({ onDelete }) => {
  const { pets, isLoading, error } = usePets();
  //   const fetchPets = async () => {
  //     setIsLoading(true);
  //     try {
  //       const petsData = await getPets();
  //       setPets(petsData);
  //     } catch (error) {
  //       setErrorMessage('Failed to load pets. Please try again.');
  //       throw error;
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchPets();
  // }, [refetch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-4 py-4">
      {pets &&
        pets.map((pet) => (
          <PetCard key={pet.pet_id} {...pet} onDelete={onDelete} />
        ))}
    </div>
  );
};
