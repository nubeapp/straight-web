
export const Edit = ({ className }: { className?: string }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" height="18" width="18" fill="currentColor" aria-label="fontSize medium"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
)

export const Delete = ({ className }: { className?: string }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" height="18" width="18" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
)

export function IconButton({ classname, type }: { classname?: string, type: 'Edit' | 'Delete' }) {
    return (
        <div className={`inline-flex items-center px-2 py-2 m-2 text-sm font-medium rounded ${classname}`}>
            {type === 'Edit' ? <Edit /> : <Delete />}
        </div>
    )
}
