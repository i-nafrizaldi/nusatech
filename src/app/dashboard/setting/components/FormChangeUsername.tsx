"use client";

import FormInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ValidationSchema } from "../change-username/validationSchema";

interface FormEditUser {
  userName: string;
  newUsername: string;
  password: string;
}

interface FormEditUserProps {
  isLoading: boolean;
  onSubmit: any;
  initialValues: Partial<FormEditUser>;
}

const FormChangeUsername: FC<FormEditUserProps> = ({ initialValues }) => {
  const form = useForm<z.infer<typeof ValidationSchema>>({
    mode: "all",
    resolver: zodResolver(ValidationSchema),
    defaultValues: initialValues,
  });

  return (
    <Form {...form}>
      <FormInput
        name="userName"
        type="text"
        label="Old Username"
        placeholder="Your Old Usename"
        form={form}
      />

      <FormInput
        name="newUsername"
        type="text"
        label="New Username"
        placeholder="Your New Username"
        form={form}
      />

      <FormInput
        name="password"
        type="password"
        label="Password"
        placeholder="Your Password"
        form={form}
      />
    </Form>
  );
};

export default FormChangeUsername;
