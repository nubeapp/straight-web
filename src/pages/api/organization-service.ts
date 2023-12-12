import type { Organization } from "../../models/organization";

export async function getOrganizations() {
    try {
        const apiUrl = 'http://localhost:8000/api/organizations';
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error fetching data from the API: ${response.status}`);
        }

        const organizations: Organization[] = await response.json();

        return organizations
    } catch (error) {
        console.error('Error in getOrganizations:', error);
        throw error;
    }
}
