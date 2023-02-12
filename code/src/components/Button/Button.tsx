import { ReactNode } from "react"

type ButtonType = "primary" | "secondary" | "final";

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface ButtonProps {
    children: ReactNode,
    type: ButtonType,
    className?: string,
    onClick: ButtonClickHandler
}

const primaryClasses = "block text-white bg-marine-blue px-6 py-3 rounded-md hover:bg-marine-blue-50 sm:rounded-lg";
const secondaryClasses = "block text-cool-gray px-6 py-3 rounded-md hover:text-marine-blue sm:rounded-lg";
const finalClasses = "block text-white bg-purple-blue px-8 py-3 rounded-md hover:bg-purple-blue-50 sm:rounded-lg"

function makeStyle(type: ButtonType, className: string) {
    switch (type) {
        case "primary":
            return (primaryClasses + " " + className).trim();
        case "secondary":
            return (secondaryClasses + " " + className).trim();
        case "final":
            return (finalClasses + " " + className).trim();
        default:
            return "text-red-500";
    }
}
export function Button(props: ButtonProps) {
    const classes = makeStyle(props.type, props.className ? props.className : "");
    return (
        <>
            <button className={classes} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
}