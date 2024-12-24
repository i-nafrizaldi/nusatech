import { z } from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;
export const ValidationSchema = z.object({
  name: z
    .string({
      required_error: "Full Name is Required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
});
