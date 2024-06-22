'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import { TextInput } from '@/components/forms/TextInput';

//date has to be in the YYYY-MM-DD format so that it's compatible with the format in the database
const dateRegex =
  /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Pet name must be at least 2 characters long.',
    })
    .max(50, {
      message: 'Pet name cannot be longer than 50 characters.',
    }),
  species: z.string(),
  dateOfBirth: z.string().regex(dateRegex, {
    message: 'Please use the format YYYY-MM-DD.',
  }),
  breed: z.string(),
  picture: z.string(),
  sex: z.enum(['male', 'female']),
  neutered: z.enum(['yes', 'no']),
});

export const AddPetForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const success = await addPet(data);
      if (success) {
        console.log(
          'Pet added! Empty cache and refresh to reflect the change.'
        );
        toast({
          title: 'Pet added successfully!',
          className: 'bg-white',
        });

        //TODO: figure out how to update the list of pets
        // database call is in the <PetGrid/> component, maybe useEffect there?
      }
    } catch (error) {
      console.error('An error occurred while adding the pet:', error);
      toast({
        title: 'Error adding pet.',
        className: 'bg-danger',
      });
    }
  }

  return (
    <ScrollArea className="h-[80vh] w-[100%]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <TextInput
            label="Pet Name*"
            name="name"
            placeholder="Kitty Cat"
            register={form.register}
            error={form.formState.errors.name?.message}
          />
          {/* TODO: select fields are not being registered, despite having input selected they do not register (error pops up) */}
          <FormField
            control={form.control}
            name="species"
            render={() => (
              <FormItem>
                <FormLabel>Species*</FormLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select species" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Cat">Cat</SelectItem>
                    <SelectItem value="Dog">Dog</SelectItem>
                    <SelectItem value="Other">Other...</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={() => (
              <FormItem>
                <FormLabel>Sex</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="neutered"
            render={() => (
              <FormItem>
                <FormLabel>Neutered</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
          {/* TODO: refactor to use a date picker */}
          <FormField
            control={form.control}
            name="dateOfBirth"
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
            register={form.register}
            error={form.formState.errors.name?.message}
          />

          <TextInput
            label="Picture"
            name="picture"
            placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F20787%2Fpexels-photo.jpg%3Fcs%3Dsrgb%26dl%3Danimal-cat-adorable-20787.jpg%26fm%3Djpg&f=1&nofb=1&ipt=4d8a50d5b1dba3e542085b753af676db95035adc6fc94508a7d81bbd730bd989&ipo=images"
            register={form.register}
            error={form.formState.errors.name?.message}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </ScrollArea>
  );
};
