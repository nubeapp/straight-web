import { create } from 'zustand';
import type { Organization } from '../models/organization';
import type { User } from '../models/user';

interface OrganizationStore {
  currentOrganization: { organization: Organization | null, users: User[] };
  isLoading: boolean;
  setCurrentOrganization: (organization: Organization, users: User[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useOrganizationStore = create<OrganizationStore>((set) => ({
  currentOrganization: { organization: null, users: [] },
  isLoading: false,
  setCurrentOrganization: (organization: Organization, users: User[]) => set({ currentOrganization: { organization: organization, users: users } }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));