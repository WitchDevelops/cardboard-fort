import { mockPets } from "@/data/data";
import { PetCard } from "@/components/PetCard";

export const PetGrid = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {mockPets.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
};
