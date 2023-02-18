import React from "react";
import { useMemo } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { generateID } from "../../utils";

interface FormInputProps extends UseFormRegisterReturn<any> {
    type: string,
    placeholder: string,
    label: string,
    className?: string,
    error?: FieldError
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
    const formID = useMemo(() => `form-input-${generateID()}`, []);

    const inputBorder = !props.error ? "border-light-gray focus:border-purple-blue" : "border-strawberry-red";
    const errorMessage = props.error?.type === "required" ? "This field is required" : `Invalid ${props.name}`;
    const propsWithoutClassName = { ...props }
    delete propsWithoutClassName.className;
    delete propsWithoutClassName.error;
    return (
        <div className={props.className}>
            <div className="flex justify-between">
                <label htmlFor={formID} className="text-sm">{props.label}</label>
                {props.error && <span className="text-sm text-strawberry-red font-medium">{errorMessage}</span>}
            </div>
            <input id={formID} className={`block mt-2 px-3 py-2 w-full border border-solid rounded-lg ${inputBorder} outline-none`} {...propsWithoutClassName} ref={ref} />
        </div>
    )
})
