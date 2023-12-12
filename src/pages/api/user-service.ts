import type { User } from "../../models/user";

export async function getUsersByOrganizationId({ id }: { id: number }) {
    try {
        const apiUrl = `http://localhost:8000/api/users/organization/${id}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error fetching data from the API: ${response.status}`);
        }

        const users: User[] = await response.json();

        return users
    } catch (error) {
        console.error('Error in getUsersByOrganizationId:', error);
        throw error;
    }
}
