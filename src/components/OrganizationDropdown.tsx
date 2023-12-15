import { useState, useEffect } from 'react';
import type { Organization } from '../models/organization';
import { useOrganizationStore } from '../store/organizationStore';
import { getUsersByOrganizationId } from '../pages/api/user-service';

export function OrganizationDropdown({ organizations }: { organizations: Organization[] }) {
  const [open, setOpen] = useState(false);
  const currentOrganization = useOrganizationStore(state => state.currentOrganization);
  const setCurrentOrganization = useOrganizationStore(state => state.setCurrentOrganization);
  const setLoading = useOrganizationStore(state => state.setLoading);

  useEffect(() => {
    const fetchData = async () => {
      if (currentOrganization.organization === null) {
        const users = await getUsersByOrganizationId({ id: organizations[0].id });
        const organization = organizations[0]
        console.log(organization);
        setCurrentOrganization(organization, users);
      }
    };

    // Delay execution by 2 seconds
    const delay = 2000; // 2000 milliseconds = 2 seconds
    const timeoutId = setTimeout(() => {
      fetchData();
    }, delay);

    // Clean up the timeout to avoid unnecessary side effects
    return () => clearTimeout(timeoutId);
  }, [currentOrganization, setCurrentOrganization, organizations]);


  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = async (selectedOption: Organization) => {
    setOpen(false);
    setLoading(true);
    try {
      const selectedOrganization = organizations.find((organization: Organization) => organization.id === selectedOption.id);
      const users = await getUsersByOrganizationId({ id: selectedOption.id });
      setCurrentOrganization(selectedOrganization as Organization, users);
    } finally {
      setLoading(false);
    }
  };

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