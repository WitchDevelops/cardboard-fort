import { Input } from '@/components/ui/input';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import {
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface TextInputProps<TFieldValues extends FieldValues> {
  label: string;
  name: keyof TFieldValues;
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  error?: string;
}

export const TextInput = <TFieldValues extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  error,
}: TextInputProps<TFieldValues>) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input placeholder={placeholder} {...register} />
      </FormControl>
      {error && <FormMessage className="text-danger">{error}</FormMessage>}
    </FormItem>
  );
};
