import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NewProductFormData, newProductSchema } from "../../pages/Home/validation";
import { PropsProduct } from "../../@types/product";

import { Container } from "./styles";

interface ProductFormProps {
    onSubmit: (data: NewProductFormData) => void;
    editingProduct: PropsProduct | null;
    reset: () => void;
    formState: NewProductFormData;
    setFormState: React.Dispatch<React.SetStateAction<NewProductFormData>>;
}

export function ProductForm({ onSubmit, editingProduct, reset, formState }: ProductFormProps) {
    const { register, handleSubmit, formState: { errors }, reset: formReset } = useForm<NewProductFormData>({
        resolver: zodResolver(newProductSchema),
        defaultValues: formState
    });

    const onFormSubmit = (data: NewProductFormData) => {
        onSubmit(data);
        reset();
    };

    useEffect(() => {
        if (editingProduct) {
            formReset({
                name: editingProduct.name,
                description: editingProduct.description,
                price: editingProduct.price.toString(),
                stock: editingProduct.stock.toString()
            });
        } else {
            formReset(formState);
        }
    }, [editingProduct, formReset, formState]);

    return (
        <Container>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h1>{editingProduct ? 'Editar Produto' : 'Novo Produto'}</h1>
                <Input
                    type='text'
                    placeholder='Digite nome do produto'
                    {...register('name')}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
                <Input
                    type='text'
                    placeholder='Descrição do produto'
                    {...register('description')}
                />
                {errors.description && <p className="error-message">{errors.description.message}</p>}
                <div>
                    <Input
                        type='number'
                        placeholder='R$ 1,00'
                        {...register('price')}
                    />
                    <Input
                        type='number'
                        placeholder='Quantidade'
                        {...register('stock')}
                    />
                </div>
                {(errors.price || errors.stock) && (
                    <p className="error-message">
                        {errors.price ? errors.price.message : errors.stock ? errors.stock.message : 'Erro desconhecido'}
                    </p>
                )}
                <Button type="submit" title={editingProduct ? "Atualizar" : "Criar"} variant="default" />
            </form>
        </Container>
    );
}
