import { PetCard } from '@/components/PetCard';
import { supabase } from '@/lib/supabase';

export const PetGrid = async () => {
  const { data: pets, error } = await supabase.from('pets_data').select('*');
  if (error) {
    console.log(error);
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
