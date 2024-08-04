import { Input } from '@/components/ui/input';
import { UseFormRegisterReturn } from 'react-hook-form';
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
  register: UseFormRegisterReturn;
  error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  register,
  error,
}) => {
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
