import { FormControl, InputLabel, MenuItem } from "@mui/material";
import {Select as SelectMui} from '@mui/material';
import { SelectInputProps } from "@mui/material/Select/SelectInput";

export interface SelectProps {
    label: string;
    options: {name: string, value: string| number}[];
    value: string | number;
    onChange?: SelectInputProps['onChange'];
}
export const SelectComponent = ({label,onChange,value, options}: SelectProps ) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="simple-select-label">{label}</InputLabel>
      <SelectMui
        labelId="=simple-select-label"
        id="=simple-select"
        value={value}
        label="Age"
        onChange={onChange}
      >
          { 
            options.map(i => {
                return(<MenuItem value={i.value}>{i.name}</MenuItem>);
            })
          }
        
      </SelectMui>
    </FormControl>
  );
};
