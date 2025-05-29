import { Form } from "@/components/ui/form";
import { useContactForm } from "./hooks/useContactForm";
import type { ContactFormType } from "./schema/contactSchema";
import CustomFormInput from "@/components/CustomFormInput";
import CustomFormTextArea from "@/components/CustomFormTextArea";
import { Button } from "@/components/ui/button";

const Talk = () => {
  const { form, mutation } = useContactForm();

  const onSubmit = (data: ContactFormType) => {
    mutation.mutate(data);
  };

  return (
    <section
      id="contacts"
      className="border-t border-t-black pt-14 md:pt-20 mt-16 md:mt-[88px]"
    >
      <div className="text-black">
        {/* <p className="text-center text-xl"> Have an idea? </p> */}
        <h4 className="font-light text-center text-[80px] sm:text-[90px] md:text-[160px] lg:text-[220px] leading-[88px] md:leading-[184px]">
          Let's talk!
        </h4>
      </div>

      <section className="mt-12">
        <Form {...form}>
          <form
            className="w-full max-w-[768px] mx-auto px-5 space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormInput
              name="name"
              control={form.control}
              placeholder="Name"
            />

            <CustomFormInput
              name="email"
              control={form.control}
              placeholder="Email"
            />

            <CustomFormTextArea
              name="message"
              control={form.control}
              teaxtareaClassName="min-h-[262px] resize-none"
              placeholder="Message"
            />

            <Button
              disabled={mutation.isPending}
              className="flex justify-center items-center bg-black h-[52px] w-full py-2 px-4 rounded-none text-white font-semibold text-lg"
            >
              SEND
            </Button>
          </form>
        </Form>
      </section>
    </section>
  );
};

export default Talk;
