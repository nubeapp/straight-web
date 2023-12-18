import { useOrganizationStore } from '../store/organizationStore.js';


export const Search = () => (
  <svg
    role="img"
    height="18"
    width="18"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="#D1D1D1"
  ><path
    d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
  ></path></svg>
)

export function UserSearchInput() {

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
        value=""
      />
    </div>
  )
}

