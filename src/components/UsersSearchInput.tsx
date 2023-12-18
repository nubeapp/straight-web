import { useState } from 'react';
import { Search } from '../icons/Icons';
import { useQueryStore } from '../store/queryStore.ts';
import { useOrganizationStore } from '../store/organizationStore.ts';

export function UserSearchInput() {

  const searchQuery = useQueryStore(state => state.searchQuery);
  const setSearchQuery = useQueryStore(state => state.setSearchQuery);

  const currentOrganization = useOrganizationStore(state => state.currentOrganization);
  const isLoading = useOrganizationStore(state => state.isLoading);

  if (isLoading || !currentOrganization.organization) {
    return (
      <div role="status" className="rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
        <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-600 w-48"></div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search />
      </div>
      <input
        type="text"
        id="search"
        className="block w-full max-w-[200px] min-h-[40px] pl-11 text-sm text-zinc-700 border-[1.5px] border-zinc-400/30 rounded-lg bg-transparent focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Quick search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

