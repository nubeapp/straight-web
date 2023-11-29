import type { User } from "../../models/user";

export async function getUsersByOrganizationId() {
    try {
        const apiUrl = 'http://localhost:8000/api/users/organization/1';
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error fetching data from the API: ${response.status}`);
        }

        const users: User[] = await response.json();

        return users
    } catch (error) {
        // Handle the error here
        console.error('Error in getUsersByOrganizationId:', error);
        throw error;
    }
}
