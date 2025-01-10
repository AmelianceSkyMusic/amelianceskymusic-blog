import { z } from 'zod';

export const LoginSchema = z.object({
	username: z.string().trim().toLowerCase().min(1, 'FIELD_CANNOT_BE_EMPTY'),
	password: z.string().trim().min(1, 'FIELD_CANNOT_BE_EMPTY'),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
