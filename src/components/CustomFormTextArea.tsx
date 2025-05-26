import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import type { Control } from "react-hook-form";

type CustomFormTextAreaProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  teaxtareaClassName?: string;
  formLabelClassName?: string;
};

const CustomFormTextArea: React.FC<
  CustomFormTextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  name,
  label,
  control,
  teaxtareaClassName,
  formLabelClassName,
  ...rest
}) => {
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
            <Textarea
              className={cn(
                "border border-black bg-[#FFFFFF38] h-[52px] py-3.5 px-4 text-black placeholder:text-gray-400 text-sm focus-visible:ring-0",
                teaxtareaClassName
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

export default CustomFormTextArea;
