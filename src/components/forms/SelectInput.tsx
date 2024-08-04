import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form';

interface SelectInputProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
  error?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => {
  const { setValue } = useFormContext();

  const handleChange = (value: string) => {
    setValue(name, value);
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <FormMessage className="text-danger">{error}</FormMessage>}
    </FormItem>
  );
};
