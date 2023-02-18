import { ReactNode, useContext } from "react"
import { StepFormContext } from "../../utils";
import { Button } from "../Button/Button"

interface StepFormProps {
    heading: string,
    subheading: string,
    isLast: boolean,
    isFirst: boolean,
    children: ReactNode,
}

export function StepFormLayout(props: StepFormProps) {
    const formAPI = useContext(StepFormContext)
    const showHeaderFooter = formAPI?.step != 5 || false;
    return (
        <div className={`
            p-6
            sm:max-w-xl sm:mx-auto
            flex flex-col
            h-full
        `}>
            {showHeaderFooter && <header className="mt:2 sm:mt-6 tracking-wide">
                <h1 className="text-2xl font-bold text-marine-blue sm:text-3xl">{props.heading}</h1>
                <h2 className="text-cool-gray mt-2">{props.subheading}</h2>
            </header>}
            <div className="flex-auto grow">
                {props.children}
            </div>
            {showHeaderFooter && <footer className={`
                w-full flex absolute bottom-0 left-0 bg-white p-4
                sm:relative sm:p-0 sm:mb-2
            `}>
                {!props.isFirst && (
                    <Button type="secondary" onClick={() => { formAPI?.prevStep() }}>
                        Go Back
                    </Button>
                )}
                <Button
                    type={props.isLast ? "final" : "primary"}
                    className="ml-auto"
                    onClick={() => {
                        const handler = formAPI?.getSubmitHandler();
                        handler();
                    }}
                >
                    {props.isLast ? "Confirm" : "Next Step"}
                </Button>
            </footer>}
        </div>
    );
}