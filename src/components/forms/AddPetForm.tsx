'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { TextInput } from '@/components/forms/TextInput';
import { SelectInput } from '@/components/forms/SelectInput';
import { DatePicker } from '@/components/forms/DatePicker';
import { petService } from '@/services/allPetsService';
import { mapFormDataToDatabaseSchema } from '@/data/pets/mapPetData';

const FormSchema = z.object({
  petName: z
    .string()
    .min(2, { message: 'Pet name must be at least 2 characters long.' })
    .max(50, { message: 'Pet name cannot be longer than 50 characters.' }),
  species: z.string(),
  dateOfBirth: z.date({ message: 'Please provide a date of birth.' }),
  breed: z.string(),
  picture: z.string(),
  sex: z.enum(['male', 'female']),
  neutered: z.enum(['yes', 'no']),
});

interface AddPetFormProps {
  onSuccess: (newPet: PetData) => void;
}

export const AddPetForm: React.FC<AddPetFormProps> = ({ onSuccess }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const transformedData = mapFormDataToDatabaseSchema(data);
      const newPet = await petService.createPet(transformedData);
      if (newPet) {
        toast({
          title: 'Pet added successfully!',
          className: 'bg-white',
        });
        onSuccess(newPet);
      }
    } catch (error) {
      console.error('An error occurred while adding the pet:', error);
      toast({
        title: 'Error adding pet.',
        className: 'bg-danger',
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 "
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          <TextInput
            label="Pet Name*"
            name="petName"
            placeholder="Kitty Cat"
            register={form.register}
            error={form.formState.errors.petName?.message}
          />

          <SelectInput
            label="Species*"
            name="species"
            options={[
              { value: 'Cat', label: 'Cat' },
              { value: 'Dog', label: 'Dog' },
              { value: 'Rabbit', label: 'Rabbit' },
              { value: 'Hamster', label: 'Hamster' },
              { value: 'Bird', label: 'Bird' },
              { value: 'Guinea Pig', label: 'Guinea Pig' },
              { value: 'Other', label: 'Other...' },
            ]}
            register={form.register}
            error={form.formState.errors.species?.message}
          />

          <SelectInput
            label="Sex*"
            name="sex"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            register={form.register}
            error={form.formState.errors.sex?.message}
          />

          <SelectInput
            label="Neutered*"
            name="neutered"
            options={[
              { value: 'no', label: 'No' },
              { value: 'yes', label: 'Yes' },
            ]}
            register={form.register}
            error={form.formState.errors.neutered?.message}
          />

          <DatePicker
            label="Date of Birth*"
            name="dateOfBirth"
            register={form.register}
            error={form.formState.errors.dateOfBirth?.message}
          />

          <TextInput
            label="Breed"
            name="breed"
            placeholder="European"
            register={form.register}
            error={form.formState.errors.breed?.message}
          />

          <TextInput
            label="Picture"
            name="picture"
            placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F20787%2Fpexels-photo.jpg%3Fcs%3Dsrgb%26dl%3Danimal-cat-adorable-20787.jpg%26fm%3Djpg&f=1&nofb=1&ipt=4d8a50d5b1dba3e542085b753af676db95035adc6fc94508a7d81bbd730bd989&ipo=images"
            register={form.register}
            error={form.formState.errors.picture?.message}
          />
        </div>
        <Button className="w-full lg:block lg:ms-auto lg:w-auto" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
