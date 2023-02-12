import { ReactNode } from "react"
import { Button } from "../Button/Button"

interface StepFormProps {
    heading: string,
    subheading: string,
    isLast: boolean,
    isFirst: boolean,
    children: ReactNode
}

export function StepForm(props: StepFormProps) {
    return (
        <div className={`
            p-6
            sm:max-w-xl sm:mx-auto
            flex flex-col
            h-full
        `}>
            <header className="mt:2 sm:mt-6 tracking-wide">
                <h1 className="text-2xl font-bold text-marine-blue sm:text-3xl">{props.heading}</h1>
                <h2 className="text-cool-gray mt-2">{props.subheading}</h2>
            </header>
            <div className="flex-auto grow">
                {props.children}
            </div>
            <footer className={`
                w-full flex mb-2 absolute bottom-0 left-0 bg-white p-4
                sm:relative sm:p-0
            `}>
                {!props.isFirst && (
                    <Button type="secondary" onClick={() => { }}>
                        Go Back
                    </Button>
                )}
                <Button
                    type={props.isLast ? "final" : "primary"}
                    className="ml-auto"
                    onClick={() => { }}
                >
                    {props.isLast ? "Confirm" : "Next Step"}
                </Button>
            </footer>
        </div>
    );
}