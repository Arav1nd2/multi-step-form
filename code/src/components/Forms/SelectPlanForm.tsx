import { useContext } from "react";
import { PriceUnit } from "../../types";
import { StepFormContext } from "../../utils";
import { Card } from "../Card/Card";
import { Switch } from "../Switch/Switch";



export function SelectPlanForm() {
    const formAPI = useContext(StepFormContext);
    const allPlans = formAPI!.planInfo.getAllPlans();
    if (formAPI?.step != 2) return <></>;

    return (
        <section>
            <div className={`
                flex flex-col gap-4 mt-4
                sm:flex-row
            `}>
                {allPlans.map((plan) => (
                    <Card
                        key={plan.id}
                        icon={plan.icon}
                        title={plan.title}
                        price={formAPI!.planInfo.pricingType === PriceUnit.MONTHLY ? plan.monthlyCost : plan.yearlyCost}
                        units={formAPI!.planInfo.pricingType}
                        isActive={formAPI!.planInfo.isPlanActive(plan.id)}
                        onClick={() => formAPI!.planInfo.setPlanAsActive(plan.id)}
                    />
                ))}
            </div>
            <div className="mt-6 bg-magnolia p-3 flex items-center justify-center rounded-lg">
                <Switch leftLabel="Monthly" rightLabel="Yearly" onChange={() => formAPI!.planInfo.togglePricingType()} checked={formAPI!.planInfo.pricingType === PriceUnit.YEARLY} />
            </div>
        </section>
    );
}
