import { useContext } from "react";
import { PriceUnit } from "../../types";
import { StepFormContext } from "../../utils";
import { Card } from "../Card/Card";
import { Switch } from "../Switch/Switch";

const PLANS = [
    {
        id: "1",
        icon: "/images/icon-arcade.svg",
        title: "Arcade",
        monthlyCost: "9",
        yearlyCost: "90",
    },
    {
        id: "2",
        icon: "/images/icon-advanced.svg",
        title: "Advanced",
        monthlyCost: "12",
        yearlyCost: "120",
    },
    {
        id: "3",
        icon: "/images/icon-pro.svg",
        title: "Pro",
        monthlyCost: "15",
        yearlyCost: "150",
    },
];

export function SelectPlanForm() {
    const formAPI = useContext(StepFormContext);
    if (formAPI?.step != 2) return <></>;

    return (
        <section>
            <div className={`
                flex flex-col gap-4 mt-4
                sm:flex-row
            `}>
                {PLANS.map((plan) => (
                    <Card
                        key={plan.id}
                        icon={plan.icon}
                        title={plan.title}
                        price={plan.monthlyCost}
                        units={PriceUnit.YEARLY}
                        isActive={plan.id === "1"}
                    />
                ))}
            </div>
            <div className="mt-6 bg-magnolia p-3 flex items-center justify-center rounded-lg">
                <Switch leftLabel="Monthly" rightLabel="Yearly" onChange={(checked) => console.log(checked)} checked={false} />
            </div>
        </section>
    );
}
