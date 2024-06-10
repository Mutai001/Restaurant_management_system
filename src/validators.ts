import {z} from 'zod';
export const registerUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3),
    role: z.string().optional()
});

 export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
 });