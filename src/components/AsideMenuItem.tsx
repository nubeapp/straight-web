export function AsideMenuItem({ label, href, active, icon }: { label: string, href: string, active: boolean, icon?: React.ReactNode }) {
    return (
        <a href={href} className={`flex flex-row gap-4 items-center py-3 px-5 font-small text-md transition hover:scale-[1.03] transition duration-200 ${active ? `text-blue-600 hover:text-blue-600 scale-[1.03]` : `text-zinc-600 hover:text-blue-600`}`}>
            {icon}{label}
        </a>
    );
}