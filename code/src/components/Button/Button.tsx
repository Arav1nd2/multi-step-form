import { ReactNode } from "react"

type ButtonType = "primary" | "secondary";

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface ButtonProps {
    children: ReactNode,
    type: ButtonType,
    className?: string,
    onClick: ButtonClickHandler
}

const primaryClasses = "text-white bg-marine-blue px-6 py-3 rounded-lg hover:bg-marine-blue-50";
const secondaryClasses = "text-cool-gray px-6 py-3 rounded-lg hover:text-marine-blue";

function makeStyle(type: ButtonType, className: string) {
    switch (type) {
        case "primary":
            return (primaryClasses + " " + className).trim();
        case "secondary":
            return (secondaryClasses + " " + className).trim();
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