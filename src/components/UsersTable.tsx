import type { User } from '../models/user';
import { RoleTag } from './RoleTag.tsx';
import { StatusTag } from './StatusTag.tsx';
import { IconButton } from './IconButton.tsx';
import { useOrganizationStore } from '../store/organizationStore.js';

// export function UsersTable({ users }: { users: User[] }) {
export function UsersTable() {

    const currentOrganization = useOrganizationStore(state => state.currentOrganization);
    const isLoading = useOrganizationStore(state => state.isLoading);
    const users = currentOrganization.users;

    if (isLoading || !currentOrganization.organization) {
        return (

            <div role="status" className="p-4 space-y-4 divide-y divide-gray-200 rounded animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>

        )
    }

    if (!users || users.length === 0) {
        return (
            <div className="flex flex-row h-full justify-center items-start mt-10 text-zinc-700 italic text-xl">No users found</div>
        )
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Roles
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last login
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: User) => (
                            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name} {user.surname}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.email}
                                </th>
                                <td className="px-6 py-4">
                                    <RoleTag
                                        label='Software'
                                        classname='text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    Yesterday
                                </td>
                                <td className="px-6 py-4">
                                    <StatusTag isOnline={true} />
                                </td>
                                <td className="flex flex-row justify-center">
                                    <a href="#" className="font-medium dark:text-blue-500">
                                        <IconButton type="Edit" classname='border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700' />
                                    </a>
                                    <a href="#" className="font-medium dark:text-blue-500">
                                        <IconButton type="Delete" classname='border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700' />
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}