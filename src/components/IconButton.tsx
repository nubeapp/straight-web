import { Edit, Delete } from "../icons/Icons";

export function IconButton({ classname, type }: { classname?: string, type: 'Edit' | 'Delete' }) {
    return (
        <div className={`inline-flex items-center px-2 py-2 m-2 text-sm font-medium rounded ${classname}`}>
            {type === 'Edit' ? <Edit /> : <Delete />}
        </div>
    )
}
