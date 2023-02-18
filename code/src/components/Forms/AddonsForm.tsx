import { useContext } from "react";
import { PriceUnit } from "../../types";
import { StepFormContext } from "../../utils";
import { CheckboxCard } from "../CheckboxCard/CheckboxCard";



export function AddonsForm() {
    const formAPI = useContext(StepFormContext);
    const allAddOns = formAPI!.addOnInfo.getAllAddons();
    if (formAPI?.step != 3) return <></>;

    return (
        <section className="flex flex-col gap-4 mt-8">
            {allAddOns.map((addOn) => (
                <CheckboxCard
                    key={addOn.id}
                    title={addOn.title}
                    subtitle={addOn.subtitle}
                    cost={parseInt(formAPI.planInfo.pricingType === PriceUnit.MONTHLY ? addOn.monthlyCost : addOn.yearlyCost)}
                    isChecked={formAPI!.addOnInfo.isActiveAddon(addOn.id)}
                    onChange={(e) => {
                        formAPI!.addOnInfo.addOrRemoveAddon(addOn.id, !e.target.checked)
                    }}
                    unit={
                        formAPI!.planInfo.pricingType
                    }
                />
            ))}
        </section>
    );
}
