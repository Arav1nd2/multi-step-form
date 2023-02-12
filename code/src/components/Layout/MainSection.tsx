import { ReactNode } from 'react'

export function MainSection({ children }: { children: ReactNode }) {
    return (
        <div id="main-section" className={`
          w-4/5 h-fit bg-white
          sm:min-h-[568px] sm:h-3/5
          mx-auto sm:mx-0
          -mt-24 sm:mt-0
          pb-2 sm:pb-0
          sm:w-full
          sm:rounded-r-xl rounded-xl
        `}>
            {children}
        </div>
    )
}