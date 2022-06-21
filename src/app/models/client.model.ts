import { Address } from "./address.model"

export interface Client {
    id?: String
    nome?: String
    email?: String
    telefone?: number
    cpf?: number
    cnpj?: number
    addressEntity?: Address
}