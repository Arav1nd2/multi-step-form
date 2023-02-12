import { useContext } from "react";
import { PriceUnit } from "../../types";
import { StepFormContext } from "../../utils";
import { CheckboxCard } from "../CheckboxCard/CheckboxCard";

const AddOns = [
    {
        id: "1",
        title: "Online service",
        subtitle: "Access to multiplayer games",
        monthlyCost: "1",
        yearlyCost: "10",
    },
    {
        id: "2",
        title: "Larger Storage",
        subtitle: "Extra 1TB of cloud save",
        monthlyCost: "2",
        yearlyCost: "20",
    },
    {
        id: "3",
        title: "Customizable profile",
        subtitle: "Custom theme on your profile",
        monthlyCost: "2",
        yearlyCost: "20",
    },
];

export function AddonsForm() {
    const formAPI = useContext(StepFormContext);

    if (formAPI?.step != 3) return <></>;

    return (
        <section className="flex flex-col gap-4 mt-8">
            {AddOns.map((addOn) => (
                <CheckboxCard
                    key={addOn.id}
                    title={addOn.title}
                    subtitle={addOn.subtitle}
                    cost={parseInt(addOn.monthlyCost)}
                    isChecked={addOn.id !== "3"}
                    onChange={() => console.log("cjamged")}
                    unit={
                        PriceUnit.YEARLY
                    }
                />
            ))}
        </section>
    );
}
