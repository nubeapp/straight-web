export function NavbarItem({ label, href, active }: { label: string, href: string, active: boolean }) {
    return (
        <div className={`text-md hover:scale-[1.03] transition duration-200 ${active ? `text-blue-600 hover:text-blue-600` : `text-zinc-600 hover:text-blue-600`}`}>
            <a href={href}>{label}</a>
        </div>
    );
}