import { ReactNode } from "react";

interface SidebarProps {
    children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {
    return (
        <div id="step-section" className={`
        w-full h-1/4
        sm:w-fit sm:h-3/5 sm:min-w-[274px] sm:min-h-[568px]
        bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat 
        sm:bg-[url(/images/bg-sidebar-desktop.svg)] sm:bg-cover
        sm:border-[20px] sm:border-white sm:rounded-xl sm:border-r-0 sm:rounded-r-none
        `}>
            {children}
        </div>
    )
}