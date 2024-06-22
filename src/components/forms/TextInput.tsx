import { Input } from '@/components/ui/input';
import {
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface TextInputProps {
  label: string;
  name: string;
  placeholder: string;
  register: any;
  error?: string;
}

export const TextInput = ({
  label,
  name,
  placeholder,
  register,
  error,
}: TextInputProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input placeholder={placeholder} {...register(name)} />
      </FormControl>
      {error && <FormMessage className="text-danger">{error}</FormMessage>}
    </FormItem>
  );
};
