import z from "zod";

export const RegisterSchema = z.object({
  username: z.string().trim().min(3, "username is required"),
  email: z.string().trim().email().min(5, "email is required"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export const LoginSchema = z.object({
  email: z.string().trim().email().min(5, "email is required"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
