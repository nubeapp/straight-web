export function StatusTag({ isOnline }: { isOnline: boolean }) {
    return (
        <div className="flex flex-row items-center justify-center rounded-md border border-green-400 bg-green-200">
            <span className="flex w-2 h-2 mx-1 bg-green-400 rounded-full"></span>
            <span className="text-green-400">Online</span>
        </div>
    )
}