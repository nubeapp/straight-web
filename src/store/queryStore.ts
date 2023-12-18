import { create } from 'zustand';

interface QueryStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useQueryStore = create<QueryStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));