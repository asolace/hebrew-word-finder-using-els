import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  helperText: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  placeholder,
  helperText,
  value,
  onChange,
}: Props) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input value={value} placeholder={placeholder} onChange={onChange} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
