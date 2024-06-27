import { PetCard } from '@/components/PetCard';
import { getPets } from '@/data/pets/getPets';

export const PetGrid = async () => {
  const pets = await getPets();
  if (!pets) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {pets.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
};
