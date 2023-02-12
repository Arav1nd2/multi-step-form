import { useMemo, useState } from "react";
import { PriceUnit } from "../../types"
import { generateID } from "../../utils";

interface CheckboxCardProps {
    isChecked: boolean,
    onChange: (e: any) => void
    title: string,
    subtitle: string,
    cost: number,
    unit: PriceUnit
}

export function CheckboxCard(props: CheckboxCardProps) {
    const price = formatCost(props.cost, props.unit);
    const checkboxID = useMemo(() => (`checkbox-${generateID()}`), []);
    return (
        <label htmlFor={checkboxID}>
            <div className={`
                flex border items-center p-2 sm:p-3 rounded-lg
                ${props.isChecked ? "bg-magnolia border-purple-blue" : "border-light-gray"}
                hover:border-purple-blue
            `}>
                <div className="ml-3 mr-4 sm:mr-6">
                    <input type="checkbox" id={checkboxID} className="appearance-none rounded p-2 checked:bg-purple-blue ring-0 outline-none" checked={props.isChecked} onChange={props.onChange} />
                </div>
                <div className="flex-grow tracking-wide">
                    <h3 className="text-marine-blue font-medium text-md">{props.title}</h3>
                    <h3 className="text-cool-gray text-sm ">{props.subtitle}</h3>
                </div>
                <div className="mr-3 text-purple-blue">
                    {price}
                </div>
            </div>
        </label>
    )
}

function formatCost(cost: number, unit: PriceUnit) {
    switch (unit) {
        case PriceUnit.MONTHLY:
            return `+$${cost}/mo`;
        case PriceUnit.YEARLY:
            return `+$${cost}/yr`;
        default:
            return `+$${cost}`;
    }
}