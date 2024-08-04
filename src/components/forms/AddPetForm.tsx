import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addPet } from '@/data/pets/addPet';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { TextInput } from '@/components/forms/TextInput';
import { SelectInput } from '@/components/forms/SelectInput';

const dateRegex =
  /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

const FormSchema = z.object({
  pet_name: z
    .string()
    .min(2, { message: 'Pet name must be at least 2 characters long.' })
    .max(50, { message: 'Pet name cannot be longer than 50 characters.' }),
  species: z.string(),
  date_of_birth: z
    .string()
    .regex(dateRegex, { message: 'Please use the format YYYY-MM-DD.' }),
  breed: z.string(),
  picture: z.string(),
  sex: z.enum(['male', 'female']),
  neutered: z.enum(['yes', 'no']),
});

interface AddPetFormProps {
  onSuccess: () => void;
}

export const mapFormDataToPetProps = (data: z.infer<typeof FormSchema>) => ({
  petName: data.pet_name,
  dateOfBirth: data.date_of_birth,
  breed: data.breed,
  img: data.picture,
  sex: data.sex,
  neutered: data.neutered,
  species: data.species,
});

export const AddPetForm: React.FC<AddPetFormProps> = ({ onSuccess }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const petProps = mapFormDataToPetProps(data);
      const success = await addPet(petProps);
      if (success) {
        toast({
          title: 'Pet added successfully!',
          className: 'bg-white',
        });
        onSuccess();
      }
    } catch (error) {
      console.error('An error occurred while adding the pet:', error);
      toast({
        title: 'Error adding pet.',
        className: 'bg-danger',
      });
    }
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 "
      >
        <div className="lg:grid lg:grid-cols-2 gap-4">
          <TextInput
            label="Pet Name*"
            name="pet_name"
            placeholder="Kitty Cat"
            register={form.register('pet_name')}
            error={form.formState.errors.pet_name?.message}
          />
          <SelectInput
            label="Species*"
            name="species"
            options={[
              { value: 'Cat', label: 'Cat' },
              { value: 'Dog', label: 'Dog' },
              { value: 'Other', label: 'Other...' },
            ]}
            register={form.register('species')}
            error={form.formState.errors.species?.message}
          />
          <SelectInput
            label="Sex"
            name="sex"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            register={form.register('sex')}
            error={form.formState.errors.sex?.message}
          />
          <SelectInput
            label="Neutered"
            name="neutered"
            options={[
              { value: 'no', label: 'No' },
              { value: 'yes', label: 'Yes' },
            ]}
            register={form.register('neutered')}
            error={form.formState.errors.neutered?.message}
          />
          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="YYYY-MM-DD" {...field} />
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <TextInput
            label="Breed"
            name="breed"
            placeholder="European"
            register={form.register('breed')}
            error={form.formState.errors.breed?.message}
          />
          <TextInput
            label="Picture"
            name="picture"
            placeholder="https://example.com/picture.jpg"
            register={form.register('picture')}
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
