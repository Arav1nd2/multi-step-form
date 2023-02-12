import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { generateID } from "../../utils";

interface FormInputProps {
    type: string,
    placeholder: string,
    label: string,
    name: string,
    value: string | boolean | number,
    className?: string,
    validations?: ValidatorConfig,
    setError?: boolean,
    onInputChange: onInputChange
}

interface ValidatorConfig {
    isRequired?: boolean,
    minLen?: number,
    maxLen?: number,
    minVal?: number,
    maxVal?: number,
    regex?: string,
}

interface InputChangeEvent {
    event: React.FormEvent<HTMLInputElement>,
    validate: () => boolean,
    setShowError: (val: boolean) => void
}

enum ErrorType {
    REQUIRED,
    REGEX_ERROR,
}

type onInputChange = (event: InputChangeEvent) => void;

export function FormInput(props: FormInputProps) {
    const inputRef = useRef(null);

    const [showInputError, setShowInputError] = useState<boolean>(false);
    const [errorMessage, setError] = useState<string>("");

    useEffect(() => {
        if (props.setError != undefined || props.setError != null)
            setShowInputError(props.setError);
    }, [props.setError])

    const formID = useMemo(() => `form-input-${generateID()}`, []);

    const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const ctx = {
            setErrorCalled: false,
            validationHadErrors: false
        }
        props.onInputChange({
            event,
            validate: (): boolean => {
                console.log("Starting validator!")
                ctx.validationHadErrors = validator(inputRef, setError);
                return ctx.validationHadErrors;
            },
            setShowError: (val: boolean): void => {
                console.log("Setting error!!!");
                ctx.setErrorCalled = true;
                setShowInputError(val);
            }
        });
        if (!ctx.validationHadErrors && !ctx.setErrorCalled) {
            setShowInputError(false);
        }
    }, []);

    const inputBorder = !showInputError ? "border-light-gray focus:border-purple-blue" : "border-strawberry-red"
    return (
        <div className={props.className}>
            <div className="flex justify-between">
                <label htmlFor={formID} className="text-sm">{props.label}</label>
                {showInputError && <span className="text-sm text-strawberry-red font-medium">{errorMessage}</span>}
            </div>
            <input id={formID} name={props.name} placeholder={props.placeholder} className={`block mt-2 px-3 py-2 w-full border border-solid rounded-lg ${inputBorder} outline-none`}
                {...validatorProps(props.validations)} ref={inputRef} onChange={onChange} value={props.value} />
        </div>
    )
}

export function validatorProps(config: ValidatorConfig = {}) {
    return Object.assign({},
        config.isRequired && { 'data-required': config.isRequired },
        config.maxLen && { 'data-maxlen': config.maxLen },
        config.minLen && { 'data-minlen': config.minLen },
        config.minVal && { 'data-minval': config.minVal },
        config.maxVal && { 'data-maxval': config.maxVal },
        config.regex && { 'data-regex': config.regex },
    );
}

function validator(ref: React.MutableRefObject<HTMLInputElement | null>, setError: React.Dispatch<React.SetStateAction<string>>): boolean {
    const el = ref.current;
    if (Boolean(el?.getAttribute("data-required")) && !Boolean(el?.value)) {
        const message = getMessage(ErrorType.REQUIRED);
        el?.setAttribute("data-error-message", message);
        setError(message);
        return true;
    }
    if (Boolean(el?.getAttribute("data-regex"))) {
        const regex = el?.getAttribute("data-regex") || "";
        const pattern = new RegExp(regex);
        const value = el?.value || "";
        const message = getMessage(ErrorType.REGEX_ERROR, el?.name);
        if (!pattern.test(value)) {
            el?.setAttribute("data-error-message", message);
            setError(message);
            return true;
        }
    }
    setError("");
    return false;
}

function getMessage(type: ErrorType, name: string = "") {
    switch (type) {
        case ErrorType.REGEX_ERROR:
            return `Invalid ${name}`;
        case ErrorType.REQUIRED:
            return "This field is required"
        default:
            return "Invalid value"
    }
}

