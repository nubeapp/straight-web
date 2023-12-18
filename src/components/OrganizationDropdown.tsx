import { useState, useEffect } from 'react';
import type { Organization } from '../models/organization';
import { useOrganizationStore } from '../store/organizationStore';
import { getUsersByOrganizationId } from '../pages/api/user-service';
import type { User } from '../models/user';

type CacheItem = {
  organization: Organization | undefined;
  users: User[] | null;
  timestamp: number;
};

const cache: Record<number, CacheItem> = {};

const CACHE_EXPIRATION_TIME = 5 * 60 * 1000;

export function OrganizationDropdown({ organizations }: { organizations: Organization[] }) {
  const [open, setOpen] = useState(false);
  const currentOrganization = useOrganizationStore(state => state.currentOrganization);
  const setCurrentOrganization = useOrganizationStore(state => state.setCurrentOrganization);
  const setLoading = useOrganizationStore(state => state.setLoading);
  const isLoading = useOrganizationStore(state => state.isLoading);

  useEffect(() => {
    const fetchData = async (organizationId: number) => {
      try {
        setLoading(true);

        // Check if data is in the cache and not expired
        if (cache[organizationId] && Date.now() - cache[organizationId].timestamp < CACHE_EXPIRATION_TIME) {
          const { organization, users } = cache[organizationId];
          setCurrentOrganization(organization!, users!);
        } else {
          // If not in the cache or expired, fetch data from the API
          const users = await getUsersByOrganizationId({ id: organizationId });
          const organization = organizations.find(org => org.id === organizationId);

          // Update the cache with new data and timestamp
          cache[organizationId] = { organization, users, timestamp: Date.now() };

          // Set the current organization
          setCurrentOrganization(organization!, users);
        }
      } finally {
        setLoading(false);
      }
    };

    // Fetch data for the current organization on component mount
    if (currentOrganization.organization === null && organizations.length > 0) {
      fetchData(organizations[0].id);
    }
  }, [currentOrganization, setCurrentOrganization, setLoading, organizations]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = async (selectedOption: Organization) => {
    setOpen(false);
    setLoading(true);

    try {
      const selectedOrganization = organizations.find(
        (organization: Organization) => organization.id === selectedOption.id
      );

      // Use the cache to get data for the selected organization
      if (cache[selectedOption.id] && Date.now() - cache[selectedOption.id].timestamp < CACHE_EXPIRATION_TIME) {
        const { organization, users } = cache[selectedOption.id];
        setCurrentOrganization(organization!, users!);
      } else {
        // If not in the cache or expired, fetch data from the API
        const users = await getUsersByOrganizationId({ id: selectedOption.id });

        // Update the cache with new data and timestamp
        cache[selectedOption.id] = { organization: selectedOrganization, users, timestamp: Date.now() };

        // Set the current organization
        setCurrentOrganization(selectedOrganization as Organization, users);
      }
    } finally {
      setLoading(false);
    }
  };

  if (isLoading || !currentOrganization.organization) {
    return (
      <div role="status" className="my-5 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
        <div className="flex items-center justify-center gap-6">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="relative z-50">
      <button onClick={handleOpen} className="flex flex-row items-center justify-end text-zinc-700 text-xl py-2 rounded-lg mb-2 hover:text-zinc-900 hover:scale-[1.02] transition duration-200">
        <p>{currentOrganization.organization?.name}</p>
        <svg className={`transition-all duration-300 w-2.5 h-2.5 ms-3 ${open ? "" : "-rotate-90"}`} aria-hidden="true" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {open ?
        (
          <ul className="absolute w-[250px] max-h-[200px] h-auto overflow-y-scroll list-none bg-zinc-50 rounded-lg p-2 border border-zinc-100 shadow-xl">
            {
              organizations.map((organization: Organization) => (
                <button onClick={() => handleMenu(organization)} key={organization.id} className={`w-full p-2 hover:scale-105 transition-all duration-200 hover:text-blue-700 hover:rounded-md text-md flex flex-row items-center justify-center hover:pointer ${currentOrganization.organization?.id == organization.id ? 'text-blue-700' : 'text-zinc-600'}`}>
                  <p>{organization.name}</p>
                </button>
              ))
            }
          </ul>
        )
        : null}
    </div>
  );
};