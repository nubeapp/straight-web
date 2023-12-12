import * as React from 'react';
import { useState, useEffect } from 'react';
import type { Organization } from '../models/organization';
import { useOrganizationStore } from '../store/organizationStore';
import type { User } from '../models/user';
import { getUsersByOrganizationId } from '../pages/api/user-service';

export function OrganizationDropdown({ organizations }: { organizations: Organization[] }) {
  const [open, setOpen] = useState(false);
  const { currentOrganization, setCurrentOrganization } = useOrganizationStore(state => state);

  useEffect(() => {
    const fetchData = async () => {
      if (currentOrganization.organization === null) {
        const users = await getUsersByOrganizationId({ id: organizations[0].id });
        const org = organizations[0]
        setCurrentOrganization(org, users);
      }
    };

    fetchData();
  }, [currentOrganization.organization, organizations, setCurrentOrganization]);


  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = async (selectedOption: Organization) => {
    setOpen(false);
    const selectedOrganization = organizations.find((organization: Organization) => organization.id === selectedOption.id);
    // setCurrentOrganization(selectedOrganization!);
    const users = await getUsersByOrganizationId({ id: selectedOption.id });
    setCurrentOrganization(selectedOrganization, users);
  };

  return (
    <div className="relative z-50">
      <button onClick={handleOpen} className="flex flex-row items-center justify-end text-zinc-700 text-xl py-2 rounded-lg mb-2 hover:text-zinc-900 hover:scale-[1.02] transition duration-200">
        <p>{currentOrganization.name}</p>
        <svg className={`transition-all duration-300 w-2.5 h-2.5 ms-3 ${open ? "" : "-rotate-90"}`} aria-hidden="true" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {open ?
        (
          <ul className="absolute w-[250px] max-h-[200px] h-auto overflow-y-scroll list-none bg-zinc-50 rounded-lg p-2 border border-zinc-100 shadow-xl">
            {
              organizations.map((organization: Organization) => (
                <button onClick={() => handleMenu(organization)} key={organization.id} className={`w-full p-2 hover:scale-105 transition-all duration-200 hover:text-blue-700 hover:rounded-md text-md flex flex-row items-center justify-center hover:pointer ${currentOrganization.id == organization.id ? 'text-blue-700' : 'text-zinc-600'}`}>
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