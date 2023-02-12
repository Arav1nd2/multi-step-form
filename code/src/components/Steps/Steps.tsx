import { StepIndicator } from "../StepIndicator/StepIndicator"

interface StepProps {
    activeStep: number
    stepData: {
        id: number,
        title: string,
    }[]
}

export function Steps(props: StepProps) {
    const isStepActive = (id: number) => {
        if (props.activeStep <= 3) return id === props.activeStep;
        return id >= 4;
    }
    return (
        <div className={`
            flex w-3/4 justify-evenly mx-auto mt-12
            sm:w-full sm:flex-col sm:items-start sm:ml-6 sm:gap-y-8
        `}>
            {
                props.stepData.map(step => (
                    <StepIndicator key={step.id} isActive={isStepActive(step.id)} title={step.title} stepNumber={step.id} />
                ))
            }
        </div>
    )
}