"use client";

import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ValidationSchema } from "../edit-profile/validationSchema";

interface FormEditUser {
  name: string;
  email: string;
}

interface FormEditUserProps {
  initialValues: Partial<FormEditUser>;
}

const FormEditProfile: FC<FormEditUserProps> = ({ initialValues }) => {
  const form = useForm<z.infer<typeof ValidationSchema>>({
    mode: "all",
    resolver: zodResolver(ValidationSchema),
    defaultValues: initialValues,
  });

  return (
    <Form {...form}>
      <FormInput
        name="name"
        type="text"
        label="Full Name"
        placeholder="Your Full Name"
        form={form}
      />

      <FormInput
        name="email"
        type="email"
        label="Email"
        placeholder="Your Email"
        form={form}
      />
    </Form>
  );
};

export default FormEditProfile;
