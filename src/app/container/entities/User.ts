import { Address } from "./Address";

export interface User {
    id?: string;
    email: string;
    password: string;
    repeat: string;
    address: Address;
}
