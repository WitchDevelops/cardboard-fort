import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface SelectInputProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  register: any;
  error?: string;
}

export const SelectInput = ({
  label,
  name,
  options,
  register,
  error,
}: SelectInputProps) => {
    const onChange = (value: string) => {
        register?.(name, { value, shouldValidate: true });
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
