import { z } from "zod";

export const loginSchema = z.object({
    email: z.string()
        .min(3, 'Email is required')
        .email('Invalid email'),
    password: z.string('Passowrd incorrect')
        .min(8, 'Password is required')
})