'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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

import { toast } from '@/components/ui/use-toast';

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
});

export const AddPetForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: 'Kitty',
      species: 'Cat',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Name*</FormLabel>
              <FormControl>
                <Input placeholder="Kitty" {...field} />
              </FormControl>
              <FormMessage className="text-danger" />
            </FormItem>
          )}
        />
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
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
