import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { NewProductFormData } from "./validation";
import { ProductSearch } from "../../components/ProductSearch";
import { ProductForm } from "../../components/ProductForm";
import { ProductList } from "../../components/ProductList";
import { PropsProduct } from "../../@types/product";

import { AllProduct, DeletProduct, NewProduct, UpdateProduct, FindProduct } from "../../lib/user";
import { Container } from "./styles";

export function Home() {
    const [products, setProducts] = useState<PropsProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<PropsProduct[]>([]);
    const [editingProduct, setEditingProduct] = useState<PropsProduct | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [formState, setFormState] = useState<NewProductFormData>({
        name: '',
        description: '',
        price: '',
        stock: ''
    });

    const fetchProducts = async () => {
        try {
            const response = await AllProduct();
            setProducts(response.data.products);
            setFilteredProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Erro ao carregar produtos.');
        }
    };

    const filterProductsById = async (id: string) => {
        try {
            const response = await FindProduct(id);
            setFilteredProducts([response.data.product]);
            toast.success('Produto encontrado com sucesso!');
        } catch (error) {
            console.error('Error finding product:', error);
            toast.error('Produto não encontrado.');
            setFilteredProducts(products);
        }
    };

    const handleSubmit = async (data: NewProductFormData) => {
        try {
            const price = Number(data.price);
            const stock = Number(data.stock);
            if (editingProduct) {
                await UpdateProduct(
                    data.name,
                    data.description,
                    price,
                    stock,
                    editingProduct.id
                );
                toast.success('Produto atualizado com sucesso!');
            } else {
                await NewProduct(
                    data.name,
                    data.description,
                    price,
                    stock
                );
                toast.success('Produto criado com sucesso!');
                setFormState({
                    name: '',
                    description: '',
                    price: '',
                    stock: ''
                });
            }
            setEditingProduct(null);
            fetchProducts();
        } catch (error: any) {
            console.error('Error saving product:', error);
            const errorMessage = error.response?.data?.message || 'Erro ao salvar o produto.';
            toast.error(errorMessage);
        }
    };

    const handleEdit = (product: PropsProduct) => {
        setEditingProduct(product);
        setFormState({
            name: product.name,
            description: product.description,
            price: product.price.toString(),
            stock: product.stock.toString()
        });
    };

    const handleDelete = async (id: string) => {
        try {
            await DeletProduct(id);
            toast.success('Produto excluído com sucesso!');
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Erro ao excluir o produto.');
        }
    };

    const handleSearchClick = () => {
        filterProductsById(searchTerm);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container>
            <Header />

            <ProductSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearchClick={handleSearchClick}
            />
            <ProductForm
                onSubmit={handleSubmit}
                editingProduct={editingProduct}
                reset={() => {
                    setEditingProduct(null);
                    setFormState({
                        name: '',
                        description: '',
                        price: '',
                        stock: ''
                    });
                }}
                formState={formState}
                setFormState={setFormState}
            />
            <ProductList
                products={filteredProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Container>
    );
}
