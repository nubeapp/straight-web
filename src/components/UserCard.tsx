import type { User } from "../models/user";

export function UserCard({ user }: { user: User }) {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex flex-col justify-center items-end">
                <div className="text-zinc-800 text-md font-bold">
                    {user.name} {user.surname}
                </div>
                <div className="text-zinc-500 text-sm">
                    {user.roles?.toString()}
                </div>
            </div>
            <div className="relative">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-200 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-blue-900 dark:text-gray-300">AL</span>
                </div>
                <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>

        </div>
    );
}