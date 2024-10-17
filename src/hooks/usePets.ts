import { useState, useEffect } from 'react';
import { petService } from '@/services/allPetsService';
import { CanceledError } from 'axios';

export const usePets = () => {
  const [pets, setPets] = useState<PetData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPets = async () => {
      setIsLoading(true);
      try {
        const petsData = await petService.getPets(controller.signal);
        setPets(petsData);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPets();

    return () => {
      controller.abort();
    };
  }, []);

  return { pets, isLoading, error };
};
