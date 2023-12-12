import type { User } from '../models/user';
import { RoleTag } from './RoleTag.tsx';
import { StatusTag } from './StatusTag.tsx';
import { IconButton } from './IconButton.tsx';
import { useOrganizationStore } from '../store/organizationStore.js';

// export function UsersTable({ users }: { users: User[] }) {
export function UsersTable() {

    const { currentOrganization } = useOrganizationStore(state => state);
    const users = currentOrganization.users;
    console.log(users);

    if (!currentOrganization.organization || !users) {
        // Handle the case when organization or users are not available yet
        return <div>Loading...</div>; // You can replace this with your loading indicator or message
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