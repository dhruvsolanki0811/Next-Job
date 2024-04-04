import * as z from "zod";
export const organizationSchema = z.object({
    email: z
      .string({ required_error: "Email is must" })
      .email({ message: "Invalid email format" }),
    password: z
      .string({ required_error: "Password is must" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    username: z
      .string({ required_error: "Username is must" })
      .min(4, { message: "Username must be at least 4 characters long" })
      .max(20, { message: "Username must be at most 20 characters long" }),
    name: z
      .string({ required_error: "name is must" })
      .min(2, { message: "Name must be at least 2 characters long" }),
    location: z
      .string({ required_error: "Location is must" })
      .min(6, { message: "Location is must" }),
    website: z.string().url({ message: "Invalid URL format" }).optional(),
    overview: z
      .string({ required_error: "Overview is must" })
      .min(1, { message: "Overview is required" }),
    foundedAt: z
      .string({ required_error: "Founded is must" })
      .min(1, { message: "Founded date is required" }),
  });
  
export const jobSeekerSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email format" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    username: z
      .string({ required_error: "Username is required" })
      .min(4, { message: "Username must be at least 4 characters long" })
      .max(20, { message: "Username must be at most 20 characters long" }),
    firstName: z
      .string({ required_error: "First name is required" })
      .min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(2, { message: "Last name must be at least 2 characters long" }),
    description: z
      .string({ required_error: "Description is required" })
      .min(10, { message: "Description must be at least 10 characters long" }),
    phoneNumber: z
      .string({ required_error: "Phone number is required" })
      .min(10, { message: "Phone number must be at least 10 characters long" }),
  });
  