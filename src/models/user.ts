import type { Organization } from "./organization";

export interface User {
    id: string;
    email: number;
    organization: Organization;
}