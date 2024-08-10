import { Edit2, Trash } from "lucide-react";

import { IconButton, ProductItem, ProductListContainer } from "./styles";

import { PropsProduct } from "../../@types/product";

interface ProductListProps {
    products: PropsProduct[];
    onEdit: (product: PropsProduct) => void;
    onDelete: (id: string) => void;
}

export function ProductList({ products, onEdit, onDelete }: ProductListProps) {

    return (
        <ProductListContainer>
            {products.map(product => (
                <ProductItem key={product.id}>
                    <h2>{product.id}</h2>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <footer>
                        <p>R$ {product.price.toFixed(2)}</p>
                        <p>Quantidade: {product.stock}</p>
                    </footer>
                    <span>
                        <IconButton onClick={() => onEdit(product)}>
                            <Edit2 color="blue" size={20} />
                        </IconButton>
                        <IconButton onClick={() => onDelete(product.id)}>
                            <Trash color="blue" size={20} />
                        </IconButton>
                    </span>
                </ProductItem>
            ))}
        </ProductListContainer>
    );
}
