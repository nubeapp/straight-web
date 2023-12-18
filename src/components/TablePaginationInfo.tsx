import { useOrganizationStore } from '../store/organizationStore';
import { useQueryStore } from '../store/queryStore';

export function TablePaginationInfo() {
  const currentOrganization = useOrganizationStore((state) => state.currentOrganization)
  const isLoading = useOrganizationStore((state) => state.isLoading)
  const searchQuery = useQueryStore((state) => state.searchQuery)

  const filteredUsers = currentOrganization.users.filter((user) =>
    `${user.name} ${user.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading || !currentOrganization.organization) {
    return (
      <div role="status" className="rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
        <div className="h-4 bg-gray-300 rounded-md dark:bg-gray-600 w-32"></div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
      Showing{' '}
      <span className="font-semibold text-gray-900 dark:text-white">
        {filteredUsers.length > 10 ? 1 - 10 : filteredUsers.length}
      </span>{' '}
      of{' '}
      <span className="font-semibold text-gray-900 dark:text-white">
        {currentOrganization.users.length}
      </span>
    </div>
  );
};
