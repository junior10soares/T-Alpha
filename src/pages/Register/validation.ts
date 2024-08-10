import { z } from 'zod';

export const registerSchemaRegister = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    cpfOrCnpj: z.string().min(11, "CPF deve ter pelo menos 11 dígitos").max(14, "CNPJ deve ter no máximo 14 dígitos"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(11, "Telefone deve ter pelo menos 11 dígitos"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type RegisterFormData = z.infer<typeof registerSchemaRegister>;
