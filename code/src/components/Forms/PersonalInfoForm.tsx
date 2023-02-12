import { useContext } from "react";
import { StepFormContext } from "../../utils";
import { FormInput } from "../Input/FormInput";

export function PersonalInfoForm() {
    const formAPI = useContext(StepFormContext);
    if (formAPI?.step != 1) return <></>;
    return (
        <div className="flex flex-col gap-6 mt-6">
            <FormInput
                name="Name"
                placeholder="e.g. Stephen King"
                type="text"
                label="Name"
                onInputChange={(event) => {
                    console.log(event);
                }}
                value={""}
            />
            <FormInput
                name="Email Address"
                placeholder="e.g. stephenking@lorem.com"
                type="text"
                label="Email Address "
                onInputChange={(event) => {
                    console.log(event);
                }}
                value={""}
            />
            <FormInput
                name="Phone Number"
                placeholder="e.g. +1 234 567 890"
                type="text"
                label="Phone Number"
                onInputChange={(event) => {
                    console.log(event);
                }}
                value={""}
            />
        </div>
    );
}
