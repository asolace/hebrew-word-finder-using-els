import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Textarea from "@mui/joy/Textarea";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  helperText: string;
  value: string;
  minRows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaField({
  label,
  placeholder,
  helperText,
  value,
  minRows,
  onChange,
}: Props) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        minRows={minRows}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
