export function RoleTag({ label, classname }: { label: string, classname: string }) {
    return (
        <span id="badge-dismiss-default" className={`inline-flex items-center px-2 py-1 me-2 text-sm font-medium rounded ${classname}`}>
            {label}
        </span>
    )

}