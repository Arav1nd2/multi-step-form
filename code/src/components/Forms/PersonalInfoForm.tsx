import { useContext } from "react";
import { StepFormContext } from "../../utils";
import { FormInput } from "../Input/FormInput";

export function PersonalInfoForm() {
    const formAPI = useContext(StepFormContext);
    const register = formAPI!.personalInfo.formRegister;
    const errors = formAPI!.personalInfo.personalInfoErrors;
    if (formAPI?.step != 1) return <></>;
    return (
        <div className="flex flex-col gap-6 mt-6">
            <FormInput
                placeholder="e.g. Stephen King"
                type="text"
                label="Name"
                {...register("name", {
                    required: true,
                })}
                error={errors.name}
            />
            <FormInput
                placeholder="e.g. stephenking@lorem.com"
                type="text"
                label="Email Address"
                {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
                })}
                error={errors.email}
            />
            <FormInput
                placeholder="e.g. +1 234 567 890"
                type="text"
                label="Phone Number"
                {...register("phone", {
                    required: true,
                    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                })}
                error={errors.phone}
            />
        </div>
    );
}
