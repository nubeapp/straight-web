import { useState } from 'react';
import { AddUserDialog } from './AddUserDialog';
import { useOrganizationStore } from '../store/organizationStore';

export const Add = () => (
    <svg className="w-[12px] h-[12px] text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 1v16M1 9h16" />
    </svg>
)

export function AddUserButton() {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const currentOrganization = useOrganizationStore((state) => state.currentOrganization);
    const isLoading = useOrganizationStore((state) => state.isLoading);

    const showModal = () => {
        setDialogVisible(true);
    };

    const hideModal = () => {
        setDialogVisible(false);
    };

    if (isLoading || !currentOrganization.organization) {
        return (
            <div role="status" className="rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
                <div className="h-10 bg-gray-300 rounded-md dark:bg-gray-600 w-28"></div>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <div>
            <button
                onClick={showModal}
                className="flex flex-row gap-2 items-center justify-center py-2 px-4 font-small dark:text-blue-500 max-w-[200px] min-h-[40px] h-full block bg-blue-600 text-white hover:bg-blue-700 text-sm rounded-md"
            >
                <Add />
                <div>Add User</div>
            </button>

            <AddUserDialog visible={isDialogVisible} onHide={hideModal} />
        </div>
    );
};
