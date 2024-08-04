import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface SelectInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: { value: string; label: string }[];
  register: UseFormRegister<T>;
  error?: string;
}

export const SelectInput = <T extends FieldValues>({
  label,
  name,
  options,
  register,
  error,
}: SelectInputProps<T>) => {
  const onChange = (value: string) => {
    register(name).onChange({ target: { value } });
  };
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={onChange}>
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
