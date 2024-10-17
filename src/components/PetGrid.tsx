import { PetCard } from '@/components/PetCard';
import { usePets } from '@/hooks/usePets';
import { Loader } from '@/components/Loader';
import { petService } from '@/services/allPetsService';

type PetGridProps = {
  refetch: boolean;
  onDelete: (pet_id: string) => void;
};

export const PetGrid: React.FC<PetGridProps> = ({ onDelete }) => {
  const { pets, isLoading, error } = usePets();

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
