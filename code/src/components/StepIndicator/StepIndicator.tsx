

interface StepIndicatorProps {
    isActive: boolean,
    stepNumber: number,
    title: string
}

export function StepIndicator(props: StepIndicatorProps) {
    return (
        <div className="flex bg-purple-blue">
            <div className={`
            rounded-[1000px] w-10 h-10 border  text-lg text-center align-middle leading-9
            ${props.isActive ? "text-black bg-light-blue border-light-blue" : "text-white border-white"}
            `}>
                {props.stepNumber}
            </div>
            <div className="hidden sm:block text-white tracking-wide ml-5">
                <h2 className="text-xs uppercase text-light-gray">Step {props.stepNumber}</h2>
                <h2 className="font-bold uppercase">{props.title}</h2>
            </div>
        </div>
    )
}