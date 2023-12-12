import { create } from 'zustand';

export const useOrganizationStore = create((set) => ({
  currentOrganization: { organization: null, users: [] },
  setCurrentOrganization: (currentOrganization) => set({ currentOrganization }),
}));