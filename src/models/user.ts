import type { Organization } from "./organization";

export interface User {
    id?: string;
    name: string;
    surname: string;
    email?: string;
    organization?: Organization;
    roles?: string[];
}