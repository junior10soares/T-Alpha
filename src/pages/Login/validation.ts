import { z } from 'zod';

export const loginSchema = z.object({
    cpfOrCnpj: z.string().min(11, "CPF deve ter pelo menos 11 dígitos").max(14, "CNPJ deve ter no máximo 14 dígitos"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
