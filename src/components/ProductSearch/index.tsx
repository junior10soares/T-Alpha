import { Button } from "../Button";

import { ContainerInput, FormGroup, SearchIcon, SearchInput } from "./styles";

interface ProductSearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    onSearchClick: () => void;
}

export function ProductSearch({ searchTerm, setSearchTerm, onSearchClick }: ProductSearchProps) {
    return (
        <ContainerInput>
            <FormGroup>
                <SearchInput
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Procure por um produto por seu ID"
                />
                <SearchIcon onClick={onSearchClick} size={30} />
                <Button
                    type="button"
                    width="20%"
                    title="Procurar"
                    onClick={onSearchClick}
                    variant="default"
                />
            </FormGroup>
        </ContainerInput>
    );
}
