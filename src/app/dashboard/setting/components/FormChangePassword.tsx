"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "@/components/FormInput";
import { ValidationSchema } from "../change-password/validationSchema";

interface FormChangePassword {
  password: string;
}

interface FormChangePasswordProps {
  initialValues: Partial<FormChangePassword>;
}

const FormChangePassword: FC<FormChangePasswordProps> = ({ initialValues }) => {
  const form = useForm<z.infer<typeof ValidationSchema>>({
    mode: "all",
    resolver: zodResolver(ValidationSchema),
    defaultValues: initialValues,
  });

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3"> */}

      <FormInput
        name="password"
        type="password"
        label="Password"
        placeholder="Your Old Password"
        form={form}
      />
      <FormInput
        name="newPassword"
        type="password"
        label="New Password"
        placeholder="Your New Password"
        form={form}
      />
      <FormInput
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Comfirm Password"
        form={form}
      />
    </Form>
  );
};

export default FormChangePassword;
