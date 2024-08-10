import { z } from 'zod';

export const newProductSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatório'),
    price: z.string().min(1, 'Preço é obrigatório'),
    stock: z.string().min(1, 'Quantidade é obrigatório')
});

export type NewProductFormData = z.infer<typeof newProductSchema>;
