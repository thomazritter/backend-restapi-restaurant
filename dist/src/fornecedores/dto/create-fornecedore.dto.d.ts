export declare class CreateFornecedorDto {
    nome_fornecedor: string;
    telefone: string;
    email: string;
    endereco: string;
    produtos?: {
        produto_id: number;
    }[];
}
