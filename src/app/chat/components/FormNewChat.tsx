"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "@/components/FormInput";
import { ValidationSchema } from "../new-chat/validationSchema";

interface FormNewChat {
  name: string;
}

interface IFormNewChat {
  initialValues: Partial<FormNewChat>;
}

const FormNewChat: FC<IFormNewChat> = ({ initialValues }) => {
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
        label="Input Username"
        placeholder="Input Username"
        form={form}
      />
    </Form>
  );
};

export default FormNewChat;
