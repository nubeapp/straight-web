import type { Organization } from "./organization";

export interface User {
    id: string;
    name: string;
    surname: string;
    email: number;
    organization: Organization;
}