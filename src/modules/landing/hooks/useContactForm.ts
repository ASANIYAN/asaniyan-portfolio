import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";
import { contactSchema, type ContactFormType } from "../schema/contactSchema";

type UseContactFormReturn = {
  form: ReturnType<typeof useForm<ContactFormType>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutation: UseMutationResult<any, Error, ContactFormType, unknown>;
};

export const submitBrevoContact = async (data: ContactFormType) => {
  const payload = {
    email: data.email,
    attributes: {
      FULLNAME: data.name,
      MESSAGE: data.message,
    },
    listIds: [3],
    updateEnabled: true,
  };

  const response = await axios.post(
    "https://api.brevo.com/v3/contacts",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        "api-key": import.meta.env.VITE_BREVO_API_KEY,
      },
    }
  );

  return response.data;
};

export const useContactForm = (): UseContactFormReturn => {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { reset } = form;

  const mutation = useMutation({
    mutationFn: (data: ContactFormType) => submitBrevoContact(data),
    onSuccess: () => {
      toast.success("Submission Successful");
      reset();
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const response = err.response?.data?.message;
        toast.error(response || "Error Occurred");
      } else {
        // Generic error handling
        toast.error(err.message || "Error Occurred");
      }
    },
  });

  return {
    form,
    mutation,
  };
};
