import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import type { Control } from "react-hook-form";

type CustomFormInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  inputClassName?: string;
  formLabelClassName?: string;
};

const CustomFormInput: React.FC<
  CustomFormInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ name, label, control, inputClassName, formLabelClassName, ...rest }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel
            className={cn("text-black text-xs font-medium", formLabelClassName)}
          >
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className={cn(
                "border border-black bg-[#FFFFFF38] h-[52px] py-3.5 px-4 text-black placeholder:text-gray-400 text-sm focus-visible:ring-0",
                inputClassName
              )}
              {...field}
              {...rest}
            />
          </FormControl>
          <FormMessage className="text-sm" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormInput;
