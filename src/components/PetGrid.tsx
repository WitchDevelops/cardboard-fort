import { PetCard } from '@/components/PetCard';
import { getPets } from '@/data/pets/getPets';

export const PetGrid = async () => {
  const pets = await getPets();
  if (!pets) {
    return null;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {pets.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
};
